import React, {useState} from 'react'
import { Link } from "react-router-dom"

// redux
import { useDispatch, useSelector } from "react-redux";
import { registrationSliceName, switchToSignup, updateIdentifier, updatePassword, setError } from '../../../../Core/redux/Auth';

// Taostify
import { toast } from 'react-toastify'

// styles
import "./style.css"

// components
import Input from '../../../../components/Input'
import Button from '../../../../components/Button'

// Tools
import { sendRequest } from '../../../../Core/Tools/remote/request';
import { requestMethods } from '../../../../Core/enums/requestMethods';
import { setLocalUser } from '../../../../Core/Tools/local/user';



const Login = () => {

  
  const { identifier, password, error, errorMessage } = useSelector((global) => global[registrationSliceName])
  console.log(identifier, password, error, errorMessage)
  const dispatcher = useDispatch()
 
  const ValidateLogin = () => {
    if(!identifier){
      const errorAction = setError('Invalid username or email')
      dispatcher(errorAction)
      return
    }
    if(password.length < 8){
      const errorAction = setError('Password must be at least 8 characters')
      dispatcher(errorAction)
      return
    }

    sendRequest(requestMethods.POST, "/login", {
      identifier,
      password,
    }).then((response) =>{
      if(response.data.status === 'success'){
        setLocalUser(response.data.authorisation.token)
        toast.success("Login successful")
      }
    }).catch((error) => {
      toast.error("Incorrect username or password")
    })
  }

  return (
    <div className='flex column center login-wrapper'>
      <div className='flex column center input-wrapper'>
        <h1>Instagram</h1>
        {error && <p className='text-xsm text-error error-text'>{errorMessage}</p>}
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
        handleClick={ValidateLogin}
        />
      </div>
      <div className='flex center login-switch'>
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