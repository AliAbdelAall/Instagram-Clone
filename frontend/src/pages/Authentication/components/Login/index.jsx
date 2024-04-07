import React from 'react'
import {useLocation, Link} from "react-router-dom"

// styles
import "./style.css"


const Login = () => {
  return (
    <div className='flex column center login-wrapper'>
      <div className='flex column center input-wrapper'>
        <h1>Instagram</h1>
        <input type="text" placeholder='Username, or email'/>
        <input type="password" placeholder='Password'/>
        <button className='login-btn white bold text-sm bg-primary'>Log in</button>
      </div>
      <div className='flex center  login-switch'>
        <p className='text-sm'>Don't have an account? </p> 
        <Link 
        className='text-sm switch-link'
        to="/Signup"
        >
          Sign up
        </Link>
      </div>
    </div>
  )
}

export default Login