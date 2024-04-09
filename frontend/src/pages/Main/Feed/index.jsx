import React, { useState } from 'react'

// Styles
import "./style.css"

// Images
import defaultProfile from "../../../assets/profile/Default_pfp.jpg"
import postImage from "../../../assets/other/background3.jpg"

// components
import Post from './components/Post'

const Feed = () => {
  const [liked, setLiked] = useState(false)
  const [comment, setComment] = useState("")

  return (
    <div className='flex center feed-continer'>
      <div className='flex column posts-container'>
        <Post
        profileImage={defaultProfile} 
        postImage={postImage}
        setComment={setComment}
        setLiked={setLiked} 
        liked={liked} 
        likes={243} 
        caption={"this is my caption it should be a little long so we can test the word break inside the post"} 
        myComment={comment}
        />
       
      </div>
      <div className='flex column align-self-start profile-sugestions'>
        <div className='flex align-center space-between '>
          <div className='flex center profile-feed'>
            <img src={defaultProfile} width={44} hight={44} alt="profile" />
            <div className='flex column user-name'>
              <p className='text-sm'>username</p>
              <p className='text-sm text-gray'>full name</p>
            </div>
          </div>
          <p className='text-sm text-primary'>Logout</p>
        </div>
        <div className='flex column sugestions'>
          <p className='text-sm'>Sugested for you</p>
          <div className='flex align-center space-between'>
            <div className='flex center sug-user'>
              <img src={defaultProfile} width={44} hight={44} alt="profile" />
              <p className='text-sm sug-username'>username</p>
            </div>
            <p className='text-xsm text-primary'>follow</p>
          </div>
          <div className='flex align-center space-between'>
            <div className='flex center sug-user'>
              <img src={defaultProfile} width={44} hight={44} alt="profile" />
              <p className='text-sm sug-username'>username</p>
            </div>
            <p className='text-xsm text-primary'>follow</p>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default Feed