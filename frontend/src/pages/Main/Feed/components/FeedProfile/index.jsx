import React from 'react'
import { Link } from "react-router-dom"

// Redux
import { userSliceName } from '../../../../../Core/redux/User/User'
import { useSelector } from "react-redux"

const FeedProfile = ({ handleLogout}) => {
  const { user } = useSelector((global) => global[userSliceName])


  return (
    <div className='flex align-center space-between '>
      <div className='flex center profile-feed'>
        <Link
        to = "profile"
        >
        <img 
        className='profile-image' 
        src={`http://localhost:8000/pfp/${user.profile_image}`} 
        width={44} 
        hight={44} 
        alt="profile"/>
        </Link>
        <div className='flex column user-name'>
          <p className='text-sm'>{user.username}</p>
          <p className='text-sm text-gray'>{user.full_name}</p>
        </div>
      </div>
      <p className='text-sm text-primary logout-button' onClick={handleLogout}>Logout</p>
    </div>
  )
}

export default FeedProfile