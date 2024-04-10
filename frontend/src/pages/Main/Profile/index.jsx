import React, { useEffect } from 'react'
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

//utilities
import { removeLocalUser } from '../../../Core/Tools/local/user'

const Profile = () => {

  const navigate = useNavigate()

  useEffect(() => {}, )

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


  const handleLogout = () => {
    removeLocalUser()
    navigate("/")
  }
  return (
    <div className='flex center profile-container'>
      <div className='flex column profile-wrapper'>
        <div className='flex space-between profile-info'>

          
          <img src={`http://localhost:8000/pfp/${profile_image}`} width={150} height={150} alt="profile_image" />

          <div className='flex column profile-user-info'>

            <div className='flex align-center profile-btns '>
              <p className='text-lg'>{username}</p>
              <ProfileButton
              className='profile-btn'
              text={'Edit'}
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
          <div className='flex space-around'>
            <p>POSTS</p>
            <p>Add post</p>
          </div>
          <div className='flex wrap space-between profile-posts'>
          {[3,2,1,4] && [3,2,1,4].map((post) => (
            <img src={postImage} width={230} height={300} alt="post" />
          ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile