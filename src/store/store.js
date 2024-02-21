import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../redux/products/produtsSlice";

export const store = configureStore({
    reducer:{
        products: productReducer,
    }
})