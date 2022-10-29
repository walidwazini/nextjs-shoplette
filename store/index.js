import { configureStore } from "@reduxjs/toolkit";

import cartSlice from "./cart-slice";
import productSlice from "./product-slice";
import uiSlice from "./ui-slice";
import userSlice from "./user-slice";

const ReduxStore = configureStore({
  reducer: {
    ui: uiSlice.reducer,
    product: productSlice.reducer,
    cart: cartSlice.reducer,
    user: userSlice.reducer
  }
})


export default ReduxStore