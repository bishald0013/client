import React from 'react';
import GlobalStyle from './global-styles';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Navbar from './components/Navbar/Navbar';
import Register from './pages/Register';
import Dashboard from './components/Dashboard/Dashboard';
import { getToken } from './services/localStorage';

function App() {

  let token = getToken();
  console.log(token);

  return (
    <BrowserRouter>
      <GlobalStyle />
      <Navbar/>
      <Routes>
        <Route path='/' exact element={<Home/>} />
        <Route path='/register' exact element={<Register/>} />
        <Route path='/login' exact element={<Login/>} />
        <Route path='/dashboard' element= {token ? <Dashboard/> : <Navigate to='/'/>} />
        {/* <Route path='/dashboard' exact element={<Dashboard/>} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
