import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { authInitState } from './auth.init-state';
import { authLogin, authLogout } from './auth.operations';

const authSlice = createSlice({
  name: 'auth',
  initialState: authInitState,
  extraReducers: builder =>
    builder
      .addCase(authLogin.pending, state => {
        state.isLoading = true;
      })
      .addCase(authLogin.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.data = payload;
      })
      .addCase(authLogin.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(authLogout.pending, state => {
        state.isLoading = true;
      })
      .addCase(authLogout.fulfilled, state => {
        state.isLoading = false;
        state.error = null;
        state.data = null;
      })
      .addCase(authLogout.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      }),
});

export const authReducer = persistReducer(
  { key: 'auth', storage, whitelist: ['data'] },
  authSlice.reducer
);
