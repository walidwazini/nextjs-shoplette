import { combineReducers } from 'redux'
import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

import cartSlice from "./cart-slice";
import productSlice from "./product-slice";
import uiSlice from "./ui-slice";

const allReducers = combineReducers({
  ui: uiSlice.reducer,
  product: productSlice.reducer,
  cart: cartSlice.reducer,
})

const persistedReducer = persistReducer({
  key: 'root',
  storage,
}, allReducers)

const ReduxStore = configureStore({
  reducer: persistedReducer,
})

export default ReduxStore




// const ReduxStore = configureStore({
//   reducer: {
//     ui: uiSlice.reducer,
//     product: productSlice.reducer,
//     cart: cartSlice.reducer,
//   }
// })

