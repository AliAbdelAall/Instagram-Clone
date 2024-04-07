import { createSlice } from "@reduxjs/toolkit"

const initState = {
  identifier: "",
  email: "",
  username: "",
  fullName: "",
  password: "",
  isLogin: true,
  error: false,
  errorMessge: ""
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
      state.errorMessge = ""
    },

    updateEmail: (state, action) => {
      state.email = action.payload
      state.error = false
      state.errorMessge = ""
    },

    updateUsername: (state, action) => {
      state.username = action.payload
      state.error = false
      state.errorMessge = ""
    },

    updateFullName: (state, action) => {
      state.fullName = action.payload
      state.error = false
      state.errorMessge = ""
    },

    updatePassword: (state, action) => {
      state.password = action.payload
      state.error = false
      state.errorMessge = ""
    },

    setError: (state, action) => {
      state.error = true
      state.errorMessge = action.payload
    },

    resetError: (state, action) => {
      state.error = false
      state.errorMessge = ""
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