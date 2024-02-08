import * as Yup from "yup";

export const ForgetPasswordSchema = Yup.object({
email: Yup.string().email().max(40).required("Please enter email"),
})
