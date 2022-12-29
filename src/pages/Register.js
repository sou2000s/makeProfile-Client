import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider';

const Register = () => {
    const {createUser} = useContext(AuthContext)
    const [err , setErr] = useState()
    const navigate = useNavigate()

  const handleRegister = (e) =>{
       e.preventDefault()
       console.log(e.target);
       const email = e.target.email.value
       const password = e.target.password.value
     console.log(email,password);
       createUser(email , password)
       .then(res => {
        console.log(res.user);
        setErr('')
        const user = {
            email: res.user.email
        }

         fetch('http://localhost:5000/users' , {
            method:"PUT",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
         })
         .then(res => res.json())
         .then(data => {
            console.log(data);
            navigate('/')
         })
 

       })
       .catch(err =>setErr(err.message))
  }

    return (
        <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Register</h1>
         </div>
    <form onSubmit={handleRegister} className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <div className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name='email' placeholder="email" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name='password' placeholder="password" className="input input-bordered" />
          <p className='text-red-500'>{err}</p>
        </div>
        <div className="form-control mt-6">
          <button type='submit'  className="btn btn-primary">Register</button>
        </div>
      </div>
    </form>
  </div>
</div>
    );
};

export default Register;