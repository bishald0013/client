import React from "react";
import { ErrorMessage, Icon, RegFormContainer, RegFormWrapper } from "./Style";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useRegisterUserMutation } from "../../services/userAuthApi";

const RegisterForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isAgreeChecked, setIsAgreeChecked] = useState(false);

  const [credentials, setCredentials] = useState({
    userName: "",
    phoneNumber: "",
    alternateNumber: "",
    email: "",
    zip: "",
    password: "",
    confirmPassword: "",
  });

  const [error, serError] = useState({
    status: false,
    message: "",
    type: "",
  });

  const navigate = useNavigate();
  const [registerUser] = useRegisterUserMutation();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleChange = (event) => {
    setCredentials({
      ...credentials,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (credentials.phoneNumber === credentials.alternateNumber) {
      alert("Alternate number cannot be same as phone number");
      return;
    }

    try {
      setIsSubmitting(true);
      const response = await registerUser(credentials);

      if (response?.data?.status === true) {
        // setToken(response.data.token);
        localStorage.setItem("token", response.data.token);
        navigate("/dashboard");
      } else {
        serError({
          status: true,
          message: response?.data?.message,
          type: response?.data?.type,
        });
      }
    } catch (e) {
      serError({
        status: true,
        message: "Something went wrong ",
        type: "Exception",
      });
    } finally {
      setIsSubmitting(false);
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
            {/* name , phone number */}
            <div className="row">
              <div className="col-md-6 mb-3">
                <div className="d-flex flex-row align-items-center mb-3">
                  <Icon className="fas fa-user fa-lg me-3 fa-fw"></Icon>
                  <div className="form-outline flex-fill mb-0">
                    <input
                      type="text"
                      id="userName"
                      className="form-control"
                      placeholder="Enter full name"
                      name="userName"
                      onChange={handleChange}
                      value={credentials.userName}
                    />
                  </div>
                </div>
              </div>
              <div className="col-md-6 mb-3">
                <div className="d-flex flex-row align-items-center mb-3">
                  <Icon className="fa-solid fa-phone fa-lg me-3 fa-fw"></Icon>
                  <div className="form-outline flex-fill mb-0">
                    <input
                      type="text"
                      id="phoneNumber"
                      className="form-control"
                      placeholder="Enter phone number"
                      name="phoneNumber"
                      onChange={handleChange}
                      value={credentials.phoneNumber}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Alternate number , email */}
            <div className="row">
              <div className="col-md-6 mb-3">
                <div className="d-flex flex-row align-items-center mb-3">
                  <Icon className="fa-solid fa-mobile fa-lg me-3 fa-fw"></Icon>
                  <div className="form-outline flex-fill mb-0">
                    <input
                      type="text"
                      id="alternateNumber"
                      className="form-control"
                      placeholder="Enter alternate number"
                      name="alternateNumber"
                      onChange={handleChange}
                      value={credentials.alternateNumber}
                    />
                  </div>
                </div>
              </div>
              <div className="col-md-6 mb-3">
                <div className="d-flex flex-row align-items-center mb-3">
                  <Icon className="fas fa-envelope fa-lg me-3 fa-fw"></Icon>
                  <div className="form-outline flex-fill mb-0">
                    <input
                      type="email"
                      id="email"
                      className="form-control"
                      placeholder="Enter Email "
                      name="email"
                      onChange={handleChange}
                      value={credentials.email}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Password , confirm Password */}
            <div className="row">
              <div className="col-md-6 mb-3">
                <div className="d-flex flex-row align-items-center mb-3">
                  <Icon className="fas fa-lock fa-lg me-3 fa-fw"></Icon>
                  <div className="form-outline flex-fill mb-0 d-flex align-items-center">
                    <input
                      type={showPassword ? "text" : "password"}
                      id="password"
                      className="form-control"
                      placeholder="Enter password"
                      name="password"
                      onChange={handleChange}
                      value={credentials.password}
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
              <div className="col-md-6 mb-3">
                <div className="d-flex flex-row align-items-center mb-3">
                  <Icon className="fas fa-key fa-lg me-3 fa-fw"></Icon>
                  <div className="form-outline flex-fill mb-0 d-flex align-items-center">
                    <input
                      type={showPassword ? "text" : "password"}
                      id="confirmPassword"
                      className="form-control"
                      placeholder="Retype your password"
                      name="confirmPassword"
                      onChange={handleChange}
                      value={credentials.confirmPassword}
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

            {/* Zipcode  */}
            <div className="row">
              <div className="col-md-6 mb-3">
                <div className="d-flex flex-row align-items-center mb-3">
                  <Icon className="fa-solid fa-house fa-lg me-3 fa-fw"></Icon>
                  <div className="form-outline flex-fill mb-0">
                    <input
                      type="text"
                      id="zip"
                      className="form-control"
                      placeholder="Enter zipcode"
                      name="zip"
                      onChange={handleChange}
                      value={credentials.zip}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div class="form-check d-flex justify-content-center mb-2">
              <input
                class="form-check-input me-2"
                type="checkbox"
                value=""
                id="form2Example3cg"
                onChange={() => setIsAgreeChecked(!isAgreeChecked)}
              />
              <label class="form-check-label" for="form2Example3g">
                I agree all statements in{" "}
                <a href="#!" class="text-body">
                  <u>Terms of service</u>
                </a>
              </label>
            </div>

            <div class="d-flex justify-content-center">
              <button
                type="submit"
                class="btn btn-success btn-block btn-lg gradient-custom-4 text-body"
                disabled={!isAgreeChecked || isSubmitting}
              >
                Register
              </button>
            </div>

            <p class="text-center text-muted mt-3 mb-0">
              Have already an account?
              <Link to="/login" class="fw-bold text-body">
                <u>Login here</u>
              </Link>
            </p>
          </form>
        </div>
      </RegFormWrapper>
    </RegFormContainer>
  );
};

export default RegisterForm;
