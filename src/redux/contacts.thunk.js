import { createAsyncThunk } from "@reduxjs/toolkit";
import { getContactsAll } from "services/contacts.service";

 export const fetchContacts = createAsyncThunk('contacts/fetchAll', async (_, thunkAPI) => {
    try {
        const contacts = await getContactsAll.get();
        return contacts;
    } catch (error) {
        
    }
    
 })