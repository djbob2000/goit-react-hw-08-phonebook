// import { contactsInitialState } from './contacts/contacts.initialState';
import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './contacts/contacts.slice';
import { filterReducer } from './filter/filter.slice';
import { authReducer } from './auth/auth.slice';
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

export const store = configureStore({
  // preloadedState: contactsInitialState,
  devTools: true,

  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
    auth: authReducer,
  },

  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
