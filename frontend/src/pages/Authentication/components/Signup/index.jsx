import React, {useState} from 'react'
import { Link } from "react-router-dom"

// redux
import { useDispatch } from "react-redux"
import { switchToLogin, updateEmail, updateUsername, updateFullName, updatePassword } from '../../../../Core/redux/Auth'

// components
import Input from '../../../../components/Input'
import Button from '../../../../components/Button'



const Signup = () => {
 
  const dispatcher = useDispatch()

  return (
    <div className='flex column center login-wrapper'>
      <div className='flex column center input-wrapper'>
        <h1>Instagram</h1>
        <Input
        type={"text"}
        placeholder={'Email'}
        handleChange={(e) => {
          const change = updateEmail(e.target.value)
          dispatcher(change)}}
        />
        <Input
        type={"text"}
        placeholder={'Full Name'}
        handleChange={(e) => {
          const change = updateFullName(e.target.value)
          dispatcher(change)}}
        />
        <Input
        type={"text"}
        placeholder={'Username'}
        handleChange={(e) => {
          const change = updateUsername(e.target.value)
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
        text={"Signup"}
        // handleClick={}
        />
      </div>
      <div className='flex center  login-switch'>
        <p className='text-sm'>Have an account? </p> 
        <Link 
        className='text-sm switch-link'
        to="/"
        onClick={()=>{
          const switchLogin = switchToLogin()
          dispatcher(switchLogin)
        }} 
        >
          Sign up
        </Link>
      </div>
    </div>
  )
}

export default Signup