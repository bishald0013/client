import React, { useState } from 'react'
import logo from '../../assets/svg/signup_logo.svg';
import './style.css';
import Signin from './Signin';
import Signup from './Signup';

const Auth = (props) => {
    const [mode, setMode] = useState(props.mode);
    function showSignupForm() {
        setMode('signup-mode');
    }

    function showSigninForm() {
        setMode('');
    }

    
  return (
      <div className={`container ${mode}`}>
          <div className='forms-container'>
              <div className='signin-signup'>
                  <Signin/>

                  <Signup/>
              </div>
              <div className='panels-container'>
                  <div className='panel left-panel'>
                      <div className='content'>
                          <h3>New here ?</h3>
                          <p>If you don't have an account then you have to first create to login</p>
                          <button className='btn transparent' id='signup-btn' onClick={showSignupForm}>Sign up</button>
                      </div>
                      <img src={logo} className='image' alt='' />
                  </div>

                  <div className='panel right-panel'>
                      <div className='content'>
                          <h3>One of us ?</h3>
                          <p>If you are already registered then no need to create another account just sign in</p>
                          <button className='btn transparent' id='signin-btn' onClick={showSigninForm}>Sign in</button>
                      </div>
                      <img src={logo} className='image' alt='' />
                  </div>
              </div>
          </div>
      </div>
  )
}

export default Auth
