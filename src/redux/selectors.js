import { createSelector } from "@reduxjs/toolkit";

export const selectContacts = (state) => state.contactsData.items;
export const selectIsLoading = (state) => state.contactsData.loading;
export const selectError = (state) => state.contactsData.error;
export const selectFilter = (state) => state.filtersData.name;

export const selectFilteredContacts = createSelector(
    [selectContacts, selectFilter], 
    (contacts, filter) => 
        contacts.filter(contact => 
            contact.name.toLowerCase().includes(filter.toLowerCase()))
)