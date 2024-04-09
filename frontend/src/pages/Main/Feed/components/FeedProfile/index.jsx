import React from 'react'

const FeedProfile = ({profileImage, username, fullName, handleLogout}) => {
  return (
    <div className='flex align-center space-between '>
      <div className='flex center profile-feed'>
        <img src={profileImage} width={44} hight={44} alt="profile" />
        <div className='flex column user-name'>
          <p className='text-sm'>{username}</p>
          <p className='text-sm text-gray'>{fullName}</p>
        </div>
      </div>
      <p className='text-sm text-primary' onClick={handleLogout}>Logout</p>
    </div>
  )
}

export default FeedProfile