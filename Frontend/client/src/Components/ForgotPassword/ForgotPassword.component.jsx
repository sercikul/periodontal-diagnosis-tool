import React, {useRef, useEffect, useCallback, useState} from "react";
import '../Navbar/navbar.css';

import {
    ForgotPasswordHeader,
    ForgotPasswordWindow,
    PopupBackground,
    PasswordResetButton, MainFieldsContainer, ForgotPasswordText, InputForm, FormInput
} from "./ForgotPassword.elements";
import CloseIcon from "@material-ui/icons/Close";
import {useFormik} from "formik";
import {validationSchema} from "./validationSchema";
import axios from "axios";
import moment from "moment";


export const ForgotPassword = ({showForgotPassword, setShowForgotPassword}) => {

    const formik = useFormik({
        initialValues: {
            email: "",
        },
        validationSchema,
    });

    // API call to send email for password reset
    const passwordResetAPI = () =>{
        const body = {
            email: formik.values.email,
            tokenExpirationDate: moment().add(6, 'hours').toISOString()
        }

        axios.post("https://backendaapefp.azurewebsites.net/api/doctors/passwordReset",body).then()
    }

    // Show a message that a password reset email was sent
    const [resetEmailSent,setResetEmailSent] = useState(false);
    const showResetEmailSent = () => {

        passwordResetAPI()

        setResetEmailSent(prevState => !prevState)
    };
    //

    // Disabling a button after clicking on it
    const [passwordResetButton,setPasswordResetButton] = useState(true);
    const hidePasswordResetButton = () => {setPasswordResetButton(prevState => false)};

    const forgotPasswordRef = useRef()

    const closeForgotPassword = e => {
        if(forgotPasswordRef.current === e.target) {setShowForgotPassword(false)}
    }

    const escKeyPress = useCallback(e => {if(e.key === 'Escape' && showForgotPassword)
                                                    {setShowForgotPassword(false)}},
        [setShowForgotPassword, showForgotPassword])

    useEffect(() => {document.addEventListener(("keydown"), escKeyPress)},[escKeyPress])



    return (
        <>
        {showForgotPassword ? (
            <PopupBackground ref={forgotPasswordRef} onClick = {closeForgotPassword}>
                    <ForgotPasswordWindow>
                    <MainFieldsContainer>
                        <ForgotPasswordHeader>Password Reset</ForgotPasswordHeader>
                        {resetEmailSent ? (
                                <ForgotPasswordText>If your email exists in our system,
                                    you should have received a password reset link!</ForgotPasswordText>
                            ):
                                <InputForm>
                                    <ForgotPasswordText>Submit your email address, and we will
                                        send you a link to reset your password.</ForgotPasswordText>
                                    <FormInput
                                        name="email"
                                        type="email"
                                        value={formik.values.email}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        placeholder="Email Address"
                                        className={formik.errors.email &&
                                        formik.touched.email &&
                                        "error"}
                                    />
                                    {formik.errors.email && formik.touched.email && (
                                        <div className="error_message">{formik.errors.email}</div>
                                    )}
                                    {passwordResetButton ?
                                        <PasswordResetButton
                                            type="submit"
                                            disabled={!(formik.isValid && formik.dirty)}
                                            onClick = {()=> {hidePasswordResetButton();showResetEmailSent();}}>
                                            Reset </PasswordResetButton> : null}
                                </InputForm>
                        }
                    </MainFieldsContainer>
                    <CloseIcon onClick = {() => setShowForgotPassword(prev => !prev)}/>
                    </ForgotPasswordWindow>
            </PopupBackground>
        ): null}
        </>
    )
}