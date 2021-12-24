import React from 'react';
import {
    FormInput,
    InputForm,
    LoginRegisterContainer, LoginRegisterHeader,
    LoginRegisterTop, LoginSignUpButton,
    TopSectionLoginRegister
} from "../LoginRegister/LoginRegister.elements";
import {Container} from "../../Global.Styles";
import {useFormik} from "formik";
import {validationSchema} from "./validationSchema";
import axios from "axios";
import {useHistory} from "react-router-dom";
import moment from "moment";

function ResetPasswordLoggedOut() {
    const history = useHistory();

    const formik = useFormik({
        initialValues: {
            newPassword: "",
            confirmNewPassword: "",
        },
        validationSchema,
    });

    const handleSubmit = async (values) => {
        values.preventDefault();

        const body = {
            password: formik.values.newPassword,
            tokenExpirationDate: moment().add(6, 'hours').toISOString()

        };
        await axios.post(`https://backendaapefp.azurewebsites.net/api/doctors/newPasswordReset/${window.location.href.split('/').slice(-1).pop()}`,body).then(res =>{
            if(res.status == 200){
                history.push('/login')
            }
        })


    };

    return (
        <>
            <Container>
                <LoginRegisterContainer>
                    <LoginRegisterTop>
                        <TopSectionLoginRegister />
                        <LoginRegisterHeader>Reset Password</LoginRegisterHeader>
                    </LoginRegisterTop>
                    <InputForm onSubmit={handleSubmit}>

                        <FormInput
                            name="newPassword"
                            placeholder="New Password"
                            type="password"
                            value={formik.values.newPassword}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            className={
                                formik.errors.newPassword &&
                                formik.touched.newPassword &&
                                "error"
                            }
                        />
                        {formik.errors.newPassword && formik.touched.newPassword && (
                            <div className="error_message">{formik.errors.newPassword}</div>
                        )}

                        <FormInput
                            name="confirmNewPassword"
                            placeholder="Confirm New Password"
                            type="password"
                            value={formik.values.confirmNewPassword}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            className={
                                formik.errors.confirmNewPassword &&
                                formik.touched.confirmNewPassword &&
                                "error"
                            }
                        />
                        {formik.errors.confirmNewPassword &&
                        formik.touched.confirmNewPassword && (
                            <div className="error_message">
                                {formik.errors.confirmNewPassword}
                            </div>
                        )}

                        <LoginSignUpButton
                            type="submit"
                            disabled={!(formik.isValid && formik.dirty)}
                        >
                            Reset
                        </LoginSignUpButton>
                    </InputForm>
                </LoginRegisterContainer>
            </Container>
        </>
    );
}

export default ResetPasswordLoggedOut;