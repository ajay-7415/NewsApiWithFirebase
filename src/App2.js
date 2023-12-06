import SearchForm from './SearchForm'
import Stories from './Stories'
import Buttons from './Buttons'
import React from 'react';
import {  signOut } from "firebase/auth";
import {auth} from './firebase';
import { useNavigate } from 'react-router-dom';
 


function App() {
  const navigate = useNavigate();
 
    const handleLogout = () => {               
        signOut(auth).then(() => {
        // Sign-out successful.
            navigate("/");
            console.log("Signed out successfully")
        }).catch((error) => {
        // An error happened.
        });
      }
  return (
    <>
    <nav>
               
 
                <div>
                  <div className='btn-container'> 

        			<button onClick={handleLogout}>
                        Logout
                    </button>
                  </div>
        		</div>
            </nav>
      <SearchForm />
      <Buttons />
      <Stories />
    </>
  )
}

export default App
