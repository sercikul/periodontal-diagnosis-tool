import * as Yup from "yup";

export const LoginValidationSchema = Yup.object({
    email: Yup.string()
        .required("Required")
        .email("Please provide a valid email"),
    password: Yup.string()
        .required("Required")
});
