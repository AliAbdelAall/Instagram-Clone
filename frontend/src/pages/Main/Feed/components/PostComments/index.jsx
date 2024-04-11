import React, { useEffect, useState } from 'react'

import "./style.css"

import Comment from '../../../../../components/Comment'
import { sendRequest } from '../../../../../Core/Tools/remote/request'
import { requestMethods } from '../../../../../Core/enums/requestMethods'

const PostComments = ({postId, isOpenComments , setIsOpenComments}) => {

  const [comments, setComments] = useState([])
  const handleCommentsClose = ((e)=>{
    if (e.target.id === 'comments'){
      setIsOpenComments(false)
    }
  })

  useEffect(()=>{
    sendRequest(requestMethods.POST, '/get-comments', {
      post_id: postId
    }).then((response)=>{
      if (response.status === 200){
        setComments(response.data.comments)
      }
    }).catch((error)=>{
      console.error(error)
    })
  },[])

  return (
    <div 
    className={`flex column center comments-container ${isOpenComments ? "" : "hidden"}` } 
    id="comments" 
    onMouseDown={(e)=>handleCommentsClose(e)}>
      <div className='flex column comments-wrapper'>

      {comments && comments.map((comment)=>(
        <Comment
        username={comment.user.username}
        image={`http://localhost:8000/pfp/${comment.user.profile_image}`}
        comment={comment.comment}
        />

      ))}

     </div>
    </div>
  )
}

export default PostComments