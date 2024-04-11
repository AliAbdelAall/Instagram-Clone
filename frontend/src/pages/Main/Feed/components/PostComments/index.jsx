import React, { useEffect } from 'react'

import "./style.css"

import Comment from '../../../../../components/Comment'
import { sendRequest } from '../../../../../Core/Tools/remote/request'
import { requestMethods } from '../../../../../Core/enums/requestMethods'

const PostComments = ({postId, isOpenComments , setIsOpenComments}) => {

  const []
  const handleCommentsClose = ((e)=>{
    if (e.target.id === 'comments'){
      setIsOpenComments(false)
    }
  })

  useEffect(()=>{
    sendRequest(requestMethods.GET, '/get-comments').then((response)=>{
      post_id: postId
    })
  },[])

  return (
    <div 
    className={`flex column center comments-container ${isOpenComments ? "" : "hidden"}` } 
    id="comments" 
    onMouseDown={(e)=>handleCommentsClose(e)}>
      <div className='flex column comments-wrapper'>

        <Comment
        // username={}
        // image={}
        // comment={}
        />

     </div>
    </div>
  )
}

export default PostComments