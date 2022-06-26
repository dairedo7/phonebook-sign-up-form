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

import { items, loading } from './contacts/contacts-reducer';
import filterReducer from './filter/filter-reducer';
import authSlice from './auth/auth-slice'; //Reducer for authorisation
// import { authReducer } from './auth/auth-reducer';

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
];

const contactsPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

// const rootReducer = combineReducers({
//   items,
//   filter: filterReducer,
//   loading,
// });

export const store = configureStore({
  reducer: {
    auth: persistReducer(contactsPersistConfig, authSlice),
    contacts: combineReducers({
      items,
      filter: filterReducer,
      loading,
    }),
  },
  middleware,
  devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store); // wrapper for store to update the localStorage

// fetch.then(x => dispatch(action(x))).catch(y => dispatch(action(y)));
