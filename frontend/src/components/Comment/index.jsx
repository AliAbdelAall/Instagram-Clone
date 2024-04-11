import React from 'react'

const Comment = ({ username, comment, image}) => {
  return (
    <div className='flex column comment-wrapper'>
      <div className='flex'>
        <img src="$" width={32} height={32} alt="profile" />
        <p>username</p>
      </div>
      <p>comment</p>
    </div>
  )
}

export default Comment