import { createSlice } from "@reduxjs/toolkit"
import axios from "axios"

import client from "../utils/client"
import { getUserById } from "../utils/queries"

const userSlice = createSlice({
  name: 'user',
  initialState: {
    userInfo: typeof window !== "undefined" && localStorage.getItem("online-user")
      ? JSON.parse(localStorage.getItem("online-user"))
      : [],
    isAuthenticated: false,
  },
  reducers: {
    userLogin: (state, action) => {
      state.userInfo = action.payload
      state.isAuthenticated = true
    },
    userLogout: (state, action) => {
      state.userInfo = []
      state.isAuthenticated = false
    },
    newDefaultAddress: (state, action) => {
      state.userInfo.defaultAddress = action.payload
    }
  }
})

export const userActions = userSlice.actions


export const setDefaultAddress = (details) => async (dispatch, getState) => {

  const { addressKey, id: userId } = details

  await axios.put(`http://localhost:3000/api/users/${userId}`, {
    _key: addressKey,
  });

  const { addresses } = await client.fetch(getUserById(userId));
  const updatedDefAddress = addresses.filter((a) => a._key === addressKey)[0];

  dispatch(userActions.newDefaultAddress(updatedDefAddress))
}


export default userSlice