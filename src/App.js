// import logo from './logo.svg';
// import './App.css';
import React from 'react';
import { BrowserRouter , Routes,Route } from 'react-router-dom';
import Signup from './signUp';
import SignIn from './signIn'
import Home from './Home';
import { ReactDOM } from 'react';
import Apps from './App2'

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/home" element={<Home/>}/>


  <Route path="/signup" element={<Signup/>}/>
  <Route path="/app2" element={<Apps/>}/>
  <Route path="/login" element={<SignIn/>}/>
  
  </Routes>
    </BrowserRouter>
    )
   
  
}


 

export default App;
