import { configureStore } from '@reduxjs/toolkit';
import reducerA from './sliceA';

export const store = configureStore({
  reducer: {
    compo: reducerA
  },
});