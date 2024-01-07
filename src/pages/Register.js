import React from "react";
import logo from "../assets/svg/signup_logo.svg";
import { Container } from "../global-styles";
import RegisterForm from "../components/Forms/RegisterForm";

const Register = () => {
  return (
    // <Auth mode='signup-mode' />
    <Container>
      <RegisterForm />
    </Container>
  );
};

export default Register;
