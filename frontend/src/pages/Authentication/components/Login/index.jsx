import React, {useState} from 'react'
import { Link } from "react-router-dom"

// redux
import { useDispatch } from "react-redux";

// styles
import "./style.css"

// components
import Input from '../../../../components/Input'
import Button from '../../../../components/Button'
import { switchToSignup } from '../../../../Core/redux/Auth';


const Login = () => {

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

  const ValidateLogin = () => {
    const { identifier, password } = credentials
    if(!identifier){
      setError({...error, status:true, field:identifier})
      return
    }
    // if(!)
  }

  return (
    <div className='flex column center login-wrapper'>
      <div className='flex column center input-wrapper'>
        <h1>Instagram</h1>
        <Input
        type={"text"}
        placeholder={'Username, or email'}
        handleChange={(e) => handleInputChange(e.target.value, "identifier")}
        />
        <Input
        type={"password"}
        placeholder={'Password'}
        handleChange={(e) => handleInputChange(e.target.value, "password")}
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