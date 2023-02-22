import { createAsyncThunk } from '@reduxjs/toolkit';
import { privateApi, publicApi, token } from '../../http/http';
import { selectLoginToken } from './auth.selectors';

export const authLogin = createAsyncThunk(
  'login',
  async (values, { rejectWithValue }) => {
    try {
      const { data } = await publicApi.post('/users/login', values);
      token.set(data.token);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const authLogout = createAsyncThunk(
  'logout',
  async (_, { getState, rejectWithValue }) => {
    const stateToken = selectLoginToken(getState());

    if (!stateToken) {
      return rejectWithValue();
    }
    console.log('authLogout');
    try {
      token.set(stateToken.token);
      await privateApi.post('users/logout');
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
