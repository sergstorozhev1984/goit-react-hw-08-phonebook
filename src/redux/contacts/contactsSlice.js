import { createSlice } from '@reduxjs/toolkit';
import { addContact, deleteContact, fetchContacts } from './contacts.thunk';
import { toast } from 'react-toastify';

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

 export const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(fetchContacts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
        toast.error(`${state.error}`);
      })
      .addCase(addContact.pending, (state) => {
        state.isLoading = true;

      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items.push(action.payload);
        toast.success(`${action.payload.name} was successfully added to your contacts`)
      })
      .addCase(addContact.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
        toast.error(`${state.error}`);

      })
      .addCase(deleteContact.pending, state => {
        state.isLoading = true;
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
       /* const index = state.items.findIndex(
          contact => {
            const index = state.items.findIndex(task => task.id === action.payload.id);
            state.items.splice(index, 1);
            return state.items;
          }
        );
        state.items.splice(index, 1);*/
        state.items = state.items.filter(contact => contact.id !== action.payload.id)
        state.isLoading = false;
        state.error = null;
        console.log(action);
        toast.success(`${action.payload.name} was successfully deleted from your contacts`)
      })
      .addCase(deleteContact.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
        toast.error(`${state.error}`);
      });;
  },
});

export const contactsReducer = contactsSlice.reducer;
