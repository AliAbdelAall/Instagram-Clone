import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  posts: [],
  user: {},
  loading: true
}

export const postsSlice = createSlice({
  initialState: initialState,
  name: "postsSlice",
  reducers: {
    setpostsState: (state, action) => {
      return {
        ...state,
        posts: action.payload.posts,
        user: action.payload.user,
        loading: false
      }
    },

    toggleLiked: (state, action) => {
      console.log(action.payload)
      const postId = action.payload
      const post = state.posts.find((post) => post.id = postId)
      post.liked = !post.liked
    },

    addComment: (state, action) => {
      const { postId, comment } = action.payload
      const post = state.posts.find((post) => post.id = postId)
      post.comments.push(comment)
    }
  }
})

export const { setpostsState, toggleLiked } = postsSlice.actions

export const postsSliceName = postsSlice.name

export default postsSlice.reducer
