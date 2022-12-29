import React, { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider';

const SetProfileDetails = () => {

  const {user} = useContext(AuthContext)
  console.log(user);
  const navigate= useNavigate('/')
  const handleSubmit = (e)=>{
    e.preventDefault()
    const user = {
       name : e.target.name.value,
       email : e.target.email.value,
       phoneNumber: e.target.phoneNumber.value,
       address : e.target.address.value,
       HighestEducation : e.target.HighestEducation.value,
       age : e.target.name.value,
       institutionName : e.target.institutionName.value,
    }
    fetch('https://server-site-sable.vercel.app/users' , {
            method:"POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
         })
         .then(res => res.json())
         .then(data => {
            if(data.acknowledged){
              toast.success('submited')
            e.target.reset()
            }
            
         })


  }
    return (
        <div className='  text-center '>
           
          <form className='' onSubmit={handleSubmit}>
          <input type="text"          name='name' placeholder="Name" className="input  mt-6 input-bordered input-success w-full max-w-xs" />
            <br />
            <input type="email"          name='email' placeholder="email" defaultValue={user?.email} className="input input-bordered  mt-6 input-success w-full max-w-xs" />
             <br />
            <input type="number"          name='phoneNumber' placeholder="phone number" className="input input-bordered mt-6  input-success w-full max-w-xs" />
             <br />
            <input type="text"          placeholder="address" name='address' className="input input-bordered input-success  mt-6 w-full max-w-xs" />
             <br />
            <input type="number"          placeholder="age" name='age' className="input input-bordered input-success w-full mt-6  max-w-xs" />
             <br />
            <input type="text"          placeholder="Highest education" name='HighestEducation' className="input input-bordered input-success w-full mt-6 max-w-xs" />
             <br />
            <input type="text"          placeholder="University/college/school name" name='institutionName' className="input input-bordered input-success mt-6  w-full max-w-xs" />
              <br />
              <button className='btn btn-success mt-6'>Submit</button>
          </form>
        </div>
    );
};

export default SetProfileDetails;