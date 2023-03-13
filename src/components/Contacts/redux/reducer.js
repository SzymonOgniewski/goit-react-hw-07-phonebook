import { createReducer } from '@reduxjs/toolkit';
import {
  addContactAction,
  deleteContactAction,
  changeFilterAction,
} from './actions';

const contactsInitState =
  JSON.parse(localStorage.getItem('savedContacts')) || [];

export const contactsReducer = createReducer(contactsInitState, {
  [addContactAction]: (state, action) => {
    return [...state, action.payload];
  },
  [deleteContactAction]: (state, action) => {
    const { id } = action.payload;
    return state.filter(contact => contact.id !== id);
  },
});

const filterInitState = '';

export const filterReducer = createReducer(filterInitState, {
  [changeFilterAction]: (state, action) => {
    const { filter } = action.payload;
    return (state = filter);
  },
});
