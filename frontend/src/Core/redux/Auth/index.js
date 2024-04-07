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

export const registration = createSlice({
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

      state.isLogin = true
    }
  }
})