import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom"


// Styles
import "./style.css"

// images
import postImage from "../../../assets/other/background3.jpg"

// Redux
import { userSliceName } from '../../../Core/redux/User/User'
import { useSelector } from "react-redux"

// compunents
import ProfileButton from '../../../components/ProfileButton'
import EditProfile from './Editprofile'
import AddPost from './AddPost'

//utilities
import { removeLocalUser } from '../../../Core/Tools/local/user'

const Profile = () => {

  const navigate = useNavigate()

  const { user } = useSelector((global) => global[userSliceName])
  const { 
    username, 
    full_name, 
    profile_image,
    bio, 
    posts_count,
    followers_count,
    following_count,
    posts,
  } = user

  const [isOpen, setIsOpen] = useState(false)
  const [isOpenPost, setIsOpenPost] = useState(false)

  console.log(profile_image)
  
  const handleLogout = () => {
    removeLocalUser()
    navigate("/")
  }
  return (
    <div className='flex center profile-container'>
      <EditProfile
      setIsOpen={setIsOpen}
      isOpen={isOpen}
      />

      <AddPost
      setIsOpenPost={setIsOpenPost}
      isOpenPost={isOpenPost}
      />
      

      <div className='flex column profile-wrapper'>
        <div className='flex space-between profile-info'>

          
          <img className='profile-image' src={`http://localhost:8000/pfp/${profile_image}`} width={150} height={150} alt="profile_image" />

          <div className='flex column profile-user-info'>

            <div className='flex align-center profile-btns '>
              <p className='text-lg'>{username}</p>
              <ProfileButton
              className='profile-btn'
              text={'Edit'}
              handleClick={() => setIsOpen(true)}
              />
              <ProfileButton
              className='profile-btn'
              text={'Log out'}
              handleClick={handleLogout}
              />
            </div>

            <div className='flex profile-counts'>
              <p>{`${posts_count} posts`}</p>
              <p>{`${followers_count} followers`}</p>
              <p>{`${following_count} following`}</p>
            </div>

            <div className='flex column'>
              <p>{full_name}</p>
              <p>{bio}</p>
            </div>
          </div>
        </div>
        <div
        className=''>
          <div className='flex space-around add-post'>
            <p>POSTS</p>
            <ProfileButton
              className='profile-btn'
              text={'Add Post'}
              handleClick={() => setIsOpenPost(true)}
              />
          </div>
          <div className='flex wrap profile-posts'>
          {posts && posts.map((post) => (
            
            <img key={post.id} src={`http://localhost:8000/posts/${post.post_image}`} width={230} height={300} alt="post" />
          ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile