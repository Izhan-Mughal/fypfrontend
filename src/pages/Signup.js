import React, { useEffect, useState } from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import { Container as ContainerBase } from "components/misc/Layouts";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import illustration from "images/signup-illustration.svg";
import logo from "images/logo.svg";
import googleIconImageSrc from "images/google-icon.png";
import twitterIconImageSrc from "images/twitter-icon.png";
import { ReactComponent as SignUpIcon } from "feather-icons/dist/icons/user-plus.svg";
import CountryData from "./Countries.json"
import CountrySelect from "./CountrySelect";
import Select from 'react-select';
import { useFormik } from "formik";
import { SignUpSchema } from "schemas/Registration.js";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";






const Container = tw(ContainerBase)`min-h-screen bg-primary-900 text-white font-medium flex justify-center -m-8`;
const Content = tw.div`max-w-screen-xl m-0 sm:mx-20 sm:my-16 bg-white text-gray-900 shadow sm:rounded-lg flex justify-center flex-1`;
const MainContainer = tw.div`lg:w-1/2 xl:w-5/12 p-6 sm:p-12`;
const LogoLink = tw.a``;
const LogoImage = tw.img`h-12 mx-auto`;
const MainContent = tw.div`mt-6 flex flex-col items-center`;
const Heading = tw.h1`text-2xl xl:text-3xl font-extrabold`;
const FormContainer = tw.div`w-full flex-1 mt-8`;
// const Stepperdiv = tw.ol`flex items-center w-full text-sm font-medium text-center text-gray-500 dark:text-gray-400 sm:text-base`;
// const List1 = tw.li`flex md:w-full items-center text-blue-600 dark:text-blue-500 sm:after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700`;
// const List1Span = tw.span`flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-200 dark:after:text-gray-500`;
// const verifySvg = tw.svg`w-3.5 h-3.5 sm:w-4 sm:h-4 me-2.5`;
// const infoSpan = tw.span`hidden sm:inline-flex sm:ms-2`;
// const List2 = tw.li`flex md:w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700`;
// const List2Span = tw.span`flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-200 dark:after:text-gray-500`;
// const List2Span1 = tw.span`flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-200 dark:after:text-gray-500`;
// const List3 = tw.li`flex items-center`;
// const List3Span = tw.span`me-2`;
const SocialButtonsContainer = tw.div`flex flex-col items-center`;
const SocialButton = styled.a`
  ${tw`w-full max-w-xs font-semibold rounded-lg py-3 border text-gray-900 bg-gray-100 hocus:bg-gray-200 hocus:border-gray-400 flex items-center justify-center transition-all duration-300 focus:outline-none focus:shadow-outline text-sm mt-5 first:mt-0`}
  .iconContainer {
    ${tw`bg-white p-2 rounded-full`}
  }
  .icon {
    ${tw`w-4`}
  }
  .text {
    ${tw`ml-4`}
  }
`;

const DividerTextContainer = tw.div`my-12 border-b text-center relative`;
const DividerText = tw.div`leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform -translate-y-1/2 absolute inset-x-0 top-1/2 bg-transparent`;

const Form = tw.form`mx-auto max-w-xs`;
const Input = tw.input`w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-2 mb-2 first:mt-0`;
const TextArea = tw.textarea`w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-2 first:mt-0`;
const SelectInput = tw.select`w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-2 first:mt-0`;
const SubmitButton = styled.button`
  ${tw`mt-5 tracking-wide font-semibold bg-primary-500 text-gray-100 w-full py-4 rounded-lg hover:bg-primary-900 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none`}
  .icon {
    ${tw`w-6 h-6 -ml-2`}
  }
  .text {
    ${tw`ml-3`}
  }
`;
const IllustrationContainer = tw.div`sm:rounded-r-lg flex-1 bg-purple-100 text-center hidden lg:flex justify-center`;
const IllustrationImage = styled.div`
  ${props => `background-image: url("${props.imageSrc}");`}
  ${tw`m-12 xl:m-16 w-full max-w-lg bg-contain bg-center bg-no-repeat`}
`;


