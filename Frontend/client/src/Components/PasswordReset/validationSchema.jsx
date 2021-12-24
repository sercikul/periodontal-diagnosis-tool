//We need separate validation schemas for every input form

import * as Yup from "yup";
export const validationSchema = Yup.object({

    newPassword: Yup.string()
        .required("Required")
        .min(8, "Password must be at least 8 characters long")
        .matches(/(?=[0-9])/, "Password must contain a number")
        .matches(/(?=.*[A-Za-z])/, "Password must contain a  a character"),

    confirmNewPassword: Yup.string()
        .required("Required")
        .oneOf([Yup.ref("newPassword"), null], "Passwords must match"),
});