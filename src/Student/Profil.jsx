import React, { useEffect, useState } from 'react'
import StudentMenu from './StudentMenu'

import "./css/profil.css"

function Profil() {
   

    const [user ,setUser]=useState("");
    useEffect(()=>{
          setUser(JSON.parse(localStorage.getItem("student_data")))
    },[])


  return (
    
    <>
    <StudentMenu/>

    <div className='d-flex justify-content-center mt-3'>
    <div className="task" draggable="true">
    <div className="tags">
      <span className="tag">User Numero {user.id}</span>
      
      <button className="options">
        <svg
          xmlSpace="preserve"
          viewBox="0 0 41.915 41.916"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          xmlns="http://www.w3.org/2000/svg"
          id="Capa_1"
          version="1.1"
          fill="#000000"
        >
          <g strokeWidth={0} id="SVGRepo_bgCarrier" />
          <g
            strokeLinejoin="round"
            strokeLinecap="round"
            id="SVGRepo_tracerCarrier"
          />
          <g id="SVGRepo_iconCarrier">
            {" "}
            <g>
              {" "}
              <g>
                {" "}
                <path d="M11.214,20.956c0,3.091-2.509,5.589-5.607,5.589C2.51,26.544,0,24.046,0,20.956c0-3.082,2.511-5.585,5.607-5.585 C8.705,15.371,11.214,17.874,11.214,20.956z" />{" "}
                <path d="M26.564,20.956c0,3.091-2.509,5.589-5.606,5.589c-3.097,0-5.607-2.498-5.607-5.589c0-3.082,2.511-5.585,5.607-5.585 C24.056,15.371,26.564,17.874,26.564,20.956z" />{" "}
                <path d="M41.915,20.956c0,3.091-2.509,5.589-5.607,5.589c-3.097,0-5.606-2.498-5.606-5.589c0-3.082,2.511-5.585,5.606-5.585 C39.406,15.371,41.915,17.874,41.915,20.956z" />{" "}
              </g>{" "}
            </g>{" "}
          </g>
        </svg>
      </button>
    </div>
    <p>
     
     <h4>Username : {user.name}</h4>
     <h4>Email : {user.email}</h4>
     <h4>Date de naissance : {user.date_de_naissance}</h4>
    </p>
   
  </div>
    </div>
    </>
  )
}

export default Profil