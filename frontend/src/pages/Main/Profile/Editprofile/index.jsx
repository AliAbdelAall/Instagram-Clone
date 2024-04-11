import React, { useState } from 'react'

// Styles
import "./style.css"

// Redux
import { useDispatch, useSelector } from "react-redux"
import { userSliceName, updateUserInfo } from '../../../../Core/redux/User/User'

// Taostify
import { toast } from "react-toastify"


// Components
import ProfileButton from '../../../../components/ProfileButton'
import { handleInputChange } from '../../../../Core/redux/Auth'
import { sendRequest } from '../../../../Core/Tools/remote/request'
import { requestMethods } from '../../../../Core/enums/requestMethods'



const EditProfile = ({isOpen, setIsOpen}) => {

  const { user } = useSelector((global) => global[userSliceName])

  const [bio, setBio] = useState(user.bio)
  const [image, setImage] = useState()
  const [previewImage, setPreviewImage] = useState()
  const dispatcher = useDispatch()

  console.log(image)

  const handleEditProfile = (() => {

    sendRequest(requestMethods.POST, "/update-user", {
      profile_image: image,
      bio: bio,
    }).then((response) => {
      if(response.status === 200){
        const edit = updateUserInfo({
          profile_image: response.data.profile_image,
          bio: response.data.bio
        })
        dispatcher(edit)
        toast.success('profile updated')
      }
    }).catch((error) => {
      toast.error("Something went wrong")
      console.error(error)
    })
    setIsOpen(false)

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
    <div className={`flex column center edit-container ${isOpen ? "" : "hidden"}`}>
      <div className='flex column edit-wrapper'>
        <input type="file" onChange={(e) => handleImageChange(e)}/>
        {previewImage && <img src={previewImage} alt="post_image" accept="image/"/>}
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
          setBio(user.bio)
          setPreviewImage()
        }}
        />
      </div>
      </div>
      
    </div>
  )
}

export default EditProfile