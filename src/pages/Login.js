import React, { useContext } from 'react';
import { AuthContext } from '../Context/AuthProvider';

const Login = () => {
    const {name} = useContext(AuthContext)
    return (
        <div>
            <h1>Login</h1>
            <h1>{name}</h1>
        </div>
    );
};

export default Login;