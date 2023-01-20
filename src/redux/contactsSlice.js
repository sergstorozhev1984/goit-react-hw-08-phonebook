import { createSlice, nanoid } from '@reduxjs/toolkit';
import { fetchContacts } from './contacts.thunk';

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact: {
      reducer(state, action) {
        state.items.push(action.payload);
      },
      prepare({ name, number }) {
        return {
          payload: {
            name,
            id: nanoid(),
            number,
          },
        };
      },
    },
    deleteContact: (state, action) => {
      state.items = state.contacts.filter(
        contact => contact.id !== action.payload
      );
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = action.payload;
      })
      // .addCase(fetchContacts.rejected, (state, action) => {
      //   state.isLoading = false;
      //   state.error = action.payload;
      // });
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
