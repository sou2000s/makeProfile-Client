import React, { useContext } from 'react';
import { AuthContext } from '../Context/AuthProvider';

const Register = () => {
    const {name} = useContext(AuthContext)
    return (
        <div>
            <h1>Register</h1>
            <h1>{name}</h1>
        </div>
    );
};

export default Register;