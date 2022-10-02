import { createSlice } from "@reduxjs/toolkit"
import client from "../utils/client"
import { getAllProducts } from "../utils/queries"

const productSlice = createSlice({
  name: 'product',
  initialState: {
    loading: false,
    errorMessage: '',
    items: []
  },
  reducers: {
    startFetch(state, action) {
      state.loading = true
      state.errorMessage = ''
    },
    save: (state, action) => {
      state.loading = false
      state.errorMessage = ''
      state.items = action.payload
    },
    fail: (state, action) => {
      state.loading = false,
        state.errorMessage = action.payload
    }
  }
})

const productActions = productSlice.actions

export const fetchAsyncProducts = () => async (dispatch) => {
  dispatch(productActions.startFetch())
  // API call
  try {
    const products = await client.fetch(getAllProducts())
    dispatch(productActions.save(products))
  } catch (err) {
    dispatch(productActions.fail(err.message))
  }

}

export default productSlice