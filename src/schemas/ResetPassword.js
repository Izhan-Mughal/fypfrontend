import * as Yup from "yup";

export const ResetPasswordSchema = Yup.object({
    password: Yup.string().email().max(40).required("Please enter your new Password"),
    Newpassword: Yup.string().required()
        .oneOf([Yup.ref("password"), null],"Password must match")
    ,
})
