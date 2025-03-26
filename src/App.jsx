import React from 'react'
import { BrowserRouter as Router , Routes , Route} from 'react-router-dom'
import Home from './MainComponent/Home'

import "bootstrap/dist/css/bootstrap.min.css"

import "bootstrap/dist/js/bootstrap.min.js"
import StudLogin from './Student/StudLogin'
import TeachLogin from './Teacher/TeachLogin'
import Error from './MainComponent/Error'
import StudRegister from './Student/StudRegister'
import StudentHome from './Student/StudentHome'
import StudentProtectedRoute from './ProtectedRoutes/StudentProtectedRoute'
import Profil from './Student/Profil'
import Universities from './Student/Universities'
function App() {
  return (
    <>
    
    <Router>
      <Routes>
            <Route path='/' element={<Home/>}/>
            {/* student login route  */}
            <Route path='/student-login' element={<StudLogin/>}/>



            <Route path='/student-register' element={<StudRegister/>}/>
            

            {/* Student Homepage */}
            

             <Route element={<StudentProtectedRoute/>}>
                       
                 
                  <Route  path='/student-area' element={<StudentHome/>} />

                  <Route path='/student-profil' element={<Profil/>}  />

                  <Route path='/universities' element={<Universities/>} />
             </Route>

          {/* teacher login route */}
            <Route path='/teacher-login' element={<TeachLogin/>}  />





            {/* Error Route  */}

            <Route  path='*' element={<Error/>} />
      </Routes>
    </Router>
    
    </>
  )
}

export default App



