import { createSlice } from "@reduxjs/toolkit";

const dummyStates = {
  items: [
    {
      id: "c4929a52-670c-426a-bb87-f40dac7e8d74",
      name: "Reeve Sky Blue Shirt",
      brand: "Odaman",
      slug: 'reeve-sky-blue-shirt',
      price: 10,
      quantity: 5,
      countInStock: 27,
      totalPrice: 10,
      isTicked: true,
    },
    {
      id: "1bcdd762-a321-4b4d-80dc-e606a779fc80",
      name: "Kiiki Cat T-shirt",
      brand: "Quever",
      slug: 'kiiki-cat-t-shirt',
      price: 50,
      quantity: 1,
      countInStock: 32,
      totalPrice: 50,
      isTicked: true,
    },
    {
      id: "b2f8b8e8-ef59-4140-bab6-f8bf40174dd7",
      name: "Polar White Sweater",
      brand: "Kovlar",
      slug: 'polar-white-sweater',
      price: 5,
      quantity: 2,
      countInStock: 32,
      totalPrice: 10,
      isTicked: false,
    }
  ],
  totalQuantity: 8,
  totalProduct: 3,
  totalAmount: 110,
  changed: true
}

const originalStates = {
  items: [],
  totalQuantity: 0,
  totalProduct: 0,
  totalAmount: 0,
  changed: false,
}

const cartSlice = createSlice({
  name: 'cart',
  initialState: originalStates,
  // initialState: dummyStates,
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
          brand: newItem.brand,
          price: newItem.price,
          quantity: newItem.quantity,
          image: newItem.image,
          countInStock: newItem.countInStock,
          totalPrice: newItem.price * newItem.quantity,
          isTicked: false
        })

        state.totalQuantity = state.totalQuantity + newItem.quantity
        state.totalAmount = state.totalAmount + (newItem.price * newItem.quantity)
      }
      else {
        existingItem.quantity++
        existingItem.totalPrice =
          existingItem.totalPrice + (newItem.price * newItem.quantity)
        state.totalQuantity = state.totalQuantity + newItem.quantity
        state.totalAmount = state.totalAmount + existingItem.totalPrice
      }
    },
    removeCartItem: (state, action) => {
      const cartItemId = action.payload
      const selectedItem = state.items.find(item => item.id === cartItemId)

      const newCartItems = state.items.filter(
        item => item.id !== cartItemId
      )
      return {
        ...state,
        items: newCartItems,
        totalProduct: state.totalProduct - 1,
        totalQuantity: state.totalQuantity - selectedItem.quantity,
        totalAmount: state.totalAmount - (selectedItem.price * selectedItem.quantity)
      }
    },
    tickItem: (state, action) => {
      const itemId = action.payload
      const itemList = state.items

      const selectedIndex = itemList.findIndex(item => itemId === item.id)
      const selectedItem = state.items[selectedIndex]

      const newItemDetails = {
        ...selectedItem,
        isTicked: true
      }
      itemList.splice(selectedIndex, 1, newItemDetails)

    },
    untickItem: (state, action) => {
      const itemId = action.payload
      const itemList = state.items

      const selectedIndex = itemList.findIndex(item => itemId === item.id)
      const selectedItem = state.items[selectedIndex]

      const newItemDetails = {
        ...selectedItem,
        isTicked: false
      }
      itemList.splice(selectedIndex, 1, newItemDetails)
    },
    increaseQty: (state, action) => {
      const info = action.payload
      const itemList = state.items

      const selectedIndex = itemList.findIndex(item => info.id === item.id)
      const selectedItem = state.items[selectedIndex]
      //  Update selectedItem details
      const newItemDetails = {
        ...selectedItem,
        quantity: selectedItem.quantity + 1,
        totalPrice: selectedItem.price * (selectedItem.quantity + 1)
      }

      state.totalQuantity++
      state.totalAmount = state.totalAmount + selectedItem.price
      //  Replace oldDetails with newDetails
      itemList.splice(selectedIndex, 1, newItemDetails)
    },
    decreaseQty: (state, action) => {
      const info = action.payload
      const itemList = state.items

      const selectedIndex = itemList.findIndex(item => info.id === item.id)
      const selectedItem = state.items[selectedIndex]

      const newItemDetails = {
        ...selectedItem,
        quantity: selectedItem.quantity - 1,
        totalPrice: selectedItem.price * (selectedItem.quantity - 1)
      }

      state.totalQuantity--
      state.totalAmount = state.totalAmount - selectedItem.price

      itemList.splice(selectedIndex, 1, newItemDetails)
    },
  }
})

export const addItemToCart = (product) => async (dispatch, getState) => {
  // ? API Call for product by id
  // const { data } = await axios.get(`api/products/${id}`)

  //  data is the newItem send to the Reducer
  //  qty need to be included in the newItem Object
  dispatch(cartActions.addCartItem(product))
}

export const removeItemFromCart = (itemId) => (dispatch) => {
  dispatch(cartActions.removeCartItem(itemId))
}

export const plusOne = (info) => (dispatch, getState) => {
  dispatch(cartActions.increaseQty(info))
}

export const minusOne = (info) => (dispatch) => {
  dispatch(cartActions.decreaseQty(info))
}

export const tickCartItem = (id) => (dispatch) => {
  // console.log(id)
  dispatch(cartActions.tickItem(id))
}

export const untickCartItem = (id) => (dispatch) => {
  // console.log(id)
  dispatch(cartActions.untickItem(id))
}

export const cartActions = cartSlice.actions

export default cartSlice