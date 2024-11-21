import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { login, logout, refresh, register } from "./operations";

const INITIAL_STATE = {
  user : null,
  loading: false,
  error: null,

  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState: INITIAL_STATE,
 extraReducers: (builder) => {
    builder
      .addMatcher(
        isAnyOf(register.pending, login.pending, logout.pending, refresh.pending),
        (state) => {
          state.loading = true;
          state.error = null;
        }
      )
      .addMatcher(
        isAnyOf(register.rejected, login.rejected, logout.rejected, refresh.rejected),
        (state, action) => {
          state.loading = false;
          state.isRefreshing = false;
          state.error = action.payload;
        }
      )
      .addMatcher(
        isAnyOf(register.fulfilled, login.fulfilled),
        (state, action) => {
          state.loading = false;
          state.error = null;
          state.user = action.payload.user;
          state.token = action.payload.token;
          state.isLoggedIn = true;
        }
      )
      .addMatcher(
        isAnyOf(refresh.fulfilled),
        (state, action) => {
          state.isRefreshing = false;
          state.error = null;
          state.user = action.payload;
          state.isLoggedIn = true;
        }
      )
      .addMatcher(
        isAnyOf(logout.fulfilled),
        () => INITIAL_STATE
      );
      
      
 }
});

export const authReducer = authSlice.reducer;