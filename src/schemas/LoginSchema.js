import * as Yup from "yup";

export const LoginSchema = Yup.object({
email: Yup.string().email().max(40).required("Please enter email"),
password: Yup.string().min(6).max(40).required("Password is required"),
})
