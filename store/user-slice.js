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
    error: null,
  },
  reducers: {
    loginSuccess: (state, action) => {
      state.userInfo = action.payload
      state.error = null
      state.isAuthenticated = true
    },
    loginFail: (state, action) => {
      state.error = action.payload
      state.isAuthenticated = false
    },
    userLogout: (state, action) => {
      state.userInfo = []
      state.isAuthenticated = false
      state.error = null
    },
    newDefaultAddress: (state, action) => {
      state.userInfo.defaultAddress = action.payload
    }
  }
})

export const userActions = userSlice.actions

export const userSignIn = (input) => async (dispatch) => {
  try {
    const { data } = await axios.post("/api/users/login", {
      email: input.email,
      password: input.password,
    });
    dispatch(userActions.loginSuccess(data));
    localStorage.setItem("online-user", JSON.stringify(data));
  } catch (err) {
    console.log(err.response.data.message)
    dispatch(userActions.loginFail(err.response.data.message))
  }
}

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