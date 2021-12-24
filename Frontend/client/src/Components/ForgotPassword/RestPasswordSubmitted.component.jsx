import React from 'react';
import {ForgotPasswordText, FormInput} from "./ForgotPassword.elements";
import {useFormik} from "formik";
import {InputForm} from "./ForgotPassword.elements";
import {validationSchema} from "../PasswordReset/validationSchema";

const ForgotPasswordSubmitted = ({resetEmailSent}) => {

    const formik = useFormik({
        initialValues: {
            newPassword: "",
            confirmNewPassword: "",
        },
        validationSchema,
    });

    return (
        <>{resetEmailSent ? (
            <ForgotPasswordText>If you email exist in our system,
                you should have received a password reset email!</ForgotPasswordText>
        ):
            <>
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
                </InputForm>
            </>
        }
        </>
    );
};


export default ForgotPasswordSubmitted;




