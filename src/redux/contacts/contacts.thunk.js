import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const contactsService = axios.create({
  baseURL: 'https://connections-api.herokuapp.com/contacts/',

});

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const { data } = await contactsService.get();
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (contact, thunkAPI) => {
    try {
      const { data } = await contactsService.post('', contact);
      return data;
    } catch (e) { 
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
    'contacts/deleteContact',
    async (id, { rejectWithValue, dispatch }) => {
      try {
        const {data} = await contactsService.delete(id);
        return data;
      } catch (e) { 
        return rejectWithValue(e.message);
      }
    }
  );
