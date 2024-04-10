import React from 'react'

const Profile = () => {
  return (
    <div className='profile-container'>
      <div className='flex profile-wrapper'>
        <img src="#" alt="profile_image" />

        <div className='flex column'>

          <div>
            <p>username</p>
            <button>Edit profile</button>
            <button>Log out</button>
          </div>

          <div>
            <p>posts</p>
            <p>followers</p>
            <p>following</p>
          </div>

          <div>
            <p>Full Name</p>
            <p>Bio</p>
          </div>
        </div>
        <div>
          <p>POSTS</p>
          <p>Add post</p>
        </div>
      </div>
    </div>
  )
}

export default Profile