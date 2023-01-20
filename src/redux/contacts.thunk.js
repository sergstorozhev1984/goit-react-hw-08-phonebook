import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
// import { getContactsAll } from "services/contacts.service";


const contactsAPI = axios.create({
    baseURL: 'https://63cb22a54f53a0042030dcfe.mockapi.io/contacts/',
  });

 export const fetchContacts = createAsyncThunk('contacts/fetchAll', async (_, thunkAPI) => {
    try {
        const {data} = await contactsAPI.get();
        console.log(data);
        return data;
        
    } catch (e) {
        return thunkAPI.rejectWithValue(e.message)
    }
    
 })