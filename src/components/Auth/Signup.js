import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { setToken } from '../../services/localStorage';
import { useRegisterUserMutation } from '../../services/userAuthApi';

const Signup = () => {
    const [credentials, setCredentials] = useState({
        name: '',
        phoneNumber: '',
        alternateNumber: '',
        email: '',
        zip: '',
        password: '',
        confirmPassword: ''
    });

    const [error, serError] = useState({
        status: false,
        message: '',
        type: ''
    })

    const navigate = useNavigate();
    const [registerUser] = useRegisterUserMutation();

    const handleChange = (event) => { 
        setCredentials({
            ...credentials,
            [event.target.name]: event.target.value
        });
    }

    const handleSubmit = async (event) => { 
        event.preventDefault();

        if(credentials.phoneNumber === credentials.alternateNumber){
            alert('Alternate number cannot be same as phone number');
            return;
        }

        const response = await  registerUser(credentials);
        if(response.data.status === true){
            navigate('/dashboard');
            setToken(response.data.token);
            console.log(response.token)
        }else{
            serError({
                status: true,
                message: response.data.message,
                type: response.data.type
            })
        }
        
    }
  return (
    <>
    {error.status && <div className='alert alert-danger'>{error.message}</div>}

        <form className='signup-form' onSubmit={handleSubmit}>
          <h2 className='title'>Sign Up</h2>
          <div className='input-field'>
              <i className='fas fa-user'></i>
              <input type='text' placeholder='full name' name='name' onChange={handleChange} value={credentials.name}/>
          </div>
          <div className='input-field'>
              <i className='fas fa-phone'></i>
              <input type='text' placeholder='phone number' name='phoneNumber' onChange={handleChange} value={credentials.phoneNumber} />
          </div>
          <div className='input-field'>
              <i className='fas fa-phone'></i>
              <input type='text' placeholder='Alternate number' name='alternateNumber' onChange={handleChange} value={credentials.alternateNumber} />
          </div>
          <div className='input-field'>
              <i className='fas fa-envelope'></i>
              <input type='text' placeholder='email' name='email' onChange={handleChange} value={credentials.email} />
          </div>
          <div className='input-field'>
              <i className='fas fa-envelope'></i>
              <input type='number' placeholder='zip code' name='zip' onChange={handleChange} value={credentials.zip} />
          </div>
          <div className='input-field'>
              <i className='fas fa-lock'></i>
              <input type='password' placeholder='password' name='password' onChange={handleChange} value={credentials.password} />
          </div>
          <div className='input-field'>
              <i className='fas fa-key'></i>
              <input type='text' placeholder='repeat password' name='confirmPassword' onChange={handleChange} value={credentials.confirmPassword} />
          </div>
          <input type='submit' value='Signup' className='btn solid' />
        </form>
    </>
      
  )
}

export default Signup
