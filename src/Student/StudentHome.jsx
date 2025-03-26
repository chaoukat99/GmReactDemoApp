import React, { useEffect, useState } from 'react'
import StudentMenu from './StudentMenu'

function StudentHome() {


  const [user,setUser]=useState("");
   useEffect(()=>{

    // Récupérer la valeur de L'utilisateur Connécté 


     setUser(JSON.parse(localStorage.getItem("student_data")))

   },[])


  return (
<>
    <StudentMenu/>
    <div>
        <h1>Welcome <span style={{color:"green"}}>{user.name}</span></h1>
    </div>

    </>    
  )
}

export default StudentHome