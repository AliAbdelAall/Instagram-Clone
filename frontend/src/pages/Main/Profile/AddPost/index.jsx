import React, { useState } from 'react'

// Redux
import { useDispatch, useSelector } from "react-redux"
import { userSliceName, updateUserInfo } from '../../../../Core/redux/User/User'

// Taostify
import { toast } from "react-toastify"

// Components
import ProfileButton from '../../../../components/ProfileButton'
import { sendRequest } from '../../../../Core/Tools/remote/request'
import { requestMethods } from '../../../../Core/enums/requestMethods'


const AddPost = ({isOpenPost, setIsOpenPost}) => {

  const { user } = useSelector((global) => global[userSliceName])

  const [caption, setCaption] = useState("")
  const [image, setImage] = useState()
  const [previewImage, setPreviewImage] = useState()
  const dispatcher = useDispatch()

  console.log(image)

  const handleAddPost = (() => {
    const formData = new FormData
    formData.append('post_image', image)
    formData.append('caption', caption)
    sendRequest(requestMethods.POST, "/add-post", formData).then((response) => {
      if(response.status === 200){
        const add = addUserPost({
          post_image: response.data.post_image,
          caption: response.data.caption
        })
        dispatcher(add)
        toast.success('Post added successfuly')
      }
    }).catch((error) => {
      toast.error("Something went wrong")
      console.error(error)
    })
    setIsOpenPost(false)

  })

  const handleImageChange = (e) => {
    const file = e.target.files[0]
    if(file){
      setImage(file)
      const reader = new FileReader()
      reader.readAsDataURL(file)
      reader.onload = () => {
        setPreviewImage(reader.result)
      }
    }
  }

  return (
    <div className={`flex column center edit-container ${isOpenPost ? "" : "hidden"}`}>
      <div className='flex column edit-wrapper'>
        <input type="file" onChange={(e) => handleImageChange(e)}/>
        {previewImage && <img src={previewImage} alt="post_image" accept="image/"/>}
        <div>
          <p>caption:</p>
          <textarea 
          value={caption} 
          placeholder="caption" 
          onChange={(e) => setCaption(e.target.value)}
          />
        </div>
        <div className='flex space-around'>
        <ProfileButton
        text={"Confirm"}
        handleClick={handleAddPost}
        />
        <ProfileButton
        text={"Cancel"}
        handleClick={ () => {
          setIsOpenPost(false)
          setCaption("")
          setPreviewImage()
        }}
        />
      </div>
      </div>
      
    </div>
  )
}

export default AddPost