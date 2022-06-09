import axios from 'axios';

import { createAsyncThunk } from '@reduxjs/toolkit';

const baseURL = 'https://629b0ea3656cea05fc32b859.mockapi.io';

//Receiving contacts from backend's object
export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async () => {
    const { data } = await axios.get(`${baseURL}/contacts`);
    return data;
  }
);

//Adding contact to backend's object
export const addContact = createAsyncThunk(
  'contacts/addContact',

  async contact => {
    const { data } = await axios.post(`${baseURL}/contacts`, contact);
    return data;
  }
);

//Removing contact form backend's object
export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',

  async contactId => {
    const {
      data: { id },
    } = await axios.delete(`${baseURL}/contacts/${contactId}`);
    return id;
  }
);

// import {
//   addContactsRequest,
//   addContactsSuccess,
//   addContactsError,
// } from './contacts-actions';

// export const addContact = data => dispatch => {
//   const contact = {
//     data,
//     completed: false,
//   };

//   dispatch(addContactsRequest());

//   axios
//     .post('/contacts', contact)
//     .then(({ data }) => dispatch(addContactsSuccess(data)))
//     .catch(error => dispatch(addContactsError(error)));
// };
