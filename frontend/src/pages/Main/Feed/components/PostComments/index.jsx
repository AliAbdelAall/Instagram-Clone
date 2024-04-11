import React from 'react'

import "./style.css"

const PostComments = ({isOpenComments = true, setIsOpenComments}) => {
  return (
    <div className={`flex column center comments-container ${isOpenComments ? "" : "hidden"}`}>
      <div className='flex column comments-wrapper'>

        <div className='flex column comment-wrapper'>
          <div className='flex'>
            <img width={32} height={32} src="$" alt="" />
            <p>username</p>
          </div>
          <p>comment</p>
        </div>

     </div>
    </div>
  )
}

export default PostComments