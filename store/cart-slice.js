import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
    totalQuantity: 0,
    totalProduct: 0,
    totalAmount: 0,
    changed: false
  },
  reducers: {
    getCartData(state, action) {
      state.items = action.payload
    },
    addCartItem(state, action) {
      const newItem = action.payload
      const existingItem = state.items.find(itemCart => newItem._id === itemCart.id)

      state.changed = true
      if (!existingItem) {
        state.totalProduct++
        state.items.push({
          id: newItem._id,
          name: newItem.name,
          price: newItem.price,
          quantity: newItem.quantity,
          totalPrice: newItem.price * newItem.quantity,
        })
        state.totalQuantity = state.totalQuantity + newItem.quantity
        state.totalAmount = state.totalAmount + (newItem.price * newItem.quantity)
      }
      else {
        existingItem.quantity++
        existingItem.totalPrice = existingItem.totalPrice + (newItem.price * newItem.quantity)
        state.totalQuantity = state.totalQuantity + newItem.quantity
        state.totalAmount = state.totalAmount + existingItem.totalPrice
      }
    },
    removeItemFromCart(state, action) { }
  }
})

export const addItemToCart = (product) => async (dispatch, getState) => {
  // ? API Call for product by id
  // const { data } = await axios.get(`api/products/${id}`)

  // * data is the newItem send to the Reducer
  // * qty need to be included in the newItem Object
  dispatch(cartActions.addCartItem(product))

}

export const cartActions = cartSlice.actions

export default cartSlice