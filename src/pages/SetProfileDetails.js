import React from 'react';

const SetProfileDetails = () => {
    return (
        <div className='  text-center '>
           
          <form className=''>
          <input type="text"          name='name' placeholder="Name" className="input  mt-6 input-bordered input-success w-full max-w-xs" />
            <br />
            <input type="email"          name='email' placeholder="email" className="input input-bordered  mt-6 input-success w-full max-w-xs" />
             <br />
            <input type="number"          name='phoneNumber' placeholder="phone number" className="input input-bordered mt-6  input-success w-full max-w-xs" />
             <br />
            <input type="text"          placeholder="address" name='address' className="input input-bordered input-success  mt-6 w-full max-w-xs" />
             <br />
            <input type="number"          placeholder="age" name='age' className="input input-bordered input-success w-full mt-6  max-w-xs" />
             <br />
            <input type="text"          placeholder="Highest education" name='education' className="input input-bordered input-success w-full mt-6 max-w-xs" />
             <br />
            <input type="text"          placeholder="University/college/school name" name='education' className="input input-bordered input-success mt-6  w-full max-w-xs" />
              <br />
              <button className='btn btn-success mt-6'>Submit</button>
          </form>
        </div>
    );
};

export default SetProfileDetails;