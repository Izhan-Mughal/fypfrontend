import * as Yup from "yup";

export const SignUpSchema = Yup.object({
name: Yup.string().min(2).max(30).required("Please enter your name"),
email: Yup.string().email().max(40).required("Please enter email"),
password: Yup.string().min(6).max(40).required("Password is required"),
country: Yup.string().required("Please select country"),
industry: Yup.string().min(0).max(40),
companyLogo: Yup.string().min(0).max(255),
companyname: Yup.string().min(0).max(40),
pitchdeck: Yup.string().min(0).max(255),
targetcountry: Yup.string().min(0).max(40),
companybio: Yup.string().min(0).max(1000),
founder: Yup.string().min(0).max(255),
teamsize: Yup.number(),
totalinvestment: Yup.number(),
maxinvestment: Yup.number(),
fundingraise: Yup.boolean(),
investortype: Yup.string(),
website: Yup.string().min(0).max(200)


    
})
