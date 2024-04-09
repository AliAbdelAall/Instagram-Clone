import React from 'react'

const SugestedUser = ({profileImage, username}) => {
  return (
    <div className='flex align-center space-between'>
      <div className='flex center sug-user'>
        <img src={profileImage} width={44} hight={44} alt="profile" />
        <p className='text-sm sug-username'>{username}</p>
      </div>
      <p className='text-xsm text-primary'>follow</p>
    </div>
  )
}

export default SugestedUser