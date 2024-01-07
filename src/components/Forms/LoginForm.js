import React from "react";
import { ErrorMessage, Icon, RegFormContainer, RegFormWrapper } from "./Style";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useLoginUserMutation } from "../../services/userAuthApi";

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();
  const [loginUser] = useLoginUserMutation();
  const [error, serError] = useState({
    status: false,
    message: "",
    type: "",
  });

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const loginData = new FormData(event.currentTarget);

      const logInData = {
        email: loginData.get("email"),
        password: loginData.get("password"),
      };

      if (!logInData.email) throw new Error("Email is required");
      if (!logInData.password) throw new Error("Password is required");

      const response = await loginUser(logInData);

      if (!response || response?.data?.status === false)
        throw new Error("Fail to login please try again");

      localStorage.setItem("token", response?.data?.token);
      navigate("/dashboard");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <RegFormContainer>
      {error?.status && (
        <ErrorMessage className="alert alert-danger">
          {error?.message}
        </ErrorMessage>
      )}
      <RegFormWrapper className="card shadow-2-strong card-registration">
        <div className="card-body p-4 p-md-5">
          <h3 className="mb-4 pb-2 pb-md-0 mb-md-5">Create a new account</h3>
          <form onSubmit={handleSubmit}>
            {/* email */}
            <div className="row">
              <div className="col">
                <div className="d-flex flex-row align-items-center mb-3">
                  <Icon className="fa-solid fa-mobile fa-lg me-3 fa-fw"></Icon>
                  <div className="form-outline flex-fill mb-0">
                    <input
                      type="text"
                      id="email"
                      className="form-control"
                      placeholder="Enter email"
                      name="email"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Password */}
            <div className="row">
              <div className="col">
                <div className="d-flex flex-row align-items-center mb-3">
                  <Icon className="fas fa-lock fa-lg me-3 fa-fw"></Icon>
                  <div className="form-outline flex-fill mb-0 d-flex align-items-center">
                    <input
                      type={showPassword ? "text" : "password"}
                      id="password"
                      className="form-control"
                      placeholder="Enter password"
                      name="password"
                    />
                    <i
                      className={`fas ${
                        showPassword ? "fa-eye-slash" : "fa-eye"
                      } fa-lg ms-2 cursor-pointer`}
                      onClick={togglePasswordVisibility}
                    ></i>
                  </div>
                </div>
              </div>
            </div>

            <div class="d-flex justify-content-center">
              <button
                type="submit"
                class="btn btn-success btn-block btn-lg gradient-custom-4 text-body"
                disabled={isSubmitting}
              >
                Login
              </button>
            </div>

            <p class="text-center text-muted mt-3 mb-0">
              Don't have an account?
              <Link to="/register" class="fw-bold text-body">
                <u>Register here</u>
              </Link>
            </p>
          </form>
        </div>
      </RegFormWrapper>
    </RegFormContainer>
  );
};

export default LoginForm;
