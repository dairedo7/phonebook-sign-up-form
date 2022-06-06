import { createAction } from '@reduxjs/toolkit';

export const addContact = createAction('contacts/add');

export const deleteContact = createAction('contacts/delete');

export const addName = createAction('contacts/name');
export const addNumber = createAction('contacts/number');
