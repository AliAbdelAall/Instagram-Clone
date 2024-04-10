import React from 'react'
import {useNavigate, Link} from "react-router-dom"

const FeedProfile = ({profileImage, username, fullName, handleLogout}) => {

  const navigate = useNavigate()

  return (
    <div className='flex align-center space-between '>
      <div className='flex center profile-feed'>
        <Link
        to = "profile"
        >
        <img className='profile-image' src={profileImage} width={44} hight={44} alt="profile"/>
        </Link>
        <div className='flex column user-name'>
          <p className='text-sm'>{username}</p>
          <p className='text-sm text-gray'>{fullName}</p>
        </div>
      </div>
      <p className='text-sm text-primary logout-button' onClick={handleLogout}>Logout</p>
    </div>
  )
}

export default FeedProfile