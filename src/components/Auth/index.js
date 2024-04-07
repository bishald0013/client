import React, { useEffect, useState } from "react";
import logo from "../../assets/svg/signup_logo.svg";
import signuplogo from "../../assets/svg/undraw_sign_up_n6im.svg";

import "./style.css";
import Signin from "./Signin";
import Signup from "./Signup";
import { useNavigate } from "react-router-dom";

const Auth = (props) => {
  const [mode, setMode] = useState();

  const navigate = useNavigate();
  useEffect(() => {
    setMode(props.mode);
  }, [props.mode]);
  return (
    <div className={`container ${mode}`}>
      <div className="forms-container">
        <div className="signin-signup">
          <Signin />

          <Signup />
        </div>
        <div className="panels-container">
          <div className="panel left-panel">
            <div className="content">
              <h3>New here ?</h3>
              <p>
                If you don't have an account then you have to first create to
                login
              </p>
              <button
                className="btn transparent"
                id="signup-btn"
                onClick={() => navigate("/register")}
              >
                Sign up
              </button>
            </div>
            <img src={logo} className="image" alt="" />
          </div>

          <div className="panel right-panel">
            <div className="content">
              <h3>One of us ?</h3>
              <p>
                If you are already registered then no need to create another
                account just sign in
              </p>
              <button
                className="btn transparent"
                id="signin-btn"
                onClick={() => navigate("/login")}
              >
                Sign in
              </button>
            </div>
            <img src={signuplogo} className="image" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
