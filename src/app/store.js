import { configureStore } from "@reduxjs/toolkit";
import CartReducer from "../app/features/cartSlice"

export const store = configureStore({
    reducer:{
        cart: CartReducer,
    }
})