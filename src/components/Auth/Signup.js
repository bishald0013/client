import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRegisterUserMutation } from "../../services/userAuthApi";

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfPassword, setShowConfPassword] = useState(false);
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
    if (credentials.password !== credentials.confirmPassword) {
      alert("Password should be same as confirm password");
      return;
    }

    const response = await registerUser(credentials);

    if (response.data.status === true) {
      // setToken(response.data.token);
      localStorage.setItem("token", response.data.token);
      navigate("/dashboard");
    } else {
      serError({
        status: true,
        message: response.data.message,
        type: response.data.type,
      });
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };
  const toggleConfPasswordVisibility = () => {
    setShowConfPassword((prevState) => !prevState);
  };

  return (
    <>
      {error.status && (
        <div className="alert alert-danger">{error.message}</div>
      )}

      <form className="signup-form" onSubmit={handleSubmit}>
        <h2 className="title">Sign Up</h2>
        <div className="input-field">
          <i className="fas fa-user"></i>
          <input
            type="text"
            placeholder="full name"
            name="userName"
            onChange={handleChange}
            value={credentials.userName}
          />
        </div>
        <div className="input-field">
          <i className="fas fa-phone"></i>
          <input
            type="text"
            placeholder="phone number"
            name="phoneNumber"
            onChange={handleChange}
            value={credentials.phoneNumber}
          />
        </div>
        <div className="input-field">
          <i className="fas fa-phone"></i>
          <input
            type="text"
            placeholder="Alternate number"
            name="alternateNumber"
            onChange={handleChange}
            value={credentials.alternateNumber}
          />
        </div>
        <div className="input-field">
          <i className="fas fa-envelope"></i>
          <input
            type="text"
            placeholder="email"
            name="email"
            onChange={handleChange}
            value={credentials.email}
          />
        </div>
        <div className="input-field">
          <i className="fas fa-envelope"></i>
          <input
            type="number"
            placeholder="zip code"
            name="zip"
            onChange={handleChange}
            value={credentials.zip}
          />
        </div>
        {/* Password */}
        <div className="input-field">
          <i className="fas fa-lock"></i>
          <input
            className="pe-5"
            type={showPassword ? "text" : "password"}
            placeholder="password"
            name="password"
            onChange={handleChange}
            value={credentials.password}
          />
          <span
            className="password-toggle"
            onClick={togglePasswordVisibility}
            style={{
              position: "absolute",
              right: "20px",
            }}
          >
            {showPassword ? (
              <i className="fas fa-eye-slash"></i>
            ) : (
              <i className="fas fa-eye"></i>
            )}
          </span>
        </div>
        {/* Confirm Password */}

        <div className="input-field">
          <i className="fas fa-key"></i>
          <input
            className="pe-5"
            type={showConfPassword ? "text" : "password"}
            placeholder="repeat password"
            name="confirmPassword"
            onChange={handleChange}
            value={credentials.confirmPassword}
          />
          <span
            className="password-toggle"
            onClick={toggleConfPasswordVisibility}
            style={{
              position: "absolute",
              right: "20px",
            }}
          >
            {showConfPassword ? (
              <i className="fas fa-eye-slash"></i>
            ) : (
              <i className="fas fa-eye"></i>
            )}
          </span>
        </div>
        <input type="submit" value="Signup" className="btn solid" />
      </form>
    </>
  );
};

export default Signup;
