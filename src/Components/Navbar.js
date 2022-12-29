import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider';

const Navbar = () => {
    const {user , logout} = useContext(AuthContext)
    const handleLogout = ()=>{
        logout()
        .then(()=>{})
        .catch(err => console.log(err.message))
    }
    return (
        <div>
            <ul>
                <Link className=''  to='/'>Home</Link>
               
               
                {user?.uid ?  <>
                    <Link className='ml-5' onClick={handleLogout} >Logout</Link>
                    <Link className='ml-5'  to='/setProfile'>Setup Profile</Link>
                               </>

                
                  :        
                   <>
                   <Link className='ml-5'  to='/register'>Register</Link>
                   <Link className='ml-5'  to='/login'>Login</Link>
                   </>      
                        
                }
            </ul>
        </div>
    );
};

export default Navbar;