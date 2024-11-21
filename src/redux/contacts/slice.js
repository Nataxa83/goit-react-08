import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { fetchContacts, addContact, deleteContact } from "./operations";
import { logout } from "../auth/operations";

const INITIAL_STATE = {
  items: [],
  loading: false,
  error: false,
};

export const contactsSlice = createSlice({   
  name: "contacts",
  initialState: INITIAL_STATE,

  extraReducers: (builder) => 
    builder

      .addMatcher(
        isAnyOf(fetchContacts.pending, addContact.pending, deleteContact.pending),
        (state) => {
          // state.loading = true;
          state.error = null;
        }
      )
      
      .addMatcher(
        isAnyOf(fetchContacts.fulfilled, addContact.fulfilled, deleteContact.fulfilled),
        (state, action) => {
          state.loading = false;
          
          if (action.type === fetchContacts.fulfilled.type) {
            state.items = action.payload;
          } else if (action.type === addContact.fulfilled.type) {
            state.items.push(action.payload);
          } else if (action.type === deleteContact.fulfilled.type) {
            state.items = state.items.filter(contact => contact.id !== action.payload.id);
          }
        }
      )

      .addMatcher(
        isAnyOf(fetchContacts.rejected, addContact.rejected, deleteContact.rejected),
        (state, action) => {
          state.error = action.error ? action.error.message : "An error occurred";
          // state.loading = false;
        }
      )
      .addMatcher(
        isAnyOf(logout.fulfilled),
        () => INITIAL_STATE
      )
});

export const contactsReducer = contactsSlice.reducer;



