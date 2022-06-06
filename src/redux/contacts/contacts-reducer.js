import { createReducer } from '@reduxjs/toolkit';

import {
  addContact,
  deleteContact,
  addName,
  addNumber,
} from './contacts-actions';

const items = createReducer([], {
  [addContact]: (state, { payload }) => [...state, payload],
  [deleteContact]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

export const loginName = createReducer('', {
  [addName]: (_, { payload }) => payload,
});

export const loginNumber = createReducer('', {
  [addNumber]: (_, { payload }) => payload,
});

export default items;
