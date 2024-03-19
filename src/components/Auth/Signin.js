import React from "react";
import { useNavigate } from "react-router-dom";
import { useLoginUserMutation } from "../../services/userAuthApi";
import { useState } from "react";
const Signin = () => {
  const navigate = useNavigate();
  const [loginUser] = useLoginUserMutation();

  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();

    const loginData = new FormData(event.currentTarget);

    const logInData = {
      email: loginData.get("email"),
      password: loginData.get("password"),
    };

    if (!logInData.email) throw new Error("Email is required");
    if (!logInData.password) throw new Error("Password is required");

    const response = await loginUser(logInData);

    if (response.data.status === false)
      throw new Error("Fail to login please try again");

    localStorage.setItem("token", response.data.token);
    navigate("/dashboard");
  };

  return (
    <form className="signin-form" onSubmit={handleSubmit}>
      <h2 className="title">Signin</h2>
      <div className="input-field">
        <i className="fas fa-user"></i>
        <input type="email" name="email" id="email" placeholder="username" />
      </div>
      <div className="input-field">
        <i className="fas fa-lock"></i>
        <input
          className="pe-5"
          type={showPassword ? "text" : "password"}
          name="password"
          id="password"
          placeholder="password"
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
      <input type="submit" value="Signin" className="btn solid" />
    </form>
  );
};

export default Signin;
