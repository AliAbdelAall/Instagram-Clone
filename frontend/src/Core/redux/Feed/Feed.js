import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  posts: [
    {
      id: 12,
      image: "123",
      caption: "sdfas",
      liked: false,
      comments: [],

    },
  ],
  loading: true
}

export const postsSlice = createSlice({
  initialState: initialState,
  name: "postsSlice",
  reducers: {
    setpostsState: (state, action) => {
      state.loading = false
      Object.assign(state.posts, action.payload)
    }
  }
})

export const { setpostsState } = postsSlice.actions

export const postsSliceName = postsSlice.name

export default postsSlice.reducer
