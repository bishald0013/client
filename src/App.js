import React from 'react';
import GlobalStyle from './global-styles';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Navbar from './components/Navbar/Navbar';
import Register from './pages/Register';
import Dashboard from './components/Dashboard/Dashboard';
import ResetPass from './components/ResetPassword/ResetPass';
import { getToken } from './services/localStorage';

import { useEffect, useState } from 'react';
import NewPassword from './components/ResetPassword/NewPassword';

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
        <Route path="/register" exact element={<Register />} />
        <Route path="/login" exact element={<Login />} />
        <Route path="/reset/password/" exact element={<ResetPass />} />
        <Route path={'/new/password/:id?'} exact element={<NewPassword />} />
        <Route
          path="/dashboard"
          element= {<Dashboard /> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
