import { createSlice } from "@reduxjs/toolkit"

const userSlice = createSlice({
  name: 'user',
  initialState: {
    userInfo: typeof window !== "undefined" && localStorage.getItem("online-user")
      ? JSON.parse(localStorage.getItem("online-user"))
      : []
  },
  reducers: {
    userLogin: (state, action) => {
      state.userInfo = action.payload
    },
    userLogout: (state, action) => {
      state.userInfo = []
    }
  }
})

export const userActions = userSlice.actions

export default userSlice