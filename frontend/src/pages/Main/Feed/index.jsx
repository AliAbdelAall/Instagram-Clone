import React, { useState } from 'react'

// Styles
import "./style.css"

// Images
import defaultProfile from "../../../assets/profile/Default_pfp.jpg"
import postImage from "../../../assets/other/background3.jpg"
import heart from "../../../assets/icons/heart.svg"
import heartRed from "../../../assets/icons/heart-red.svg"
import commentIcon from "../../../assets/icons/comment.svg"

const Feed = () => {
  const [liked, setLiked] = useState(false)
  const [comment, setComment] = useState("")

  return (
    <div className='flex center feed-continer'>
      <div className='flex column posts-container'>
        <div className='flex column post-wrapper'>

          <div className='flex align-center user_info-post'>
            <img src={defaultProfile} width={32} hight={32} alt="profile" />
            <p className='username-post bold text-sm'>username</p>
          </div>

          <img src={postImage} alt="Post" />

          <div className='flex like-comment'>
            {liked ? 
            (<img src={heartRed} alt="heart-red" onClick={() => setLiked(false)}/>) :
            (<img src={heart} alt="heart" onClick={() => setLiked(true)}/>)
            }
            <img src={commentIcon} alt="comment" />
          </div>

          <p className='post_likes text-sm'>12312 likes</p>
          <p className='post-caption text-sm'>this is my caption it should be a little long so we can test the word break inside the post</p>

          <div className='flex space-between comment-post'> 
            <textarea
            className='text-sm'
            type={"text"}
            placeholder={"Add a comment"}
            onChange={(e) => setComment(e.target.value)}
            ></textarea>

            {comment && <p className='text-sm text-primary'>Post</p>}
          </div> 
          <div className='sparator bg-gray-col'></div>
        </div>
       
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