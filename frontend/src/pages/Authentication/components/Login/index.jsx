import React, {useState} from 'react'
import { Link } from "react-router-dom"

// redux
import { useDispatch } from "react-redux";

// styles
import "./style.css"

// components
import Input from '../../../../components/Input'
import Button from '../../../../components/Button'
import { switchToSignup, updateIdentifier, updatePassword } from '../../../../Core/redux/Auth';


const Login = () => {

  const dispatcher = useDispatch()
 
  // const ValidateLogin = () => {
  //   const { identifier, password } = credentials
  //   if(!identifier){
  //     setError({...error, status:true, field:identifier})
  //     return
  //   }
  //   // if(!)
  // }

  return (
    <div className='flex column center login-wrapper'>
      <div className='flex column center input-wrapper'>
        <h1>Instagram</h1>
        <Input
        type={"text"}
        placeholder={'Username, or email'}
        handleChange={(e) => {
          const change = updateIdentifier(e.target.value) 
          dispatcher(change)}}
        />
        <Input
        type={"password"}
        placeholder={'Password'}
        handleChange={(e) => {
          const change = updatePassword(e.target.value) 
          dispatcher(change)}}
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
        to="/signup"
        onClick={()=>{
          const switchSignup = switchToSignup()
          dispatcher(switchSignup)
        }}
        >
          Sign up
        </Link>
      </div>
    </div>
  )
}

export default Login