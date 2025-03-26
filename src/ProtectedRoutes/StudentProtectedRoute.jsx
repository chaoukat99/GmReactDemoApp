import React from 'react'
import { Outlet,Navigate } from 'react-router-dom'
function StudentProtectedRoute() {

    let condition=JSON.parse(localStorage.getItem("is_connected"));
  return  condition?<Outlet/>:<Navigate to="/student-login" />
}

export default StudentProtectedRoute