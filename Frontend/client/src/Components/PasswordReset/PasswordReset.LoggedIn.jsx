import React, {useState} from 'react';
import {
    BoldLink,
    FormInput,
    InputForm,
    LoginRegisterContainer, LoginRegisterHeader,
    LoginRegisterTop, LoginSignUpButton,
    TopSectionLoginRegister
} from "../LoginRegister/LoginRegister.elements";
import {Container} from "../../Global.Styles";
import {ForgotPassword} from "../ForgotPassword/ForgotPassword.component";
import {useFormik} from "formik";
import {validationSchema} from './validationSchema';

function ResetPasswordLoggedIn(props) {

    // Value for state: showForgotPassword
    // Function for updating the state: showForgotPassword
    const [showForgotPassword,setShowForgotPassword] = useState(false);

    const openForgotPassword = () => {setShowForgotPassword( prev => !prev)};

    // Input check
    const {values, touched, errors, isSubmitting, handleChange, handleBlur, handleSubmit} = useFormik({
        initialValues:{currentPassword:"", newPassword:"", confirmNewPassword:""},
        validationSchema,
        onSubmit(values){}
    });

    return (
        <>
            <ForgotPassword showForgotPassword={showForgotPassword} setShowForgotPassword={setShowForgotPassword}/>
            <Container>
                <LoginRegisterContainer>
                    <LoginRegisterTop>
                        <TopSectionLoginRegister />
                        <LoginRegisterHeader>Reset Password</LoginRegisterHeader>
                    </LoginRegisterTop>

                    <InputForm>
                        <FormInput name='currentPassword'
                                   placeholder="Current Password"
                                   type='password'
                                   value={values.currentPassword}
                                   onChange={handleChange}
                                   onBlur={handleBlur}
                                   className={errors.currentPassword && touched.currentPassword && "error"}/>
                        {errors.currentPassword && touched.currentPassword &&
                        <div className='error_message'>{errors.currentPassword}</div>}

                        <FormInput name='newPassword'
                                   placeholder="New Password"
                                   type='password'
                                   value={values.newPassword}
                                   onChange={handleChange}
                                   onBlur={handleBlur}
                                   className={errors.newPassword && touched.newPassword && "error"}/>
                        {errors.newPassword && touched.newPassword &&
                        <div className='error_message'>{errors.newPassword}</div>}


                        <FormInput name='confirmNewPassword'
                                   placeholder= "Confirm New Password"
                                   type='password'
                                   value={values.confirmNewPassword}
                                   onChange={handleChange}
                                   onBlur={handleBlur}
                                   className={errors.confirmNewPassword &&
                                   touched.confirmNewPassword && "error"}/>
                        {errors.confirmNewPassword && touched.confirmNewPassword
                        && <div className='error_message'>{errors.confirmNewPassword}</div>}
                        <LoginSignUpButton>Reset</LoginSignUpButton>
                    </InputForm>
                    <BoldLink onClick = {openForgotPassword}
                              style={{paddingBottom: '25px', marginTop:"-10px"}}>Forgot Password?</BoldLink>
                </LoginRegisterContainer>
            </Container>
        </>
    );
}

export default ResetPasswordLoggedIn;