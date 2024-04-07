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

    updateIdentifier: (state, action) => {
      state.identifier = action.payload
      state.error = false
      state.errorMessage = ""
    },

    updateEmail: (state, action) => {
      state.email = action.payload
      state.error = false
      state.errorMessage = ""
    },

    updateUsername: (state, action) => {
      state.username = action.payload
      state.error = false
      state.errorMessage = ""
    },

    updateFullName: (state, action) => {
      state.fullName = action.payload
      state.error = false
      state.errorMessage = ""
    },

    updatePassword: (state, action) => {
      state.password = action.payload
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
  updateIdentifier,
  updateEmail,
  updateUsername,
  updateFullName,
  updatePassword,
  setError,
  resetError
} = registrationSlice.actions

export const registrationSliceName = registrationSlice.name

export default registrationSlice.reducer