import React, {useEffect, useState} from 'react'

// images
import heart from "../../../../../assets/icons/heart.svg"
import heartRed from "../../../../../assets/icons/heart-red.svg"
import commentIcon from "../../../../../assets/icons/comment.svg"

// Redux
import { useDispatch } from "react-redux"
import { toggleLiked } from '../../../../../Core/redux/Feed/Feed'

// Toastify
import { toast } from "react-toastify"

// Utilities
import { requestMethods } from '../../../../../Core/enums/requestMethods'
import { sendRequest } from '../../../../../Core/Tools/remote/request'

const Post = ({ id, profileImage, username, postImage, liked, likes, caption }) => {

  const [myComment, setMyComment] = useState("")
  const dispatcher = useDispatch()

  const handlePostClick = () => {
    sendRequest(requestMethods.POST, "/add-comment",{
      post_id: id,
      comment: myComment
    }).then((response) => {
      if(response.status === 201){
        const addComment = addComment({postId: id, comment: response.data.comment})
        dispatcher(addComment)
      }
    }).catch((error)=> {
      toast.error("Something went wrong")
    })
  }

  const handleLikedSwitch = (id) => {

    liked ? 
    sendRequest(requestMethods.DELETE,`/delete-like/${id}`).then((response) => {
      if(response.status === 204){
        const toggle = toggleLiked(id)
        dispatcher(toggle)
      }
    }).catch((error)=> {
      toast.error("Something went wrong")
    })
    :
    sendRequest(requestMethods.POST, "/add-like", {
      post_id:id
    }).then((response) => {
      if(response.status === 201){
        const toggle = toggleLiked(id)
        dispatcher(toggle)
      }
    }).catch((error)=> {
      toast.error("Something went wrong")
    })
    
  }


  return (
    <div className='flex column post-wrapper'>

          <div className='flex align-center user_info-post'>
            <img className='profile-image' src={profileImage} width={32} hight={32} alt="profile" />
            <p className='username-post bold text-sm'>{username}</p>
          </div>

          <img src={postImage} alt="Post" />

          <div className='flex like-comment'>
            {liked ? 
            (<img className='heart' src={heartRed} alt="heart-red" onClick={() => handleLikedSwitch(id)}/>) :
            (<img className='heart'  src={heart} alt="heart" onClick={() => handleLikedSwitch(id)}/>)
            }
            <img className='comments' src={commentIcon} alt="comment" />
          </div>

          <p className='post_likes text-sm'>{likes} likes</p>
          {caption && <p className='post-caption text-sm'>{caption}</p>}

          <div className='flex space-between comment-post'> 
            <textarea
            className='text-sm'
            type={"text"}
            value={myComment}
            placeholder={"Add a comment"}
            onChange={(e) => setMyComment(e.target.value)}
            ></textarea>

            {myComment && <p className='text-sm text-primary post-comment' onClick={handlePostClick}>Post</p>}
          </div> 
          <div className='sparator bg-gray-col'></div>
        </div>
  )
}

export default Post