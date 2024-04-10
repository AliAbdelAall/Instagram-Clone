import React from 'react'

const ProfileButton = ({text, handleClick}) => {
  return (
    <button className='profile-btn white bold text-sm bg-primary' onClick={handleClick}>{text}</button>
  )
}

export default ProfileButton