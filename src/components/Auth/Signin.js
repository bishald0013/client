import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLoginUserMutation } from "../../services/userAuthApi";
const Signin = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const [loginUser] = useLoginUserMutation();
  const handleSubmit = async (event) => {
    try {
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
    } catch (error) {
      console.log(error);
      alert(error?.message || "An error occured");
    }
  };

  const resetPassword = async (event) => {
    navigate("/reset/password");
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  return (
    <form className="signin-form" onSubmit={handleSubmit}>
      <h2 className="title">Signin</h2>
      <div className="input-field">
        <i className="fas fa-user"></i>
        <input type="email" name="email" id="email" placeholder="username" />
      </div>
      {/* <div className="input-field">
        <i className="fas fa-lock"></i>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="password"
        />
      </div> */}
      <div className="input-field">
        <i className="fas fa-lock"></i>
        <input
          className="pe-5"
          type={showPassword ? "text" : "password"}
          placeholder="password"
          name="password"
          id="password"
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
      <div class="d-grid gap-2 d-md-block">
        <button
          class="btn btn-primary w-100"
          onClick={resetPassword}
          type="button"
        >
          Forget Password
        </button>
      </div>
    </form>
  );
};

export default Signin;
