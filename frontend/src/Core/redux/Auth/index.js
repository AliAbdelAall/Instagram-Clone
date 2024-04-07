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
      state.isLogin = true
    },

    switchToSignup: (state, action) => {
      state.isLogin = false
    },

    updateIdentifier: (state, action) => {
      state.identifier = action.payload
    },
    updateEmail: (state, action) => {
      state.email = action.payload
    },

    updateUsername: (state, action) => {
      state.username = action.payload
    },

    updateFullName: (state, action) => {
      state.fullName = action.payload
    },

    updatePassword: (state, action) => {
      state.password = action.payload
    },
  }
})

export const {
  switchToLogin,
  switchToSignup,
  updateIdentifier,
  updateEmail,
  updateUsername,
  updateFullName,
  updatePassword
} = registrationSlice.actions

export const registrationSliceName = registrationSlice.name

export default registrationSlice.reducer