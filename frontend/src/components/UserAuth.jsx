import React from 'react'
import Swal from "sweetalert2";
import { Navigate } from 'react-router-dom';
import { useState } from 'react';


const UserAuth = ({children}) => {
    const [currentUser , setCurrentUser] = useState(
        JSON.parse(sessionStorage.getItem('user'))
    )
    if(currentUser !== null){
        return children;

    }
    else{
        Swal.fire({
            icon :'error',
            title:'Not Allowed',
            icon :'Login First to access this page'
        });
        return <Navigate to ='/login' />
    }
  
}

export default UserAuth