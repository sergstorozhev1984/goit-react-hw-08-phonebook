import { createSelector } from "@reduxjs/toolkit";

export const selectToken = state => state.auth.token;
export const getIsLoggedIn = state => state.auth.isLoggedIn;
export const getUserEmail = state => state.auth.user.email;
export const getContacts = state => state.contacts.items;
export const getContactsFilter = state => state.filter;
export const getIsloading = state => state.contacts.isLoading;
export const getFilteredContacts = createSelector([getContacts, getContactsFilter], (contactsItems,filter) => {
    return contactsItems.filter(el => el.name.toLowerCase().includes(filter.toLowerCase()));
})

