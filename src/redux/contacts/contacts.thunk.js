import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { userPrivateApi } from 'services/userService';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const { data } = await userPrivateApi.get('/contacts');
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
      const { data } = await userPrivateApi.post('/contacts', contact);
      return data;
    } catch (e) { 
      toast.error(`${e.message}`);
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
    'contacts/deleteContact',
    async (id, { rejectWithValue}) => {
      try {
        const {data} = await userPrivateApi.delete(`/contacts/${id}`);
        console.log(id);
        console.log(data);
        return data;
      } catch (e) { 
        toast.error(`${e.message}`);
        return rejectWithValue(e.message);
      }
    }
  );
