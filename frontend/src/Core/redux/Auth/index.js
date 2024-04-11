import { createSlice } from "@reduxjs/toolkit"

const initState = {
  identifier: "",
  email: "",
  username: "",
  fullName: "",
  password: "",
  isLogin: true,
  error: false,
  errorMessage: ""
}

export const registrationSlice = createSlice({
  initialState: initState,
  name: "registrationSlice",
  reducers: {
    switchToLogin: (state, action) => {
      Object.assign(state, initState)
    },

    switchToSignup: (state, action) => {
      Object.assign(state, initState)
      state.isLogin = false
    },

    handleInputChange: (state, action) => {
      const { key, value } = action.payload
      state[key] = value
      state.error = false
      state.errorMessage = ""
    },

    setError: (state, action) => {
      state.error = true
      state.errorMessage = action.payload
    },

    resetError: (state, action) => {
      state.error = false
      state.errorMessage = ""
    }
  }
})

export const {
  switchToLogin,
  switchToSignup,
  handleInputChange,
  setError,
  resetError
} = registrationSlice.actions

export const registrationSliceName = registrationSlice.name

export default registrationSlice.reducer