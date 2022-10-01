import { configureStore } from "@reduxjs/toolkit";
import uiSlice from "./ui-slice";


const ReduxStore = configureStore({
  reducer: {
    ui: uiSlice.reducer
  }
})


export default ReduxStore