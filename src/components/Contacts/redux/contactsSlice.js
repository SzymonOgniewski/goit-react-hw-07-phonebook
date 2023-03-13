import { nanoid } from 'nanoid';
import { createSlice } from '@reduxjs/toolkit';

const contactsInitState =
  JSON.parse(localStorage.getItem('savedContacts')) || [];

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitState,
  reducers: {
    addContactAction: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(name, number) {
        return {
          payload: { id: nanoid(), name, number },
        };
      },
    },
    deleteContactAction(state, action) {
      const id = action.payload;
      return state.filter(contact => contact.id !== id);
    },
  },
});

export const { addContactAction, deleteContactAction } = contactsSlice.actions;
export const contactReducer = contactsSlice.reducer;
