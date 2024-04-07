import React from 'react'
import {useLocation, Link} from "react-router-dom"

// styles
import "./style.css"


const Login = () => {
  return (
    <div className='flex column center login-wraapper'>
      <div className='flex column center'>
        <h1>Instagram</h1>
        <input type="text" placeholder='Username, or email'/>
        <input type="password" placeholder='Password'/>
        <button className='login-btn'>Login</button>
      </div>
      <div>
        <p>Don't have an account? </p> 
        <Link
        to="/Signup"
        />
      </div>
    </div>
  )
}

export default Login