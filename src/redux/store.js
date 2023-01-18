import { configureStore } from "@reduxjs/toolkit";
import { contactReducer } from "./contactsSlice";
import { filterReducer } from "./filterSlice";
// import { persistStore, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';



export const store = configureStore({
    reducer: {
        contacts: contactReducer,
        filtr: filterReducer,
    }
})