const Signup = () => {
  useEffect(() => {
    setFormState(1);
  }, [])
  const [FormState, setFormState] = useState(1);
  const [UserState, setUserState] = useState("");
  const [isMounted, setIsMounted] = useState(true);
  const navigate = useNavigate();
  const initialValues = {
    investortype: null,
    email: "",
    name: "",
    password: "",
    country: "",
    industry: "",
    companyLogo: undefined,
    companyname: "",
    pitchdeck: "",
    targetcountry: "",
    companyname: "",
    pitchdeck: "",
    companybio: "",
    founder: "",
    teamsize: "",
    totalinvestment: "",
    maxinvestment: "",
    fundingraise: "",
    website: "",

  }

  const { values, errors, handleBlur, touched, handleChange, handleSubmit, setFieldValue } = useFormik({
    initialValues: initialValues,
    validationSchema: SignUpSchema,
    onSubmit: (values) => {
      console.log(values);
      setIsMounted(false);
      const handleApiCall = async (e) => {
        //       email: 'izhan28@gmail.com',
        // password: 'izhan123',
        try {
          // e.preventDefault();
          const formData = await new FormData();
          formData.append('email', values?.email);
          formData.append('password', values?.password);
          formData.append('industryType', values?.industry);
          formData.append('userName', values?.name);
          formData.append('country', values?.country);
          formData.append('companyLogo', values?.companyLogo); // Assuming values.companyLogo is a File object
          formData.append('companyBio', values?.companybio);
          formData.append('pitchDeck', values?.pitchdeck);
          formData.append('website', values?.website);
          formData.append('totalInvestment', values?.totalinvestment);
          formData.append('maxInvestment', values?.maxinvestment);
          formData.append('fundingRaise', false);
          formData.append('founderName', values?.founder);
          formData.append('teamSize', values?.teamsize);
          formData.append('facebook', null);
          formData.append('linkedin', null);
          formData.append('twitter', null);
          formData.append('targetCountry', values?.targetcountry);
          formData.append('accType', values?.investortype);

          const response = await axios.post('http://localhost:5000/api/v1/users/register', formData, {
            "Content-Type": "multipart/formdata",
            'Accept': 'application/json',
          });

          const apiResponse = response.data;
          toast(response.data.message);
          setIsMounted(true);
          // console.log(response.data)
          // Assuming login is an asynchronous function that returns a Promise
          // await login(apiResponse.data.user._id, apiResponse.data.accessToken, apiResponse.data.refreshToken);

          // Check if the component is still mounted before navigating
          if (isMounted) {
            navigate('/login/');
          }
        } catch (error) {
          console.log('Error:', error,);
          toast.error(error?.response?.data)
          console.log(initialValues)
          console.log(initialValues)
          setIsMounted(true);
          console.log("values", values?.teamsize)
        }
      };
      handleApiCall();
    }
  })
  useEffect(() => {
    let isMounted = true;

    // Cleanup function
    return () => {
      isMounted = false;
    };
  }, []);
  console.log(errors);
  // const formik = useFormik();


  // console.log(CountryData.countries[0].label);
  const logoLinkUrl = "#";
  const illustrationImageSrc = illustration;
  const headingText = "Sign Up For HyperKonnect";
  const socialButtons = [
    {
      iconImageSrc: googleIconImageSrc,
      text: "Sign Up With Google",
      url: "https://google.com"
    },
    {
      iconImageSrc: twitterIconImageSrc,
      text: "Sign Up With Twitter",
      url: "https://twitter.com"
    }
  ];
  const submitButtonText = "Sign Up";
  const SubmitButtonIcon = SignUpIcon;
  const tosUrl = "#";
  const privacyPolicyUrl = "#";
  const signInUrl = "/login";

  return (

    <AnimationRevealPage>
      <Container>
        <Content>
          <MainContainer>

            <LogoLink href={logoLinkUrl}>
              <LogoImage src={logo} />
            </LogoLink>
            <MainContent>
              <Heading>{headingText}</Heading>
              <FormContainer>
                <Toaster />
                {/* <SocialButtonsContainer>
                {socialButtons.map((socialButton, index) => (
                  <SocialButton key={index} href={socialButton.url}>
                    <span className="iconContainer">
                      <img src={socialButton.iconImageSrc} className="icon" alt="" />
                    </span>
                    <span className="text">{socialButton.text}</span>
                  </SocialButton>
                ))}
              </SocialButtonsContainer> */}
                {/* <DividerTextContainer>
                <DividerText> Sign up with your e-mail</DividerText>
              </DividerTextContainer> */}
                {
                  FormState === 1 ?
                    <div className="d-flex align-items-center justify-content-center gap-3 mb-5">
                      <div className="d-flex align-items-center text-primary">Step 1</div>
                      <hr className="d-flex w-25" />
                      <div className="d-flex align-items-center">Step 2</div>
                      <hr className="d-flex w-25" />
                      <div className="d-flex align-items-center">Step 3</div>
                    </div> : FormState === 2 ?
                      <div className="d-flex align-items-center justify-content-center gap-3 mb-5">
                        <div className="d-flex align-items-center ">Step 1</div>
                        <hr className="d-flex w-25" />
                        <div className="d-flex align-items-center text-primary">Step 2</div>
                        <hr className="d-flex w-25" />
                        <div className="d-flex align-items-center">Step 3</div>
                      </div> :
                      <div className="d-flex align-items-center justify-content-center gap-3 mb-5">
                        <div className="d-flex align-items-center ">Step 1</div>
                        <hr className="d-flex w-25" />
                        <div className="d-flex align-items-center">Step 2</div>
                        <hr className="d-flex w-25" />
                        <div className="d-flex align-items-center text-primary">Step 3</div>
                      </div>
                }

                <Form onSubmit={handleSubmit}>

                  {FormState === 1 ?
                    <>
                      <SubmitButton type="button" onClick={() => {
                        setFormState(2); setUserState("Investor"); setFieldValue(
                          "investortype",
                          "Investor"
                        )
                      }}>
                        <SubmitButtonIcon className="icon" />
                        <span className="text">Signup As Investor</span>
                      </SubmitButton>
                      <SubmitButton type="button" onClick={() => {
                        setFormState(2); setUserState("Startup"); setFieldValue(
                          "investortype",
                          "Startup"
                        )
                      }}>
                        <SubmitButtonIcon className="icon" />
                        <span className="text">Signup As Startup</span>
                      </SubmitButton>
                    </>
                    : <></>}
                  {FormState === 2 ?
                    <>
                      <label htmlFor="email" className="mb-0 small" >Enter Email *</label>
                      <Input name="email" onChange={handleChange} onBlur={handleBlur} value={values.email} id="email" type="email" placeholder="Email" />
                      {errors.email && touched.email ? <div class="alert alert-danger" role="alert">
                        {errors.email}
                      </div> : ""}

                      <label htmlFor="name" className="mt-2 small">Enter Username *</label>
                      <Input type="text" value={values.name} name="name" onChange={handleChange} onBlur={handleBlur} id="name" placeholder="Username" />
                      {errors.name && touched.name ? <div class="alert alert-danger" role="alert">
                        {errors.name}
                      </div> : ""}
                      <label className="mt-2 small" htmlFor="password">Enter Password * </label>
                      <Input onChange={handleChange} onBlur={handleBlur} type="password" value={values.password} name="password" id="password" placeholder="Password" />
                      {errors.password && touched.password ? <div class="alert alert-danger" role="alert">
                        {errors.password}
                      </div> : ""}
                      <label className="mt-2 small" htmlFor="country">Enter Country * </label>
                      {/* <CountrySelect
                        id="country"
                        name="country"
                        onChange={handleChange} onBlur={handleBlur}
                        value={values.country}
                        countries={CountryData.countries}
                      /> */}
                      {/* <CountrySelect
                        id="country"
                        name="country"
                        onChange={(event) => {
                    
                          if (event.target.value) {
                            setFieldValue(
                              "country",
                              event.target.value
                            )
                          }
                          setFieldValue(
                            "country",
                            event.target.value
                          )
                          console.log(initialValues.country)
                          alert("hi");
                        }} onBlur={handleBlur}
                        value={values.country}
                        countries={CountryData.countries}
                      /> */}
                      <SelectInput
                        id="country"
                        name="country"
                        value={values.country}
                        onChange={handleChange}
                      >
                        {/* CountryData.countries[0].label */}
                        {CountryData.countries.map((country) => (
                          <option key={country.value} value={country.value}>
                            {`${country.label} ${country.value}`}
                          </option>
                        ))}
                      </SelectInput>
                      {errors.country && touched.country ? <div class="alert alert-danger" role="alert">
                        {errors.country}
                      </div> : ""}
                      {
                        UserState === "Startup" ?
                          <>
                            <label className="mt-2 small" htmlFor="industry">Select Industry  </label>

                            {/* <Select onChange={handleChange} onBlur={handleBlur} value={values.industry} id="industry" name="industry" options={[
                              { value: 'HealthCare', label: 'Health Care' },
                              { value: 'Retail', label: 'Retail' },
                              { value: 'Entertainment', label: 'Entertainment' },
                              { value: 'Education', label: 'Education' },
                              { value: 'Food', label: 'Food' },
                              { value: 'IT & Tech', label: 'IT & Tech' }]} >

                            </Select> */}
                            <SelectInput onChange={handleChange} onBlur={handleBlur} value={values.industry} id="industry" name="industry">
                              <option value="HealthCare" key="HealthCare">Health Care</option>
                              <option value="Retail" key="Retail">Retail</option>
                              <option value="Entertainment" key="Entertainment">Entertainment</option>
                              <option value="Education" key="Education">Education</option>
                              <option value="Food" key="Food">Food</option>
                              <option value="Tech" key="Tech">IT & Tech</option>
                            </SelectInput>
                          </> :
                          ""
                      }
                      {errors.email || errors.password || errors.country || errors.name || values.email === "" || values.password === "" || values.country === "" || values.name === "" ? <></> :
                        <SubmitButton type="button" onClick={() => { setFormState(3); }}>
                          <span className="text">Continue Step 3</span>
                        </SubmitButton>
                      }
                    </> :
                    <></>
                  }

                  {FormState === 3 ?
                    <>
                      <label className="mt-0 small" htmlFor="companyLogo"> {UserState === "Startup" ? "Company Logo" : "Avatar Logo"} </label>
                      <Input onChange={(event) => {
                        if (event.currentTarget.files) {
                          setFieldValue(
                            "companyLogo",
                            event.currentTarget.files[0]
                          )
                        }
                      }} onBlur={handleBlur} type="File" accept="image/*" id="companyLogo" name="companyLogo" />
                      {/* <Input onChange={handleChange} onBlur={handleBlur} type="File" accept="image/*" id="logo" name="logo" /> */}
                      <label htmlFor="targetcountry" className="mt-2 small mb-2" >Enter Target Country </label>
                      {/* <CountrySelect
                        value={values.targetcountry}
                        onChange={handleChange} onBlur={handleBlur}
                        id="targetcountry" name="targetcountry"
                        countries={CountryData.countries}
                      /> */}
                      <SelectInput
                        id="targetcountry"
                        name="targetcountry"
                        value={values.targetcountry}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      >
                        {/* CountryData.countries[0].label */}
                        {CountryData.countries.map((country) => (
                          <option key={country.value} value={country.value}>
                            {`${country.label} ${country.value}`}
                          </option>
                        ))}
                      </SelectInput>
                      {
                        UserState === "Startup" ?
                          <>
                            <label htmlFor="companyname" className="mb-0 small" >Enter Company Name </label>
                            <Input onChange={handleChange} onBlur={handleBlur} value={values.companyname} id="companyname" name="companyname" type="text" placeholder="Company Name" />
                            <label htmlFor="pitchdeck" className="mb-0 small" >Enter Pitch Deck </label>
                            <Input onChange={handleChange} onBlur={handleBlur} value={values.pitchdeck} id="pitchdeck" name="pitchdeck" type="text" placeholder="Pitch Deck" />
                            <label htmlFor="companybio" className="mt-2 small">Enter Company Bio </label>
                            <TextArea onChange={handleChange} onBlur={handleBlur} value={values.companybio} id="companybio" name="companybio" type="text" placeholder="Company Bio" />
                            <label htmlFor="founder" className="mb-0 small" >Enter Founder Name </label>
                            <Input onChange={handleChange} onBlur={handleBlur} value={values.founder} id="founder" name="founder" type="text" placeholder="Founder Name" />
                            <label htmlFor="teamsize" className="mb-0 small" >Enter Team Size </label>
                            <Input onChange={handleChange} onBlur={handleBlur} value={values.teamsize} id="teamsize" name="teamsize" type="number" placeholder="Team Size" />

                          </> : <></>

                      }
                      {
                        UserState === "Investor" ?
                          <>
                            <label htmlFor="totalinvestment" className="mb-0 small" >Total Investment </label>
                            <Input onChange={handleChange} onBlur={handleBlur} value={values.totalinvestment} id="totalinvestment" name="totalinvestment" type="number" placeholder="Total Investment" />
                            <label htmlFor="maxinvestment" className="mb-0 small" >Max Investment </label>
                            <Input onChange={handleChange} onBlur={handleBlur} value={values.maxinvestment} id="maxinvestment" name="maxinvestment" type="number" placeholder="Max Investment" />
                            <label htmlFor="fundingraise" className="mb-0 small" >Funding Raise </label>
                            <Input onChange={handleChange} onBlur={handleBlur} value={values.fundingraise} id="fundingraise" name="fundingraise" type="check" placeholder="Funding Raise" />

                          </> : <></>

                      }


                      <label className="mb-0 mt-2 small" htmlFor="website" >Enter Website </label>
                      <Input onChange={handleChange} onBlur={handleBlur} value={values.website} type="text" id="website" name="website" placeholder="Website URL" />
                      <SubmitButton type="button" onClick={() => { setFormState(2); }}>
                        <span className="text">Back to Step 2</span>
                      </SubmitButton>
                      {UserState === "Investor" || "Startup"
                        ?
                        <SubmitButton type="submit" >
                          <SubmitButtonIcon className="icon" />
                          <span className="text d-flex align-items-center gap-4">{submitButtonText}
                            {
                              isMounted ? "" :
                                <div class="spinner-border text-light small" style={{ width: "15px", height: "15px" }} role="status">
                                  <span class="visually-hidden">Loading...</span>
                                </div>
                            }
                          </span>
                        </SubmitButton>

                        :
                        <SubmitButton type="button" disabled >
                          <SubmitButtonIcon className="icon" />
                          <span className="text">{submitButtonText}</span>
                        </SubmitButton>
                      }
                    </>
                    :
                    <></>
                  }
                  {
                    FormState === 1 ?
                      <>
                        <p tw="mt-6 text-xs text-gray-600 text-center">
                          I agree to abide by Hyperconnekt's{" "}
                          <a href={tosUrl} tw="border-b border-gray-500 border-dotted">
                            Terms of Service
                          </a>{" "}
                          and its{" "}
                          <a href={privacyPolicyUrl} tw="border-b border-gray-500 border-dotted">
                            Privacy Policy
                          </a>
                        </p>

                        <p tw="mt-8 text-sm text-gray-600 text-center">
                          Already have an account?{" "}
                          <a href={signInUrl} tw="border-b border-gray-500 border-dotted">
                            Sign In
                          </a>
                        </p>
                      </> : <></>}

                </Form>
              </FormContainer>
            </MainContent>
          </MainContainer>
          <IllustrationContainer>
            <IllustrationImage imageSrc={illustrationImageSrc} />
          </IllustrationContainer>
        </Content>
      </Container>
    </AnimationRevealPage >
  )
}
export default Signup;