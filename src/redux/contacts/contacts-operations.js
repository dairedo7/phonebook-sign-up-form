import axios from 'axios';

import { createAsyncThunk } from '@reduxjs/toolkit';

//Receiving contacts from backend's object
export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async () => {
    const { data } = await axios.get(`/contacts`);
    return data;
  }
);

//Adding contact to backend's object
export const addContact = createAsyncThunk(
  'contacts/addContact',

  async contact => {
    const { data } = await axios.post(`/contacts`, contact);

    return data;
  }
);

//Removing contact form backend's object
export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',

  async contactId => {
    const {
      data: { id },
    } = await axios.delete(`/contacts/${contactId}`);

    return id;
  }
);
