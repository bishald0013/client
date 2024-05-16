import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLoginUserMutation } from "../../services/userAuthApi";
const Signin = () => {
  const [loading, setLoading] = useState(false);
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
      setLoading(true);
      if(response.data.status === true){
        setLoading(false);
        localStorage.setItem("token", response.data.token);
        navigate("/dashboard");
      }else{
        setLoading(false);
        const msg = response.data.message
        alert(msg);
      }
      setLoading(false);
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
    <>
      <form className="signin-form" onSubmit={handleSubmit}>
        {loading === true ? (
          <div className="d-flex justify-content-center my-5">
            <div className="spinner-border" role="status">
            </div>
            <span className="mx-3 mt-2 fw-bold fs-5">Loading...</span>
          </div>
        ) : (
          <></>
        )}
        
        <h2 className="title">Sign In</h2>
        <div className="input-field">
          <i className="fas fa-user"></i>
          <input type="email" name="email" id="email" placeholder="username" />
        </div>
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
        <div class="d-grid gap-2 d-md-block">
          <button type="submit" className="btn btn-outline-success btn-lg me-3 my-3">
            Sign in
          </button>
          <button
            className="btn btn-outline-success btn-lg"
            onClick={resetPassword}
            type="button"
          >
            Forgot Password
          </button>
        </div>
      </form>
    </>
  );
};

export default Signin;
