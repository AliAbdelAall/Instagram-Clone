import React from 'react'

const SugestedUser = ({id, profileImage, username, handleFollowClick}) => {
  return (
    <div className='flex align-center space-between'>
      <div className='flex center sug-user'>
        <img className='sugested-profile' src={profileImage} width={44} hight={44} alt="profile" />
        <p className='text-sm sug-username'>{username}</p>
      </div>
      <p className='text-xsm text-primary follow-btn' onClick={()=> handleFollowClick(id)}>follow</p>
    </div>
  )
}

export default SugestedUser