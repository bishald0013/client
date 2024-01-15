import React, { useState} from 'react'
import { useSetNewPasswordMutation } from '../../services/userAuthApi'
import { useParams } from 'react-router-dom';


function NewPassword() {

  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [setNewPassword] = useSetNewPasswordMutation();
  const {id} = useParams()

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form_data = new FormData(e.currentTarget);
    const new_pass = {
      pass: form_data.get('password'),
      cnf_pass: form_data.get('c_password'),
    }

    if(new_pass.pass === new_pass.cnf_pass){
      const res = await setNewPassword({credentials: new_pass, id});
      console.log(res);
      if(res.data.status === true){
        setSuccess('Password reset successful please Try to login now.');
      }else{
        setError('Fail to update password.')
      }
    }else{
      setError('Passwords and Confirm Password do not match.')
    }

  }

  return (
    <>
      <div className='main_container my-5 pt-5'>
        {success.length > 0 ? 
            (
              <>
                <div class="alert alert-success" role="alert">
                  {success}
                </div>
              </>
            ) : 
            (
              <>
                <div class="alert alert-danger" role="alert">
                  {error}
                </div>
              </>
            )
        }
      <form onSubmit={handleSubmit}>
        <div class="my-3">
          <input className="form-control" type='password' name='password' id='password' placeholder='password' />
        </div>
        <div class="mb-3">
          <input className="form-control" type='password' name='c_password' id='c_password' placeholder='Confirm Password' />
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
      </div>
    </>
  )
}

export default NewPassword