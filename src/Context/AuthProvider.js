import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth'
import app from '../firebase/firebase.config';

export const AuthContext = createContext()
const auth = getAuth(app)


const AuthProvider = ({children}) => {
    const [user ,setUser] = useState(null)
    const [loading ,setLoading] = useState(true)
    
    const googleProvider  = new GoogleAuthProvider()


 

 const createUser = (email , password)=>{
    setLoading(true)

    return createUserWithEmailAndPassword(auth , email , password)
}

const login = (email , password) => {
    setLoading(true)

      return signInWithEmailAndPassword(auth , email , password)
}

const logout = ()=>{
    
    return signOut(auth)
}




const googleAuthentication = () =>{
    setLoading(true)
    return signInWithPopup(auth , googleProvider)
}


useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth , currentUser =>{
        setUser(currentUser)
       setLoading(false)

    })
    return ()=> unsubscribe()
} , [])

    const authInfo = {  createUser , login , logout , loading,setLoading , googleAuthentication , setUser , user}
    return (
        <div>

        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;