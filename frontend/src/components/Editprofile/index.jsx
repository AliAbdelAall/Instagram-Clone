import React, { useState } from 'react'

// Styles
import "./style.css"

// Redux
import { useDispatch, useSelector } from "react-redux"
import { userSliceName, updateUserInfo } from '../../Core/redux/User/User'

// Images
import postImage from "../../assets/other/background3.jpg"

// Components
import ProfileButton from '../ProfileButton'
import { handleInputChange } from '../../Core/redux/Auth'
import { sendRequest } from '../../Core/Tools/remote/request'
import { requestMethods } from '../../Core/enums/requestMethods'



const EditProfile = ({isOpen, setIsOpen}) => {

  const { user } = useSelector((global) => global[userSliceName])
  const [bio, setBio] = useState([user.bio])
  const [image, setImage] = useState(user.profile_image)
  const [previewImage, setPreviewImage] = useState(user.profile_image)
  const dispatcher = useDispatch()
  console.log(image)

  const handleEditProfile = (() => {
    sendRequest(requestMethods.PUT, "/edit-profile", {
      profile_image: image,
      bio: bio,
    }).then((response) => {
      if(response.status === 200){
        const edit = updateUserInfo({
          profile_image: response.data.profile_image,
          bio: response.data.bio
        })
        dispatcher(edit)
      }
    })
  })

  const handleImageChange = (e) => {
    const file = e.target.files[0]
    setImage(file)
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => {
      setPreviewImage(reader.result)
    }

  }
  
  return (
    <div className={`flex column center edit-container ${isOpen ? "" : "hidden"}`}>
      <div className='flex column edit-wrapper'>
        <input type="file" onChange={(e) => handleImageChange(e)}/>
        {previewImage !== user.profile_image && <img src={previewImage} alt="post_image" accept="image/"/>}
        <div>
          <p>bio:</p>
          <textarea 
          value={bio} 
          placeholder="bio" 
          onChange={(e) => setBio(e.target.value)}
          />
        </div>
        <div className='flex space-around'>
        <ProfileButton
        text={"Confirm"}
        handleClick={handleEditProfile}
        />
        <ProfileButton
        text={"Cancel"}
        handleClick={ () => {
          setIsOpen(false)
          setBio([user.bio])
          setPreviewImage(user.profile_image)
          setImage(user.profile_image)
        }}
        />
      </div>
      </div>
      
    </div>
  )
}

export default EditProfile