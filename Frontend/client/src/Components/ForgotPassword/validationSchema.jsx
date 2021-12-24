//We need separate validation schemas for every input form

import * as Yup from "yup";
export const validationSchema = Yup.object({

    email: Yup.string()
        .email("Please provide a valid email")
        .required("Required")
});