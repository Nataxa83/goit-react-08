import { createSelector } from "@reduxjs/toolkit";
import { selectContacts } from "../contacts/selectors";

export const selectFilter = (state) => state.filtersData.name;

export const selectFilteredContacts = createSelector(
    [selectContacts, selectFilter], 
    (contacts, filter) => 
        contacts.filter(contact => 
            contact.name.toLowerCase().includes(filter.toLowerCase()))
)