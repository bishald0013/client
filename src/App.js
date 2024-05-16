import React from "react";
import GlobalStyle from "./global-styles";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar/Navbar";
import Dashboard from "./components/Dashboard/Dashboard";
import ResetPass from "./components/ResetPassword/ResetPass";
import { getToken } from "./services/localStorage";

import { useEffect, useState } from "react";
import NewPassword from "./components/ResetPassword/NewPassword";
import AdminLogIn from "./Admin/AdminLogIn";
import AdminDashboard from "./Admin/AdminDashboard";
import Auth from "./components/Auth";
import Footer from "./components/Footer/Footer";

function App() {
  const [token, setToken] = useState(() => getToken()); // Initialize with the token from localStorage
  console.log(token);
  useEffect(() => {
    const newToken = getToken();
    if (newToken) {
      setToken(newToken);
    }
  }, []);

  return (
    <BrowserRouter>
      <GlobalStyle />
      <Navbar />
      <Routes>
        <Route
          path="/"
          exact
          element={!token ? <Home /> : <Navigate to="/dashboard" />}
        />
        <Route path="/register" exact element={<Auth mode="signup-mode" />} />
        <Route path="/login" exact element={<Auth mode="" />} />
        <Route path="/reset/password/" exact element={<ResetPass />} />
        <Route path={"/new/password/:id?"} exact element={<NewPassword />} />
        <Route path={"/admin/login"} exact element={<AdminLogIn />} />
        <Route path={"/admin/dashboard"} exact element={<AdminDashboard />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
      {/* <Footer /> */}
    </BrowserRouter>
  );
}

export default App;
