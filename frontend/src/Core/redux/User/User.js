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
    posts_count: 0
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
    }
  }
})

export const { setUserInfo } = userSlice.actions

export const userSliceName = userSlice.name

export default userSlice.reducer