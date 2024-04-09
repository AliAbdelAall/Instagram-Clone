import React from 'react'

import heart from "../../../../../assets/icons/heart.svg"
import heartRed from "../../../../../assets/icons/heart-red.svg"
import commentIcon from "../../../../../assets/icons/comment.svg"

const Post = ({profileImage, postImage, liked, likes, caption, myComment,setComment, setLiked}) => {
  return (
    <div className='flex column post-wrapper'>

          <div className='flex align-center user_info-post'>
            <img src={profileImage} width={32} hight={32} alt="profile" />
            <p className='username-post bold text-sm'>username</p>
          </div>

          <img src={postImage} alt="Post" />

          <div className='flex like-comment'>
            {liked ? 
            (<img src={heartRed} alt="heart-red" onClick={() => setLiked(false)}/>) :
            (<img src={heart} alt="heart" onClick={() => setLiked(true)}/>)
            }
            <img src={commentIcon} alt="comment" />
          </div>

          <p className='post_likes text-sm'>{likes} likes</p>
          {caption && <p className='post-caption text-sm'>{caption}</p>}

          <div className='flex space-between comment-post'> 
            <textarea
            className='text-sm'
            type={"text"}
            placeholder={"Add a comment"}
            onChange={(e) => setComment(e.target.value)}
            ></textarea>

            {myComment && <p className='text-sm text-primary'>Post</p>}
          </div> 
          <div className='sparator bg-gray-col'></div>
        </div>
  )
}

export default Post