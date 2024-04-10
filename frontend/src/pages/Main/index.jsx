import React, { useEffect } from 'react'

import { useDispatch } from "react-redux"
import { setpostsState } from '../../Core/redux/Feed/Feed'
import { setUserInfo } from '../../Core/redux/User/User'

import { toast } from "react-toastify"

import { sendRequest } from '../../Core/Tools/remote/request'
import { requestMethods } from '../../Core/enums/requestMethods'

import { Outlet } from "react-router-dom"

const Main = () => {

  const dispatcher = useDispatch()

  useEffect(()=>{
    sendRequest(requestMethods.POST, "/get-feed") 
    .then((response)=>{
      if(response.status === 200){
        const posts = setpostsState(response.data.posts)
        dispatcher(posts)
        const user = setUserInfo(response.data.user)
      }
    }).catch((error)=>{
      toast.error("Somthing went wrong!")
    })
  },[])

  return (
    <>
    <Outlet/>
    </>
  )
}

export default Main