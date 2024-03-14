import { configureStore } from '@reduxjs/toolkit';
import productReducer from '../features/product-list/productSlice';
import authReucer from '../features/auth/authSlice'

export const store = configureStore({
  reducer: {
    product: productReducer,
    auth: authReucer,
  },
});
