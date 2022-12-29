import React, { createContext, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth'
import app from '../firebase/firebase.config';

export const AuthContext = createContext()
const auth = getAuth(app)


const AuthProvider = ({children}) => {
    const [user ,setUser] = useState(null)
    const [loading ,setLoading] = useState(true)
    
    const googleProvider  = new GoogleAuthProvider()


 const name = "tatat"

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

    const authInfo = {name , createUser , login , logout , loading,setLoading , googleAuthentication}
    return (
        <div>

        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;