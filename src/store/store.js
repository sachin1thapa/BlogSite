import { configureStore } from '@reduxjs/toolkit';
import authSlice from '../features/authSlice';

const store = configureStore({
  reducer: {
    userdetais: authSlice,
  },
});

export default store;
