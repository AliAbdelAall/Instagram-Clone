import React from 'react'
import { Outlet } from "react-router-dom";

const Auth = (Outlet) => {
  return (
    <div className='flex center auth-container'>
      <Outlet/>
    </div>
  )
}

export default Auth