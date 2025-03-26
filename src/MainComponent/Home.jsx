import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'


function Home() {
  const [is_connectedStatus,setIsConnetedStatus]=useState(false);

  useEffect(()=>{

     setIsConnetedStatus(JSON.parse(localStorage.getItem("is_connected")))
  

  },[])
  return (
    <div>
        <h1 className='text-center'>Welcome To UnivReact App</h1>
      
        <div className="d-flex justify-content-center mt-5 gap-5">
            <Link className='btn btn-success fw-bold'  to={is_connectedStatus?"/student-area":"/student-login"}   style={{padding:"10px"}}>Student Area</Link>
            <Link className='btn btn-danger fw-bold' to="/teacher-login" style={{padding:"10px"}}>Teacher Area</Link>
        </div>

    </div>
  )
}

export default Home