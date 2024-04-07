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
      const payload = action.payload
      console.log(payload)
      state.isLogin = true
    },

    switchToSignup: (state, action) => {
      const payload = action.payload
      console.log(payload)
      state.isLogin = false
    }
  }
})

export const { switchToLogin, switchToSignup } = registrationSlice.actions

export const registrationSliceName = registrationSlice.name

export default registrationSlice.reducer