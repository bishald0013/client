import React, { useState } from 'react'
import { useResetPasswordMutation } from '../../services/userAuthApi';

function ResetPass() {
    const [email, setEmail] = useState();
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [resetPassword] = useResetPasswordMutation();
    
    const resetPass = async (event) => {
        event.preventDefault();
        if(!email) return "Please enter your email address";
        try {
            const data = {email: email};
            const response = await resetPassword(data);
            console.log(response)
            if(response.data.status === true){
                setSuccess(response.data.message);
            }else{
                setError(response.data.message);
            }
        } catch (error) {
            setError(error.message);
        }
    }

  return (
    <>
        <div className="main_container">
            <form className=''>
                <div class="mb-3 my-5 w-50">
                    <div className="cont">
                        {error.length === 0 ? (
                            <>
                                <div class="alert alert-success" role="alert">
                                    {success}
                                </div>
                            </>
                        ) : (
                            <>
                                <div class="alert alert-danger" role="alert">
                                    {error}
                                </div>
                            </>
                        )}
                    </div>
                    <div class="form-floating mb-3">
                        <input type="email" class="form-control" value={email} id="floatingInput" placeholder="name@example.com" onChange={(e) => setEmail(e.target.value)}/>
                        <label for="floatingInput">Email address</label>
                    </div>
                </div>
                <button type="submit" onClick={resetPass} class="btn btn-primary">Submit</button>
            </form>
        </div>
    </>
  )
}

export default ResetPass