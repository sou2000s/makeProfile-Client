import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    const [users , setUsers] = useState([])
    const [search , setSearch] = useState('')
    const searchRef = useRef('')

    const handleSearch = () =>{
        setSearch(searchRef.current.value)
      

    }
     useEffect(()=>{
        fetch(`http://localhost:5000/searchedUsers?search=${search}`)
        .then(res => res.json())
        .then(data => setUsers(data))
     },[search])

    console.log(search);

    return (
        <div>
            <h1>Search any profile</h1>
           
            <input   ref={searchRef} type="search" placeholder="Type here" className="input mt-5 input-bordered input-success w-full max-w-xs" /> <button onClick={handleSearch}>Search</button>
        
           <ul className='mt-6'>
            {users.map(user => <li>
            <p>{user.name}</p>
            <Link to={user._id}>Details</Link> 
            </li>)}
           </ul>
        </div>
    );
};

export default Home;