import React from 'react'
import "./css/login.css"
import { Link, useNavigate } from 'react-router-dom'


function StudLogin() {

const navigate=useNavigate();

    function RedirectToStudArea(){
        navigate("/student-area")
    }
  return (
    <>
  

  <div className="d-flex justify-content-center mt-5">

  <div className="form-container">
    <p className="title">Se Connecter </p>
    <div className="form">
      <div className="input-group">
        <label htmlFor="username">Username</label>
        <input type="text" name="username" id="username" placeholder="" />
      </div>
      <div className="input-group">
        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password" placeholder="" />
        
      </div>
      <button className="sign"
      
      onClick={RedirectToStudArea}
      >Sign in</button>
    </div>
   
  
    <p className="signup mt-3">
      Don't have an account?
      <Link rel="noopener noreferrer" to="/student-register" className="">
        Sign up
      </Link>
    </p>
  </div>


  </div>

</>

  )
}

export default StudLogin