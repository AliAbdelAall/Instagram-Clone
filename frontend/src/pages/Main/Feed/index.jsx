import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom"

// Styles
import "./style.css"

// Images
import defaultProfile from "../../../assets/profile/Default_pfp.jpg"
import postImage from "../../../assets/other/background3.jpg"

// Components
import Post from './components/Post'
import FeedProfile from './components/FeedProfile'
import SugestedUser from './components/SugestedUser'

// Taostify
import { toast } from 'react-toastify'

// Redux
import { postsSliceName, setpostsState, toggleLiked} from '../../../Core/redux/Feed/Feed'
import { useDispatch, useSelector } from 'react-redux'

// Utilities
import { sendRequest } from '../../../Core/Tools/remote/request'
import { requestMethods } from '../../../Core/enums/requestMethods'
import { removeLocalUser } from '../../../Core/Tools/local/user'

const Feed = () => {

  const { posts, user, loading } = useSelector((global) => global[postsSliceName])
  const navigate = useNavigate()
  const dispatcher = useDispatch()

  useEffect(()=>{
    sendRequest(requestMethods.POST, "/get-feed") 
    .then((response)=>{
      if(response.status === 200){
        const posts = setpostsState({posts: response.data.posts, user: response.data.user})
        dispatcher(posts)
      }
    }).catch((error)=>{
      toast.error("Somthing went wrong!")
    })
  },[])

  const handleLogout = () => {
    removeLocalUser()
    navigate("/")
  }

  const handleLikedSwitch = (id) => {
    const toggle = toggleLiked(id)
    dispatcher(toggle)
  }


  return (
    <div className='flex center feed-continer'>
      <div className='flex column posts-container'>
        
        {loading ? (<p>LOADING...</p>) : 
        (posts?.map((post, i)=>(
        <Post
        key={post.id}
        id = {post.id}
        profileImage={defaultProfile} 
        username={post.user.username}
        postImage={postImage}
        handleLikedSwitch={handleLikedSwitch} 
        liked={post.liked} 
        likes={post.likes} 
        caption={post.caption} 
        />
        )))}
       
      </div>
      <div className='flex column align-self-start profile-sugestions'>
        <FeedProfile
        profileImage={defaultProfile} 
        username={user.username} 
        fullName={user.full_name} 
        handleLogout={handleLogout}
        />
        <div className='flex column sugestions'>

          <p className='text-sm'>Sugested for you</p>

          <SugestedUser
          profileImage={defaultProfile}
          username={"username"}
          />

          <SugestedUser
          profileImage={defaultProfile}
          username={"username"}
          />

          <SugestedUser
          profileImage={defaultProfile}
          username={"username"}
          />

        </div>
      </div>
    </div>
  )
}

export default Feed