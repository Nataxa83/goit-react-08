import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  user : null,
  loading: false,
  error: null,

  token: null,
  isLoggedIn: false,
  isRefreshing: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState: INITIAL_STATE,
  reducers: {
  
  },
});

export const authReducer = authSlice.reducer;