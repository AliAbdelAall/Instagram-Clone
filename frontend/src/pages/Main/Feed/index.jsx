import React, { useState } from 'react'

// Styles
import "./style.css"

// Images
import defaultProfile from "../../../assets/profile/Default_pfp.jpg"
import postImage from "../../../assets/other/background3.jpg"

// components
import Post from './components/Post'
import FeedProfile from './components/FeedProfile'
import SugestedUser from './components/SugestedUser'

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
        <FeedProfile
        profileImage={defaultProfile} 
        username={"username"} 
        fullName={"full name"} 
        // handleLogout={}
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