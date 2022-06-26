import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';

import { register, signIn, signOut, updateUser } from './auth-operations';

const initialState = {
  user: { name: '', email: '' },
  token: null,
  isLoggedIn: false,
  isLoading: false,
};

const user = createReducer(initialState, {
  [register.fulfilled]: (_, { payload }) => {
    console.log(payload);
    return payload.user;
  },
  [signIn.fulfilled]: (_, { payload }) => payload.token,
  [signOut.fulfilled]: () => initialState,
  [updateUser.fulfilled]: (_, { payload }) => payload,
});

const token = createReducer(null, {
  [register.fulfilled]: (_, { payload }) => {
    console.log(payload.token);
    return payload.token;
  },
  [signIn.fulfilled]: (_, { payload }) => payload.token,
  [signOut.fulfilled]: () => null,
});

const isLoggedIn = createReducer(false, {
  [register.fulfilled]: () => true,
  [signIn.fulfilled]: () => true,
  [signOut.fulfilled]: () => false,
  [updateUser.fulfilled]: () => true,
});

const isLoading = createReducer(false, {
  [updateUser.pending]: () => true,
  [updateUser.fulfilled]: () => false,
  [updateUser.rejected]: () => false,
});

export const authReducer = combineReducers({
  user,
  token,
  isLoggedIn,
  isLoading,
});
