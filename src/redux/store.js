import {
  configureStore,
  getDefaultMiddleware,
  combineReducers,
} from '@reduxjs/toolkit';

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web

import contactReducer from './contacts/contacts-reducer';
import filterReducer from './filter/filter-reducer';
import { loginName, loginNumber } from './contacts/contacts-reducer';

const contactsPersistConfig = {
  key: 'contacts',
  storage,
};

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
];

const rootReducer = combineReducers({
  items: contactReducer,
  filter: filterReducer,
  loginName: loginName,
  loginNumber: loginNumber,
});

export const store = configureStore({
  reducer: {
    contacts: persistReducer(contactsPersistConfig, rootReducer),
  },
  middleware,
  devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store); // wrapper for store to update the localStorage
