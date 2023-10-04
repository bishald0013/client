import React from 'react'

const Signin = () => {
  return (
      <form className='signin-form'>
          <h2 className='title'>Signin</h2>
          <div className='input-field'>
              <i className='fas fa-user'></i>
              <input type='text' placeholder='username' />
          </div>
          <div className='input-field'>
              <i className='fas fa-lock'></i>
              <input type='password' placeholder='password' />
          </div>
          <input type='button' value='Signin' className='btn solid' />
      </form>
  )
}

export default Signin
