import React from 'react'
import {useLocation, Link} from "react-router-dom"

// styles
import "./style.css"

// components
import Input from '../../../../components/Input'
import Button from '../../../../components/Button'


const Login = () => {
  return (
    <div className='flex column center login-wrapper'>
      <div className='flex column center input-wrapper'>
        <h1>Instagram</h1>
        <Input
        type={"text"}
        placeholder={'Username, or email'}
        // handleChange={}
        />
        <Input
        type={"password"}
        placeholder={'Password'}
        // handleChange={}
        />
        <Button
        text={"Log in"}
        // handleClick={}
        />
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