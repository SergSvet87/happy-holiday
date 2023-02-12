import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { URI_API } from '../const/const.js';

export const fetchImage = createAsyncThunk(
  'image/fetchImage',
  async (holiday) => {
    const res = await fetch(`${URI_API}image/${holiday}`);
    const data = await res.json();
    return data;
  }
)

export const imageSlice = createSlice({
  name: 'image',
  initialState: {
    urlImg: '',
    idImg: '',
    error: '',
    loading: '',
  },
  reducers: {},
  extraReducers: {
    [fetchImage.pending]: (state) => {
      state.loading = 'loading';
    },
    [fetchImage.fulfilled]: (state, action) => {
      state.loading = 'success';
      state.urlImg = action.payload.urlImg;
      state.idImg = action.payload.idImg;
    },
    [fetchImage.rejected]: (state) => {
      state.loading = 'failed';
      // state.error = action.payload;
      state.urlImg = '';
      state.idImg = '';
    }
  }
})

export default imageSlice.reducer;