import { configureStore } from "@reduxjs/toolkit";
import { productSlice } from "./productSlice";

export const meraStore = configureStore({
    reducer:productSlice.reducer
})