import axios from 'axios';

export const publicApi = axios.create({
  baseURL: 'https://connections-api.herokuapp.com',
});

export const privateApi = axios.create({
  baseURL: 'https://connections-api.herokuapp.com',
});

export const setAuthHeader = token => {
  privateApi.defaults.headers.Authorization = `Bearer ${token}`;
};

export const clearAuthHeader = () => {
  privateApi.defaults.headers.Authorization = '';
};
