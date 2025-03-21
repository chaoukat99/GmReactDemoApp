import React from 'react'
import { Link } from 'react-router-dom'


function Home() {
  return (
    <div>
        <h1 className='text-center'>Welcome To UnivReact App</h1>
      
        <div className="d-flex justify-content-center mt-5 gap-5">
            <Link className='btn btn-success fw-bold'  to="/student-login" style={{padding:"10px"}}>Student Area</Link>
            <Link className='btn btn-danger fw-bold' to="/teacher-login" style={{padding:"10px"}}>Teacher Area</Link>
        </div>

    </div>
  )
}

export default Home