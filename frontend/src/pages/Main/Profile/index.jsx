import React, { useEffect } from 'react'
import { postsSliceName } from '../../../Core/redux/Feed/Feed'
import { useSelector } from "react-redux"

const Profile = () => {

  useEffect(() => {}, )

  const { user } = useSelector((global) => global[postsSliceName])
  return (
    <div className='flex align-center profile-container'>
      <div className='flex column profile-wrapper'>
        <div className='flex'>

          
          <img src={`http://localhost:8000/pfp/${user.profile_image}`} alt="profile_image" />

          <div className='flex column'>

            <div className='flex'>
              <p>username</p>
              <button>Edit profile</button>
              <button>Log out</button>
            </div>

            <div className='flex'>
              <p>posts</p>
              <p>followers</p>
              <p>following</p>
            </div>

            <div className='flex column'>
              <p>Full Name</p>
              <p>Bio</p>
            </div>
          </div>
        </div>
        <div
        className=''>
          <div>
            <p>POSTS</p>
            <p>Add post</p>
          </div>
          <div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile