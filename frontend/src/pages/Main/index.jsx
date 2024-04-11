import React, { useEffect } from 'react'
import { Outlet } from "react-router-dom"

// Redux
import { useDispatch } from "react-redux"
import { setpostsState } from '../../Core/redux/Feed/Feed'
import { setUserInfo } from '../../Core/redux/User/User'

// Toastify
import { toast } from "react-toastify"

// Utilities
import { sendRequest } from '../../Core/Tools/remote/request'
import { requestMethods } from '../../Core/enums/requestMethods'

// Components
import Header from '../../components/Header'


const Main = () => {

  const dispatcher = useDispatch()

  useEffect(()=>{
    sendRequest(requestMethods.POST, "/get-feed") 
    .then((response)=>{
      if(response.status === 200){
        const posts = setpostsState(response.data.posts)
        dispatcher(posts)
        const user = setUserInfo(response.data.user)
        dispatcher(user)
      }
    }).catch((error)=>{
      toast.error("Somthing went wrong!")
    })
  },[])

  return (
    <>
      <Header/>
      <Outlet/>
    </>
  )
}

export default Main