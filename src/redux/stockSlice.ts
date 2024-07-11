import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { Data } from '../dataType/stockType';

interface UserState {
  data: Data ;
  loading: boolean;
  error: string | null;
  firstLoading:boolean;
}

const initialState: UserState = {
  data: {
    userHolding: []
  },
  loading: false,
  error: null,
  firstLoading:false
};

export const fetchUser = createAsyncThunk('user/fetchUser', async () => {
  const response = await axios.get(`https://35dee773a9ec441e9f38d5fc249406ce.api.mockbin.io/`);

  return response?.data ?? {};
});

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.loading = false;
        state.firstLoading = true;
        state.data = action.payload?.data ?? {};
      })
      .addCase(fetchUser.rejected, (state, action) => {
        state.loading = false;
        state.firstLoading = true;
        state.error = action.error.message || 'Something went wrong';
      });
  },
});

export default userSlice.reducer;
