import React, { use, useState } from 'react'
import { json, Link,useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2';

function StudRegister() {
const navigate=useNavigate();


 
const [username,setUsername]=useState("");
const [Email,setEmail]=useState("");
const [date,setDate]=useState("");
const [pass,setPass]=useState("");
const [confirmPass,setComfirmPass]=useState("");

const [error,setError]=useState([])


function AddToLocalStorage(){
  //  Stocker Les données Sur Localstorage  

// 1ére Etape
    //  créer un tableau vide   localStorage.setItem("all_student",JSON.stringify([])); 

// 2éme Etape  : de créer un objet etudiant (en se basant sur les données du state)   
 let studentObject ={
      id:Math.floor(Math.random()*9999999),
      name:username,
      email:Email,
      date_de_naissance:date,
      password:pass
  
  
    }

// 3éme Etape
    // Récuperer le tabeleau du LS 

    let all_studentTab=JSON.parse(localStorage.getItem('all_student')); // []
   

    // 4éme Etape d'ajouter L'objet etudiant inséré au tableau
      all_studentTab.push(studentObject);

 // 5éme de modifier le localstorage avec le nouveau tableau 
      localStorage.setItem("all_student",JSON.stringify(all_studentTab))

      localStorage.setItem("is_connected",true);
      localStorage.setItem("student_data",JSON.stringify(studentObject));


   // 6éme Redirection vers Espace Etudiant   
      // Redirection 
      setTimeout(()=>{
        navigate("/student-area");
      },4000)


}



function ValidateData(){
let [testUser,testEmail,testPass,testConfirm]=[false,false,false,false]
// Username
if(username.length>6 && username.length<10){
  testUser=true;

}else{
    const errorTab=error;  // []
    errorTab.push("invalid Username"); // ["invalid Username"]
    setError(errorTab)    // ["invalid Username"]
}
// Email
if(Email.includes(username) && Email.includes("@")){
  testEmail=true;
}else{
  const errorTab=error;   
  errorTab.push("invalid Email");  
  setError(errorTab)
}


// Password


if(pass.length>10 && pass.length<20){
  testPass=true;
}else{
  const errorTab=error;
  errorTab.push("invalid Pass");
  setError(errorTab)

}

// Confirm Password

if(pass==confirmPass){
  testConfirm=true;
}else{
  const errorTab=error;
    errorTab.push("invalid ConfirmPass");
    setError(errorTab)


}



if(testConfirm && testEmail && testPass && testUser){

   Swal.fire({
       title :"Student Created",
       text:"Student Created Successfully ",
       icon:"success",
       timer:2000,
       showConfirmButton:false
   })
   AddToLocalStorage();

  

  


  

}else{
    

   Swal.fire({
    title :"Something Went Wrong",
    html:error,
    icon:"error",
    timer:2000,
    showConfirmButton:false
})

}


}




  return (
   <div className="d-flex justify-content-center mt-1">
  
    <div className="form-container">
      <p className="title">S'Inscrire </p>
      <div className="form">
        <div className="input-group">
          <label htmlFor="username">Username</label>
          <input type="text"   onChange={(ev)=>setUsername(ev.target.value)}   id="username" placeholder="John doe " />
        </div>
        <div className="input-group">
          <label htmlFor="username">Email</label>
          <input type="email"  onChange={(ev)=>setEmail(ev.target.value)}  id="username" placeholder="joh@yahoo.com" />
        </div>
        <div className="input-group">
          <label htmlFor="username">Date de naissance</label>
          <input type="date" onChange={(ev)=>setDate(ev.target.value)}   id="username"  />
        </div>
        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input type="password" onChange={(ev)=>setPass(ev.target.value)}  id="password" placeholder="john123" />
          
        </div>
        <div className="input-group">
          <label htmlFor="password">Confirm Password</label>
          <input type="password" onChange={(ev)=>setComfirmPass(ev.target.value)}  id="password" placeholder="" />
          
        </div>
        <button className="sign"
           onClick={ValidateData}
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