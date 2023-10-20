import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import React, { createContext } from 'react';
import app from "../Firebaseconfig/Firebase";



export const AuthContext = createContext(null);
const Provider = new GoogleAuthProvider()
const auth = getAuth(app);


const AuthProvider = ({children}) => {

    const googleSignin =() =>{
        return signInWithPopup(auth,Provider);
    }

    const userInfo = 
    {
        googleSignin,
        // loading,
        // Signup,
        // user,
        // Signin,
        // LogOut,
        // Updateprofile
      
      
    }

    return (
        <AuthContext.Provider value={userInfo}>
        {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider