import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

export const CART_STORAGE_KEY = 'kartItems'

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
      totalPrice: 10
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
    }
  ],
  newItems: [],
  totalQuantity: 8,
  totalProduct: 3,
  totalAmount: 70,
  changed: true
}

const originalStates = {
  items: [],
  newItems: [],
  totalQuantity: 0,
  totalProduct: 0,
  totalAmount: 0,
  changed: false
}

const cartSlice = createSlice({
  name: 'cart',
  // initialState: originalStates,
  initialState: dummyStates,
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
    changeQuantity(state, action) {
      // ? newquanity and id as payload
      const info = action.payload
      const itemList = state.items
      // * Item will bew always existingItem
      const selectedIndex = state.items.findIndex(item => info.id === item.id)
      const currentItem = state.items[selectedIndex]

      const updateTheItem = { ...currentItem, quantity: info.count }
      itemList.splice(selectedIndex, 1, updateTheItem)
    },
    increaseQty: (state, action) => {
      const info = action.payload
      const itemList = state.items

      const selectedIndex = itemList.findIndex(item => info.id === item.id)
      const selectedItem = state.items[selectedIndex]
      // update selectedItem details
      const newItemDetails = {
        ...selectedItem,
        quantity: selectedItem.quantity + 1,
        totalPrice: selectedItem.price * (selectedItem.quantity + 1)
      }
      state.totalQuantity++
      state.totalAmount = state.totalAmount + selectedItem.price
      // * Replace oldDetails with newDetails
      itemList.splice(selectedIndex, 1, newItemDetails)
    },
    decreaseQty(state, action) {
      const info = action.payload
      const itemList = state.items

      const selectedIndex = itemList.findIndex(item => info.id === item.id)
      const selectedItem = state.items[selectedIndex]
      // update selectedItem details
      const newItemDetails = {
        ...selectedItem,
        quantity: selectedItem.quantity - 1,
        totalPrice: selectedItem.price * (selectedItem.quantity - 1)
      }
      state.totalQuantity--
      state.totalAmount = state.totalAmount - selectedItem.price
      itemList.splice(selectedIndex, 1, newItemDetails)
      state.items = itemList
    },
    // from reference
    newAddToCart: (state, action) => {
      const newItem = action.payload
      const existItem = state.newItems.find(
        (item) => item._id === newItem._id
      );
      const cartItems = existItem
        ? state.newItems.map((item) =>
          item._id === existItem._id ? newItem : item
        )
        : [...state.newItems, newItem];
      Cookies.set(CART_STORAGE_KEY, JSON.stringify(cartItems));
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cartItems))
      return { ...state, newItems: cartItems };
    },
    removeItemFromCart(state, action) { }
  }
})

export const addItemToCart = (product) => async (dispatch, getState) => {
  // ? API Call for product by id
  // const { data } = await axios.get(`api/products/${id}`)

  //  data is the newItem send to the Reducer
  //  qty need to be included in the newItem Object
  dispatch(cartActions.addCartItem(product))
  dispatch(cartActions.newAddToCart(product))

}

export const editQuantity = (info) => (dispatch) => {
  dispatch(cartActions.changeQuantity(info))
}

export const plusOne = (info) => (dispatch) => {
  dispatch(cartActions.increaseQty(info))
}

export const decreaseOne = (info) => (dispatch) => {
  dispatch(cartActions.decreaseQty(info))
}

export const cartActions = cartSlice.actions

export default cartSlice