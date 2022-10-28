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
    },
    newDefaultAddress: (state, action) => {
      state.userInfo.defaultAddress = action.payload
    }
  }
})

export const setDefaultAddress = (details) => (dispatch, getState) => {
  dispatch(userActions.newDefaultAddress(details))
}

export const userActions = userSlice.actions

export default userSlice