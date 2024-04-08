import React from 'react'

// Styles
import "./style.css"

// Images
import defaultProfile from "../../../assets/profile/Default_pfp.jpg"
import postImage from "../../../assets/other/background3.jpg"
import heart from "../../../assets/icons/heart.svg"
import heartRed from "../../../assets/icons/heart-red.svg"
import comment from "../../../assets/icons/comment.svg"

const Feed = () => {
  return (
    <div className='flex center feed-continer'>
      <div className='flex column'>
        <div className='flex column posts-container'>
          <div className='flex align-center user_info-post'>
            <img src={defaultProfile} width={32} hight={32} alt="profile" />
            <p className='username-post bold'>username</p>
          </div>
          <img src={postImage} alt="Post" />
          <div>
            <img src={heart} alt="heart" />
            <img src={heartRed} alt="heart-red" />
            <img src={comment } alt="comment" />
          </div>
          <p className='post_likes'>12312 likes</p>
          <p className='post-caption'>this is my caption it should be a little long so we can test the word break inside the post</p>
          <textarea
          type={"text"}
          placeholder={"Add a comment"}
          // onChange={}
          ></textarea>
        </div>
        <div className='flex column posts-container'>
          <div className=''>
            <div className='flex align-center user_info-post'>
              <img src={defaultProfile} width={32} hight={32} alt="profile" />
              <p className='username-post bold'>username</p>
            </div>
          </div>
          <img src={postImage} alt="Post" />
          <div>
            <img src={heart} alt="heart" />
            <img src={heartRed} alt="heart-red" />
            <img src={comment } alt="comment" />
          </div>
          <p className='post_likes'>12312 likes</p>
          <p className='post-caption'>this is my caption it should be a little long so we can test the word break inside the post</p>
          <textarea
          type={"text"}
          placeholder={"Add a comment"}
          // handleChange={}
          ></textarea>
        </div>
        <div className='flex column posts-container'>
          <div className=''>
            <div className='flex align-center user_info-post'>
              <img src={defaultProfile} width={32} hight={32} alt="profile" />
              <p className='username-post bold'>username</p>
            </div>
          </div>
          <img src={postImage} alt="Post" />
          <div>
            <img src={heart} alt="heart" />
            <img src={heartRed} alt="heart-red" />
            <img src={comment } alt="comment" />
          </div>
          <p className='post_likes'>12312 likes</p>
          <p className='post-caption'>this is my caption it should be a little long so we can test the word break inside the post</p>
          <textarea
          type={"text"}
          placeholder={"Add a comment"}
          // handleChange={}
          ></textarea>
        </div>
      </div>
      <div className='flex column align-self-start profile-sugestions'>
        <div className='flex align-center space-between'>
          <div className='flex center profile-feed'>
            <img src={defaultProfile} width={44} hight={44} alt="profile" />
            <div className='flex column center'>
              <p className='text-sm'>username</p>
              <p className='text-sm'>full name</p>
            </div>
          </div>
          <p className='text-sm text-primary'>Logout</p>
        </div>
        <div className='flex column'>
          <p>Sugested for you</p>
          <div className='flex align-center space-between'>
            <div className='flex center'>
              <img src={defaultProfile} width={44} hight={44} alt="profile" />
              <p className='text-sm'>username</p>
            </div>
            <p className='text-xsm text-primary'>follow</p>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default Feed