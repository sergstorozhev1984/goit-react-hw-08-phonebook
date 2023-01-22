import { createSelector } from "@reduxjs/toolkit";


export const getContacts = state => state.contacts.items;
export const getContactsFilter = state => state.filter;
export const getIsloading = state => state.contacts.isLoading;
export const getFilteredContacts = createSelector([getContacts, getContactsFilter], (contactsItems,filter) => {
    return contactsItems.filter(el => el.name.toLowerCase().includes(filter.toLowerCase()));
})

