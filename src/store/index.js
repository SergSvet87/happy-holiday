import { configureStore } from '@reduxjs/toolkit';

import holidaysReducer from './holidaysSlice.js';
import textReducer from './textSlice.js';
import imageReducer from './imageSlice.js';


export const store = configureStore({
  reducer: {
    holidays: holidaysReducer,
    text: textReducer,
    image: imageReducer,
  }
})