import React from 'react'
import { BrowserRouter as Router , Routes , Route} from 'react-router-dom'
import Home from './MainComponent/Home'

import "bootstrap/dist/css/bootstrap.min.css"
import StudLogin from './Student/StudLogin'
import TeachLogin from './Teacher/TeachLogin'
import Error from './MainComponent/Error'
import StudRegister from './Student/StudRegister'
import StudentHome from './Student/StudentHome'
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
            <Route  path='/student-area' element={<StudentHome/>} />



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



