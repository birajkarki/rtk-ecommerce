// store.js
import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./features/productSlice";
import cartReducer from "./features/cartSlice";
import { setupListeners } from "@reduxjs/toolkit/query/react";
import { productApi } from "@/services/ProductApi";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    product: productReducer,
    [productApi.reducerPath]: productApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productApi.middleware),
});

export default store;
setupListeners(store.dispatch);
