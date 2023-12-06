import React, { useState, useEffect } from 'react';
import { onAuthStateChanged } from "firebase/auth";
import { auth } from './firebase';
import { useNavigate } from 'react-router-dom';
 
const Home = () => {
 
    const navigate = useNavigate()
    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
              // User is signed in, see docs for a list of available properties
              // https://firebase.google.com/docs/reference/js/firebase.User
              const uid = user.uid;
              // ...
              console.log("uid", uid)
              navigate('/app2')
            } else {
              navigate('/login')
              console.log("user is logged out")
            }
          });
         
    }, [])
 
  return (
    <section>        
      …
    </section>
  )
}
 
export default Home