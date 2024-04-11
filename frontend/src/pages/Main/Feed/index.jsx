import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom"

// Styles
import "./style.css"

// Images
import defaultProfile from "../../../assets/profile/Default_pfp.jpg"

// Components
import Post from './components/Post'
import FeedProfile from './components/FeedProfile'
import SugestedUser from './components/SugestedUser'
import PostComments from './components/PostComments'

// Taostify
import { toast } from 'react-toastify'

// Redux
import { postsSliceName } from '../../../Core/redux/Feed/Feed'
import { userSliceName } from '../../../Core/redux/User/User'
import { useSelector } from 'react-redux'

// Utilities
import { removeLocalUser } from '../../../Core/Tools/local/user'
import { sendRequest } from '../../../Core/Tools/remote/request'
import { requestMethods } from '../../../Core/enums/requestMethods'

const Feed = () => {

  const { posts, loading } = useSelector((global) => global[postsSliceName])
  const { user } = useSelector((global) => global[userSliceName])
  const [suggestions, setSuggestions] = useState([])
  const [isOpenComments, setIsOpenComments] = useState(false)
  const [postId, setpostId] = useState(0)
  const navigate = useNavigate()

  useEffect(()=>{
    sendRequest(requestMethods.GET, '/get-suggestions').then((response)=>{
      if(response.status === 200){
        setSuggestions(response.data.suggestions)
      }
    }).catch((error)=>{
      toast.error("Something went wrong")
    })
  },[])

  const handleFollowClick = (id) => {
    sendRequest(requestMethods.POST, '/create-follow', {
      followed_id: id
    }).then((response)=>{
      if(response.status === 201){
        toast.success("follow created successfully")
        const newSuggestions = suggestions.filter((suggestion)=> suggestion.id !== id)
        setSuggestions(newSuggestions)
      }
    }).catch((error)=>{
      toast.error("Something went wrong")
    })
  }

  const handleLogout = () => {
    removeLocalUser()
    navigate("/")
  }

  return (
    <div className='flex center feed-continer'>
      <PostComments
      postId={postId}
      isOpenComments={isOpenComments}
      setIsOpenComments={setIsOpenComments}
      />
      <div className='flex column posts-container'>

        
        
        {loading ? (<p>LOADING...</p>) : 
        (posts?.map((post)=>(

        <Post
        key={post.id}
        id = {post.id}
        setpostId={setpostId}
        profileImage={`http://localhost:8000/pfp/${post.user.profile_image}`} 
        // profileImage={`${process.env.MIX_APP_URL}/pfp/${post.user.profile_image}`} 
        username={post.user.username}
        postImage={`http://localhost:8000/posts/${post.post_image}`}
        // postImage={`${process.env.MIX_APP_URL}/posts/${post.post_image}`}
        liked={post.liked}
        setIsOpenComments={setIsOpenComments} 
        likes={post.likes} 
        caption={post.caption} 
        />

        )))}
       
      </div>
      <div className='flex column align-self-start profile-sugestions'>
        <FeedProfile
        handleLogout={handleLogout}
        />
        <div className='flex column sugestions'>

          <p className='text-sm'>Sugested for you</p>
        {suggestions && suggestions.map((user)=>(
          <SugestedUser
          key={user.id}
          id={user.id}
          profileImage={`http://localhost:8000/pfp/${user.profile_image}`}
          username={user.username}
          handleFollowClick={handleFollowClick}
          />

        ))}

        </div>
      </div>
    </div>
  )
}

export default Feed