import { createAsyncThunk } from '@reduxjs/toolkit';
// import axios from 'axios';
import { privateApi, token } from 'http/http';
import { selectLoginToken } from 'redux/auth/auth.selectors';

// axios.defaults.baseURL = 'https://63eccc4932a0811723a24485.mockapi.io';

export const getContactsFromStore = createAsyncThunk(
  'contacts/getContactsFromStore',
  async (_, { getState, rejectWithValue }) => {
    const stateToken = selectLoginToken(getState());

    if (!stateToken) {
      return rejectWithValue();
    }

    try {
      token.set(stateToken.token);
      const { data } = await privateApi.get('/contacts');
      return data;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error);
    }
  }
);

export const addContactToStore = createAsyncThunk(
  'contacts/addContactToStore',
  async ({ name, number }, { rejectWithValue }) => {
    try {
      const { data } = await privateApi.post('/contacts', {
        name,
        number,
      });

      return data;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error);
    }
  }
);

export const deleteContactFromStore = createAsyncThunk(
  'contacts/deleteContactFromStore',
  async (id, { rejectWithValue }) => {
    try {
      const { data } = await privateApi.delete(`/contacts/${id}`);
      return data.id;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error);
    }
  }
);

export const editContactFromStore = createAsyncThunk(
  'contacts/editContact',
  async ({ id, contact }, { rejectWithValue }) => {
    try {
      const { data } = await privateApi.patch(`/contacts/${id}`, contact);
      return data;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error);
    }
  }
);
