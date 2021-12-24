import React, { useState } from "react";
import { useFormik } from "formik";
import {
  FormInput,
  InputForm,
  LoginRegisterContainer,
  TopSectionLoginRegister,
  LoginRegisterTop,
  LoginSignUpButton,
  FadedLink,
  BoldLink,
  LoginRegisterHeader,
} from "./LoginRegister.elements";
import { LoginValidationSchema } from "./LoginValidationSchema";
import { Container } from "../../Global.Styles";
import { ForgotPassword } from "../ForgotPassword/ForgotPassword.component";
import {Redirect} from "react-router-dom";


//Redux
import {userLogin} from "../../actions/auth";
import {connect} from "react-redux";
import PropTypes from "prop-types";


const LoginComponent = ({userLogin, isAuthenticated}) => {

  // Form validation
  const formik = useFormik({
    initialValues: { email: "", password: "" },
    validationSchema:LoginValidationSchema,
  });

  const handleSubmit = (values) => {
    values.preventDefault();

    //Doctor login
    const doctor = {
      email: formik.values.email,
      password: formik.values.password
    };

    const body = JSON.stringify(doctor);
    userLogin(body);
  };

  // Value for state: showForgotPassword
  // Function for updating the state: showForgotPassword
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const openForgotPassword = () => {
    setShowForgotPassword((prev) => !prev);
  };

  // Redirect if logged in
  if(isAuthenticated){
    return (
        <Redirect to="/"/>
    )
  }

  return (
    <>
      <ForgotPassword
        showForgotPassword={showForgotPassword}
        setShowForgotPassword={setShowForgotPassword}
      />
      <Container>
        <LoginRegisterContainer>
          <LoginRegisterTop>
            <TopSectionLoginRegister />
            <LoginRegisterHeader>Welcome Back</LoginRegisterHeader>
          </LoginRegisterTop>
          <InputForm onSubmit={handleSubmit}>
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

            <FormInput
                name="password"
                placeholder="Password"
                type="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className={
                  formik.errors.password &&
                  formik.touched.password &&
                  "error"
                }
            />
            {formik.errors.password && formik.touched.password && (
                <div className="error_message">{formik.errors.password}</div>
            )}

            <LoginSignUpButton
              type="submit"
              disabled={!(formik.isValid && formik.dirty)}
            >
              Sign in
            </LoginSignUpButton>
          </InputForm>
          <BoldLink
            onClick={openForgotPassword}
            style={{
              paddingTop: "10px",
              paddingBottom: "10px",
            }}
          >
            Forgotten password?
          </BoldLink>
          <FadedLink>Don't have an account?</FadedLink>
          <BoldLink href="/register">Sign up</BoldLink>
        </LoginRegisterContainer>
      </Container>
    </>
  );
};

LoginComponent.propTypes = {
  userLogin: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({isAuthenticated: state.auth.isAuthenticated})

export default connect(mapStateToProps, { userLogin })(LoginComponent);
