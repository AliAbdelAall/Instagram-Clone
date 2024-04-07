import React, {useState} from 'react'
import { Link } from "react-router-dom"

// components
import Input from '../../../../components/Input'
import Button from '../../../../components/Button'
import { switchToLogin } from '../../../../Core/redux/Auth'
import { useDispatch } from "react-redux"


const Signup = () => {
  const initCredentials = {
    identifier: "",
    email: "",
    username: "",
    fullName: "",
    password: ""
  }

  const initError = {
    status: false,
    field: ""
  }
  const dispatcher = useDispatch()
  const [credentials, setCredentials] = useState(initCredentials)
  const [error, setError] = useState(initError)


  const handleInputChange = (value, field) => {
    setCredentials({...credentials, [field]: value})
  }

  console.log(credentials)


  return (
    <div className='flex column center login-wrapper'>
      <div className='flex column center input-wrapper'>
        <h1>Instagram</h1>
        <Input
        type={"text"}
        placeholder={'Email'}
        handleChange={(e) => handleInputChange(e.target.value, "email")}
        />
        <Input
        type={"text"}
        placeholder={'Full Name'}
        handleChange={(e) => handleInputChange(e.target.value, "fullName")}
        />
        <Input
        type={"text"}
        placeholder={'Username'}
        handleChange={(e) => handleInputChange(e.target.value, "username")}
        />
        <Input
        type={"password"}
        placeholder={'Password'}
        handleChange={(e) => handleInputChange(e.target.value, "password")}
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