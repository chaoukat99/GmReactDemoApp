import React from 'react'
import { Link } from 'react-router-dom'

function Error() {
  return (
    <div>
        <h1 className='text-center'>
            Error Page chemin Introuvable 
        </h1>
        <div className="d-flex justify-content-center">
            <Link className='btn btn-danger' to="/">Go Home </Link>
        </div>

    </div>
  )
}

export default Error