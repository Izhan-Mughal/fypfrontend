import React, { useEffect, useState } from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import { Container as ContainerBase } from "components/misc/Layouts";
import { useAuth } from "./AuthContext1";
import { useNavigate } from "react-router-dom";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import illustration from "images/login-illustration.svg";
import logo from "images/logo.svg";
import googleIconImageSrc from "images/google-icon.png";
import twitterIconImageSrc from "images/twitter-icon.png";
import { ReactComponent as LoginIcon } from "feather-icons/dist/icons/log-in.svg";
import { useFormik } from "formik";
import { LoginSchema } from "schemas/LoginSchema.js";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";

const Container = tw(ContainerBase)`min-h-screen bg-primary-900 text-white font-medium flex justify-center -m-8`;
const Content = tw.div`max-w-screen-xl m-0 sm:mx-20 sm:my-16 bg-white text-gray-900 shadow sm:rounded-lg flex justify-center flex-1`;
const MainContainer = tw.div`lg:w-1/2 xl:w-5/12 p-6 sm:p-12`;
const LogoLink = tw.a``;
const LogoImage = tw.img`h-12 mx-auto`;
const MainContent = tw.div`mt-12 flex flex-col items-center`;
const Heading = tw.h1`text-2xl xl:text-3xl font-extrabold`;
const FormContainer = tw.div`w-full flex-1 mt-8`;

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
const Input = tw.input`w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5 first:mt-0`;
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
  ${tw`m-12 xl:m-16 w-full max-w-sm bg-contain bg-center bg-no-repeat`}
`;

const Login = () => {
  const [isMounted, setIsMounted] = useState(true);
  const logoLinkUrl = "#";
  const illustrationImageSrc = illustration;
  const headingText = "Sign In To HyperKonnect";

  const { login } = useAuth();
  const navigate = useNavigate();
  const socialButtons = [
    {
      iconImageSrc: googleIconImageSrc,
      text: "Sign In With Google",
      url: "https://google.com"
    },
    {
      iconImageSrc: twitterIconImageSrc,
      text: "Sign In With Twitter",
      url: "https://twitter.com"
    }
  ];
  const submitButtonText = "Sign In";
  const SubmitButtonIcon = LoginIcon;
  const forgotPasswordUrl = "/forgetPassword";
  const signupUrl = "/register";
  useEffect(() => {
    setIsMounted(true);

    // Cleanup function

  }, []);
  const initialValues = {
    email: "",
    password: "",


  }

  const { values, errors, handleBlur, touched, handleChange, handleSubmit, setFieldValue } = useFormik({
    initialValues: initialValues,
    validationSchema: LoginSchema,
    onSubmit: (values) => {
      console.log(values);
      setIsMounted(false);
      const handleApiCall = async () => {
        //       email: 'izhan28@gmail.com',
        // password: 'izhan123',
        try {
          // e.preventDefault();
          const response = await axios.post('http://localhost:5000/api/v1/users/login', {
            email: values?.email,
            password: values?.password,
          }, {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
            "Accept": "application/json"
          });

          const apiResponse = response.data;
          console.log(apiResponse)
          setIsMounted(true);
          // Assuming login is an asynchronous function that returns a Promise
          await login(apiResponse.data.user._id, apiResponse.data.accessToken, apiResponse.data.refreshToken);

          // Check if the component is still mounted before navigating
          if (isMounted) {
            navigate('/dashboard/');
          }
        } catch (error) {
          console.log('Error:', error,);
          setIsMounted(true);
          toast.error(error?.response?.data)

        }
      };
      handleApiCall();
    }
  })


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
                {/* <SocialButtonsContainer>
                {socialButtons.map((socialButton, index) => (
                  <SocialButton key={index} href={socialButton.url}>
                    <span className="iconContainer">
                      <img src={socialButton.iconImageSrc} className="icon" alt=""/>
                    </span>
                    <span className="text">{socialButton.text}</span>
                  </SocialButton>
                ))}
              </SocialButtonsContainer>
              <DividerTextContainer>
                <DividerText>Or Sign in with your e-mail</DividerText>
              </DividerTextContainer> */}
                <Toaster />
                <Form onSubmit={handleSubmit}>
                  <label htmlFor="email" className="mb-0 small" >Enter Email *</label>
                  <Input name="email" onChange={handleChange} onBlur={handleBlur} value={values.email} id="email" type="email" placeholder="Email" />
                  {errors.email && touched.email ? <div class="alert alert-danger mt-2" role="alert">
                    {errors.email}
                  </div> : ""}
                  <label className="mt-2 small" htmlFor="password">Enter Password * </label>
                  <Input onChange={handleChange} onBlur={handleBlur} type="password" value={values.password} name="password" id="password" placeholder="Password" />
                  {errors.password && touched.password ? <div class="alert alert-danger  mt-2" role="alert">
                    {errors.password}
                  </div> : ""}
                  {values.password === "" || values.email === "" ?
                    <SubmitButton type="submit" disabled>
                      <SubmitButtonIcon className="icon" />
                      <span className="text">{submitButtonText}</span>
                    </SubmitButton>
                    :
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
                  }
                </Form>
                <p tw="mt-6 text-xs text-gray-600 text-center">
                  <a href={forgotPasswordUrl} tw="border-b border-gray-500 border-dotted">
                    Forgot Password ?
                  </a>
                </p>
                <p tw="mt-8 text-sm text-gray-600 text-center">
                  Dont have an account?{" "}
                  <a href={signupUrl} tw="border-b border-gray-500 border-dotted">
                    Sign Up
                  </a>
                </p>
              </FormContainer>
            </MainContent>
          </MainContainer>
          <IllustrationContainer>
            <IllustrationImage imageSrc={illustrationImageSrc} />
          </IllustrationContainer>
        </Content>
      </Container>
    </AnimationRevealPage>
  )
};

export default Login;