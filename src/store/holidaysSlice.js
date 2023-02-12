import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { URI_API } from '../const/const.js';

export const fetchHolidays = createAsyncThunk(
  'holidays/fetchHolidays',
  async () => {
    const res = await fetch(URI_API);
    const data = await res.json();
    return data;
  }
)

export const holidaysSlice = createSlice({
  name: 'holidays',
  initialState: {
    holidays: {},
    holiday: '',
    error: '',
    loading: '',
  },
  reducers: {
    setHoliday(state, action) {
      state.holiday = action.payload;
    }
  },
  extraReducers: {
    [fetchHolidays.pending]: (state) => {
      state.loading = 'loading';
    },
    [fetchHolidays.fulfilled]: (state, action) => {
      state.loading = 'success';
      state.holidays = action.payload;
    },
    [fetchHolidays.rejected]: (state) => {
      state.loading = 'failed';
      // state.error = action.payload;
      state.holidays = {};
    }
  }
});

export const { setHoliday } = holidaysSlice.actions;

export default holidaysSlice.reducer;
