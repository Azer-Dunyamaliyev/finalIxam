import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "./reducers/productsSlice";
import adminSlice from "./reducers/adminSlice";
import basketSlice from "./reducers/basketSlice";

export const store = configureStore({
    reducer:{
        products: productsSlice,
        admin: adminSlice,
        basket: basketSlice
    }
})