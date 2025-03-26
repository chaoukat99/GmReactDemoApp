import React, { useState } from 'react'
import "./css/login.css"
import { Link, useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2';


function StudLogin() {
  const navigate=useNavigate();

function CheckLogin(inputUsername,inputPassword){

// Recupérer le tableau de tous les étudiants 


   const AllStudents=JSON.parse(localStorage.getItem("all_student"))


  //  Verifier les données insérés s'ils existent sur le tableau 

  const finder =AllStudents.find((el)=>el.name==inputUsername && el.password==inputPassword ) ;

  if(finder != undefined ){

      Swal.fire({
        title:"Welcome Back ",
        icon:"success",
        text:"You will redirect to student area in 4 s",
        timer:2000,
        showConfirmButton:false

      })

     localStorage.setItem("is_connected",true);
     localStorage.setItem("student_data",JSON.stringify(finder))


     setTimeout(()=>{
      navigate("/student-area")
     },3000)

  }else{
      
       
      Swal.fire({
        title:"Invalid User Try Again",
        icon:"error",
        timer:2000,
        showConfirmButton:false

      })
      localStorage.setItem("is_connected",false);
  }

}


  const [username,setUsername]=useState("");
  const [pass,setPass]=useState("");




 
  return (
    <>
  

  <div className="d-flex justify-content-center mt-5">

  <div className="form-container">
    <p className="title">Se Connecter </p>
    <div className="form">
      <div className="input-group">
        <label htmlFor="username">Username</label>
        <input type="text"   onChange={(ev)=>setUsername(ev.target.value)} name="username" id="username" placeholder="" />
      </div>
      <div className="input-group">
        <label htmlFor="password">Password</label>
        <input type="password"   onChange={(ev)=>setPass(ev.target.value)} name="password" id="password" placeholder="" />
        
      </div>
      <button className="sign"
      

      onClick={()=>{
        CheckLogin(username,pass)
      }}
     
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