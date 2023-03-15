import { createAsyncThunk } from '@reduxjs/toolkit';
import { getAllContacts } from 'components/api/api';
import { addContact } from 'components/api/api';
import { deleteContact } from 'components/api/api';
export const getAllContactsThunk = createAsyncThunk(
  'contacts/getAllContacts',
  async (_, { rejectWithValue }) => {
    try {
      const response = await getAllContacts();
      return response;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const addContactThunk = createAsyncThunk(
  'contacts/addContact',
  async ({ name, number }, { rejectWithValue }) => {
    try {
      const response = await addContact(name, number);
      return response;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);

export const deleteContactThunk = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, { rejectWithValue }) => {
    try {
      const response = deleteContact(contactId);
      return response;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);
