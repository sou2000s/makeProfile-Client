import React from 'react';
import { useLoaderData } from 'react-router-dom';

const UserDetails = () => {
    const data = useLoaderData()
    console.log(data);
    return (
        <div>
            <h1 className='text-2xl'>{data.name} Details</h1>
            <p className='mt-6 text-xl'>Email:{data.email}</p>
            <p className='mt-6 text-xl'>Name:{data.name}</p>
            <p className='mt-6 text-xl'>PhoneNumber{data.phoneNumber}</p>
            <p className='mt-6 text-xl'>Address:{data.address}</p>
            <p className='mt-6 text-xl'>IntstitutionName:{data.institutionName}</p>
            <p className='mt-6 text-xl'>Age:{data.age}</p>
            <p className='mt-6 text-xl'>HighestEducation:{data.HighestEducation}</p>
        </div>
    );
};

export default UserDetails;