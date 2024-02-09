import React from 'react'
import { useNavigate } from 'react-router-dom';

function AdminLogIn() {
    const navigate = useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const logInData = {
            email: formData.get('email'),
            pass: formData.get('pass'),
        }
        if(logInData.email.length > 0){
            navigate('/admin/dashboard')
        }
        console.log(logInData);
    }

  return (
    <div>
        <div className="cont my-5">
        <form className='pt-5' onSubmit={handleSubmit}>
            <div class="mb-3">
                <input type="email" class="form-control" id="email" name='email' placeholder='Email' />
            </div>
            <div class="mb-3">
                <input type="password" class="form-control" id="pass" name='pass' placeholder='Password'/>
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
        </div>
    </div>
  )
}

export default AdminLogIn