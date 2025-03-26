import React from 'react'
import { useNavigate,Link } from 'react-router-dom';

function StudentMenu() {
    const navigate=useNavigate();

   function LogOut(){
    localStorage.setItem("is_connected",false);
 
    setTimeout(()=>{
       navigate('/student-login');
    },2000)

   }


  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
    <div className="container-fluid">
      <a className="navbar-brand text-info fw-bold" href="#">
        Espace Etudiant 
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link " aria-current="page" to="/student-area">
              Acceuil
            </Link>
          </li>
          <li className="nav-item">
            <a className="nav-link " aria-current="page" href="#">
              Mes Candidatures
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link " aria-current="page" href="#">
              Demander Une candidature
            </a>
          </li>
          <li className="nav-item">
            <Link className="nav-link " aria-current="page" to="/universities">
              Univesités
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link " aria-current="page" to="/student-profil">
              Profil
            </Link>
          </li>
          <li className="nav-item">
            <span className="nav-link" style={{cursor:"pointer"}} aria-current="page"
            onClick={LogOut}
            >
              Deconnexion
            </span>
          </li>
        
          
        
        </ul>
      </div>
    </div>
  </nav>
  
  )
}

export default StudentMenu