import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { USERSTATUES, STATUSES, HTTP_STATUSES } from '../constants';
import authservice from '../appwrite/auth';
const initialState = {
  userdata: null,
  status: STATUSES.IDLE,
  error: null,
  userstatus: USERSTATUES.FALSE, //(active:true, inactive:false)
  islogedIN: USERSTATUES.FALSE, //(true, false)
};

export const authSlice = createSlice({
  name: 'userdetails',
  initialState,
  reducers: {
    login: (state, action) => {
      state.islogedIN = USERSTATUES.TRUE;
      state.userdata = action.payload;
    },
    logout: (state) => {
      state.islogedIN = USERSTATUES.FALSE;
      state.userdata = null;
    },
    setstatus: (state, action) => {
      state.userstatus = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCurrentUser.pending, (state) => {
        state.status = STATUSES.LOADING;
        state.islogedIN = USERSTATUES.FALSE;
        state.userdata = null;
        state.error = null;
      })
      .addCase(fetchCurrentUser.fulfilled, (state, action) => {
        state.status = STATUSES.SUCCESS;
        state.islogedIN = USERSTATUES.TRUE;
        state.userdata = action.payload;
        state.error = null;
      })
      .addCase(fetchCurrentUser.rejected, (state, action) => {
        state.status = STATUSES.ERROR;
        state.islogedIN = USERSTATUES.TRUE; //! set to false
        state.userdata = null;
        state.error = action.payload || 'Failed to fetch user';
      });
  },
});

export const fetchCurrentUser = createAsyncThunk('user/fetch', async (_, { rejectWithValue }) => {
  try {
    let response = await authservice.GetCurrentUser();
    console.log(response);
    const { msg, status, user } = response;

    if (status === HTTP_STATUSES.SUCCESS && user) {
      return user;
    } else {
      return rejectWithValue(msg);
    }
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
