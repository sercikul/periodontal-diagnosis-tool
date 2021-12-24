import React from 'react';
import {
    FormInput,
    InputForm,
    LoginRegisterContainer, LoginRegisterHeader,
    LoginRegisterTop, LoginSignUpButton,
    TopSectionLoginRegister
} from "../LoginRegister/LoginRegister.elements";
import {Container} from "../../Global.Styles";
import * as Yup from "yup";
import {useFormik} from "formik";

const validationSchema = Yup.object({
    email: Yup.string().email("Please provide a valid email").required("Required"),

    password: Yup.string().required("Required"),

    passwordConfirmation: Yup.string().required("Required")
        .oneOf([Yup.ref('password'),null], 'Passwords must match')

});

function ResetPassword() {

    const {values, touched, errors, isSubmitting, handleChange, handleBlur, handleSubmit} = useFormik({
        initialValues:{email:"", password:""},
        validationSchema,
        onSubmit(values){}

    });

    return (
        <>
            <Container>
                <LoginRegisterContainer>
                    <LoginRegisterTop>
                        <TopSectionLoginRegister />
                        <LoginRegisterHeader>Reset Password</LoginRegisterHeader>
                    </LoginRegisterTop>

                    <InputForm>
                        <FormInput name='password'
                                   type='password'
                                   value={values.password}
                                   onChange={handleChange}
                                   onBlur={handleBlur}
                                   placeholder="New Password"
                                   className={errors.password && touched.password && "error"}/>
                        {errors.password && touched.password &&
                        <div className='error_message'>{errors.password}</div>}

                        <FormInput name='passwordConfirmation'
                                   type='password'
                                   value={values.passwordConfirmation}
                                   onChange={handleChange}
                                   onBlur={handleBlur}
                                   placeholder= "Confirm New Password"
                                   className={errors.passwordConfirmation &&
                                   touched.passwordConfirmation && "error"}/>
                        {errors.passwordConfirmation && touched.passwordConfirmation
                        && <div className='error_message'>{errors.passwordConfirmation}</div>}

                    </InputForm>
                    <LoginSignUpButton disabled={isSubmitting}>Reset</LoginSignUpButton>
                </LoginRegisterContainer>
            </Container>
        </>
    );
}

export default ResetPassword;