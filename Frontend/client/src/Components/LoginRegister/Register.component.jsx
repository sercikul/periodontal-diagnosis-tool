import React from "react";
import { useFormik } from "formik";
import {
  FormInput,
  InputForm,
  LoginRegisterContainer,
  LoginRegisterHeader,
  TopSectionLoginRegister,
  LoginRegisterTop,
  LoginSignUpButton,
  FadedLink,
  BoldLink,
} from "./LoginRegister.elements";
import { validationSchema } from "./validationSchema";
import { Container } from "../../Global.Styles";
import {Redirect} from "react-router-dom";

//Redux
import {connect} from "react-redux";
import { userRegister } from "../../actions/auth";
import PropTypes from "prop-types";
import {setAlert} from "../../actions/alert";



// setAlert,
const RegisterComponent = ({ userRegister,isAuthenticated, setAlert}) => {
  const formik = useFormik({
    initialValues: {
      fname: "",
      lname: "",
      email: "",
      newPassword: "",
      confirmNewPassword: "",
    },
    validationSchema,
  });



  const handleSubmit = async (values) => {
    values.preventDefault();

      //new user
      const newDoctor = {
        fname: formik.values.fname,
        lname: formik.values.lname,
        email: formik.values.email,
        password: formik.values.newPassword,
      };

      const body = JSON.stringify(newDoctor);

      userRegister(body);
  };

  // Redirect if logged in
  if(isAuthenticated){
    return (
        <Redirect to="/"/>
    )
  }


  return (
    <>
      <Container>
        <LoginRegisterContainer>
          <LoginRegisterTop>
            <TopSectionLoginRegister />
            <LoginRegisterHeader>Create Account</LoginRegisterHeader>
          </LoginRegisterTop>
          <InputForm onSubmit={handleSubmit}>
            <FormInput
              name="fname"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.fname}
              onBlur={formik.handleBlur}
              placeholder="First Name"
              className={formik.errors.fname && formik.touched.fname && "error"}
            />
            {formik.errors.fname && formik.touched.fname && (
              <div className="error_message">{formik.errors.fname}</div>
            )}

            <FormInput
              name="lname"
              type="lname"
              value={formik.values.lname}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="Last Name"
              className={formik.errors.lname && formik.touched.lname && "error"}
            />
            {formik.errors.lname && formik.touched.lname && (
              <div className="error_message">{formik.errors.lname}</div>
            )}

            <FormInput
              name="email"
              type="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="Email Address"
              className={formik.errors.email && formik.touched.email && "error"}
            />
            {formik.errors.email && formik.touched.email && (
              <div className="error_message">{formik.errors.email}</div>
            )}

            <FormInput
              name="newPassword"
              placeholder="New Password"
              type="password"
              value={formik.values.newPassword}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={
                formik.errors.newPassword &&
                formik.touched.newPassword &&
                "error"
              }
            />
            {formik.errors.newPassword && formik.touched.newPassword && (
              <div className="error_message">{formik.errors.newPassword}</div>
            )}

            <FormInput
              name="confirmNewPassword"
              placeholder="Confirm New Password"
              type="password"
              value={formik.values.confirmNewPassword}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={
                formik.errors.confirmNewPassword &&
                formik.touched.confirmNewPassword &&
                "error"
              }
            />
            {formik.errors.confirmNewPassword &&
              formik.touched.confirmNewPassword && (
                <div className="error_message">
                  {formik.errors.confirmNewPassword}
                </div>
              )}

            <LoginSignUpButton
              type="submit"
              disabled={!(formik.isValid && formik.dirty)}
            >
              Sign Up
            </LoginSignUpButton>
          </InputForm>

          <FadedLink>Already have an account?</FadedLink>
          <BoldLink href="/login">Sign in</BoldLink>
        </LoginRegisterContainer>
      </Container>
    </>
  );
};

RegisterComponent.propTypes = {
  setAlert: PropTypes.func.isRequired,
  userRegister: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({isAuthenticated: state.auth.isAuthenticated})

//setAlert
export default connect(mapStateToProps, { userRegister,setAlert })(RegisterComponent);
