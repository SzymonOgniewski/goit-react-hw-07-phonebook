import { getAllContacts, addContact, deleteContact } from 'components/api/api';
import { createSlice } from '@reduxjs/toolkit';
const handlePendingState = (state, action) => {
  state.isPending = true;
};
const handleErrorMessage = (state, action) => {
  state.errorMessage = action.payload;
};
const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [],
    isPending: false,
    errorMessage: null,
  },
  extraReducers: {
    [getAllContacts.pending]: handlePendingState,
    [getAllContacts.fulfilled]: (state, action) => {
      state.errorMessage = null;
      state.isPending = false;
      state.contacts = action.payload;
    },
    [getAllContacts.rejected]: handleErrorMessage,
    [addContact.pending]: handlePendingState,
    [addContact.fulfilled]: (state, action) => {
      state.isPending = false;
      state.errorMessage = null;
      state.contacts.push(action.payload);
    },
    [addContact.rejected]: handleErrorMessage,
    [deleteContact.pending]: handlePendingState,
    [deleteContact.fulfilled]: (state, action) => {
      state.isPending = false;
      state.errorMessage = null;
      const index = state.contacts.findIndex(c => c.id === action.payload);
      state.contacts.splice(index, 1);
    },
    [deleteContact.rejected]: handleErrorMessage,
  },
});

export const contactReducer = contactsSlice.reducer;
