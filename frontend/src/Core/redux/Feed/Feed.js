import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  posts: [],
  loading: true
}

export const postsSlice = createSlice({
  initialState: initialState,
  name: "postsSlice",
  reducers: {
    setpostsState: (state, action) => {
      return {
        ...state,
        posts: action.payload,
        loading: false
      }
    },

    toggleLiked: (state, action) => {
      console.log(action.payload)
      const postId = action.payload
      const post = state.posts.find((post) => post.id === postId)
      post.liked = !post.liked
      if (post.liked) { post.likes += 1 } else { post.likes -= 1 }

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
