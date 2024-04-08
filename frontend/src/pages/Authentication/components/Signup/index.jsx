import React from 'react'
import { Link, useNavigate  } from "react-router-dom"

// redux
import { useDispatch, useSelector } from "react-redux"
import { registrationSliceName, switchToLogin, handleInputChange, setError, } from '../../../../Core/redux/Auth'

// Toastify
import {toast} from "react-toastify"

// components
import Input from '../../../../components/Input'
import Button from '../../../../components/Button'

// utilities
import { sendRequest } from '../../../../Core/Tools/remote/request'
import { requestMethods } from '../../../../Core/enums/requestMethods'
import { setLocalUser } from '../../../../Core/Tools/local/user'



const Signup = () => {

  const { email, username, fullName, password, error, errorMessage} = useSelector((global) => global[registrationSliceName])
  const dispatcher = useDispatch()
  const navigate = useNavigate()

  const validateSignup = () => {
    const regex = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/
    if(!regex.test(email)){
      const errorAction = setError("Invalid email")
      dispatcher(errorAction)
      return
    }
    if (username.length < 6){
      const errorAction = setError("Usename must be at least 6 charaters")
      dispatcher(errorAction)
      return
    }
    if (fullName.split(" ").length < 2){
      const errorAction = setError("full name cannot be 1 word")
      dispatcher(errorAction)
      return
    }
    if (password.length < 8){
      const errorAction = setError("password must be at least 8  characters")
      dispatcher(errorAction)
      return
    }

    sendRequest(requestMethods.POST, "/register", {
      email,
      full_name: fullName,
      username,
      password
    }).then((response) => {
      if(response.data.status === 'success'){
        setLocalUser(response.data.token)
        toast.success('Login successful')
        navigate('/main')
      }else if (response.data.message){
        const errorAction = setError('User already exists') 
        dispatcher(errorAction)
      }
    }).catch((error)=>{
      toast.error("Somthing went wrong...")
    })
  }

  return (
    <div className='flex column center login-wrapper'>
      <div className='flex column center input-wrapper'>
        <h1>Instagram</h1>
        {error && <p className='text-xsm text-error error-text'>{errorMessage}</p>}
        <Input
        type={"text"}
        placeholder={'Email'}
        handleChange={(e) => {
          const change = handleInputChange({key: "email", value: e.target.value})
          dispatcher(change)}}
        />
        <Input
        type={"text"}
        placeholder={'Full Name'}
        handleChange={(e) => {
          const change = handleInputChange({key: "fullName", value: e.target.value})
          dispatcher(change)}}
        />
        <Input
        type={"text"}
        placeholder={'Username'}
        handleChange={(e) => {
          const change = handleInputChange({key: "username", value: e.target.value})
          dispatcher(change)}}
        />
        <Input
        type={"password"}
        placeholder={'Password'}
        handleChange={(e) => {
          const change = handleInputChange({key: "password", value: e.target.value})
          dispatcher(change)}}
        />
        <Button
        text={"Signup"}
        handleClick={validateSignup}
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