import React from 'react'
import { useNavigate } from "react-router-dom"

// Styles
import "./style.css"

// Images
import defaultProfile from "../../../assets/profile/Default_pfp.jpg"

// Components
import Post from './components/Post'
import FeedProfile from './components/FeedProfile'
import SugestedUser from './components/SugestedUser'

// Taostify
import { toast } from 'react-toastify'

// Redux
import { postsSliceName } from '../../../Core/redux/Feed/Feed'
import { userSliceName } from '../../../Core/redux/User/User'
import { useSelector } from 'react-redux'

// Utilities
import { removeLocalUser } from '../../../Core/Tools/local/user'

const Feed = () => {

  const { posts, loading } = useSelector((global) => global[postsSliceName])
  const { user } = useSelector((global) => global[userSliceName])
  const navigate = useNavigate()


  const handleLogout = () => {
    removeLocalUser()
    navigate("/")
  }

  return (
    <div className='flex center feed-continer'>
      <div className='flex column posts-container'>
        
        {loading ? (<p>LOADING...</p>) : 
        (posts?.map((post)=>(

        <Post
        key={post.id}
        id = {post.id}
        profileImage={`http://localhost:8000/pfp/${post.user.profile_image}`} 
        // profileImage={`${process.env.MIX_APP_URL}/pfp/${post.user.profile_image}`} 
        username={post.user.username}
        postImage={`http://localhost:8000/posts/${post.post_image}`}
        // postImage={`${process.env.MIX_APP_URL}/posts/${post.post_image}`}
        liked={post.liked} 
        likes={post.likes} 
        caption={post.caption} 
        />

        )))}
       
      </div>
      <div className='flex column align-self-start profile-sugestions'>
        <FeedProfile
        profileImage={`http://localhost:8000/pfp/${user.profile_image}`}
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