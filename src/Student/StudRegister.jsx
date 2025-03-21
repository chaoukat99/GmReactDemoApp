import React from 'react'
import { Link,useNavigate } from 'react-router-dom'

function StudRegister() {
const navigate=useNavigate();
    function RedirectToStudArea(){
        navigate("/student-area")
    }

  return (
   <div className="d-flex justify-content-center mt-1">
  
    <div className="form-container">
      <p className="title">S'Inscrire </p>
      <div className="form">
        <div className="input-group">
          <label htmlFor="username">Username</label>
          <input type="text" name="username" id="username" placeholder="John doe " />
        </div>
        <div className="input-group">
          <label htmlFor="username">Email</label>
          <input type="email" name="username" id="username" placeholder="joh@yahoo.com" />
        </div>
        <div className="input-group">
          <label htmlFor="username">Date de naissance</label>
          <input type="date" name="username" id="username"  />
        </div>
        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" placeholder="john123" />
          
        </div>
        <div className="input-group">
          <label htmlFor="password">Confirm Password</label>
          <input type="password" name="password" id="password" placeholder="" />
          
        </div>
        <button className="sign"
        onClick={RedirectToStudArea}
        >Register Now</button>
      </div>
     
    
      <p className="signup mt-3">
        Don't have an account?
        <Link rel="noopener noreferrer" to="/student-login" className="">
          Login         </Link>
      </p>
    </div>
  
  
    </div>
  )
}

export default StudRegister