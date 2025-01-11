import { configureStore } from '@reduxjs/toolkit';
import mineReducer from './mineSlice';

export const store = configureStore({
  reducer: {
    mine: mineReducer
  }
});