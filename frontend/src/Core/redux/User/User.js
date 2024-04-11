import { createSlice } from '@reduxjs/toolkit'

const initState = {
  user: {
    username: "",
    email: "",
    full_name: "",
    bio: "",
    profile_image: "",
    followers_count: 0,
    following_count: 0,
    posts_count: 0,
    posts: []
  },
  loading: true
}

export const userSlice = createSlice({
  initialState: initState,
  name: "userSlice",
  reducers: {
    setUserInfo: (state, action) => {
      return {
        ...state,
        user: action.payload,
        loading: false
      }
    },

    updateUserInfo: (state, action) => {
      return {
        ...state,
        user: { ...state.user, bio: action.payload.bio, profile_image: action.payload.profile_image }
      }
    },

    addUserPost: (state, action) => {
      return {
        ...state,
        user: {
          ...state.user,
          posts: [
            ...state.user.posts,
            {
              id: action.payload.id,
              post_image: action.payload.post_image
            }
          ]
        }
      }
    }
  }
})

export const { setUserInfo, updateUserInfo, addUserPost } = userSlice.actions

export const userSliceName = userSlice.name

export default userSlice.reducer