import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
axios.defaults.baseURL = 'https://640f79ffcde47f68db4ba226.mockapi.io';
export const getContactsAction = createAsyncThunk(
  'contacts/getAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/contacts');
      return response;
    } catch (error) {
      thunkAPI.rejectWithValue(e.message);
    }
  }
);
