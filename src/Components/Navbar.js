import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <ul>
                <Link className=''  to='/'>Home</Link>
                <Link className='ml-5'  to='/setProfile'>Setup Profile</Link>
                <Link className='ml-5'  to='/register'>Register</Link>
                <Link className='ml-5'  to='/login'>Login</Link>
                <Link className='ml-5' >Logout</Link>
            </ul>
        </div>
    );
};

export default Navbar;