import React, { useContext, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider';
const Home = () => {
    const [users , setUsers] = useState([])
    const [search , setSearch] = useState('')
    const searchRef = useRef()
   
  
   

    
    const handleSearch = () =>{
        setSearch(searchRef.current.value)
    }
     useEffect(()=>{
        fetch(`https://server-site-sable.vercel.app/searchedUsers?search=${search}`)
        .then(res => res.json())
        .then(data => {
           setUsers(data);
        })
     },[search])

    console.log(search);
    console.log(users);
   
    return (
        <div>
            <h1>Search any profile</h1>
           
         
            <input   ref={searchRef} type="search" placeholder="Type here" className="input mt-5 input-bordered input-success w-full max-w-xs" />
             <button className='btn btn-sm btn-info ml-6' onClick={handleSearch}>
             Click here to search
            </button>
          
            <br />
         
            <ul className='mt-6'>
                {users?.map(user =><li key={user._id}>
                    <p>{user.name}</p> 
                    <Link to={`userDetails/${user._id}`}   className="btn btn-sm-scuccess">Details</Link>
                </li>)}
            </ul>
           

                 
        </div>
    );
};

export default Home;