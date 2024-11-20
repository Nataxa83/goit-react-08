import { createAsyncThunk } from "@reduxjs/toolkit";
import { authInstance } from "../auth/operations";


export const fetchContacts = createAsyncThunk(
    "contacts/fetchAll",
    async (_, thunkApi) => {
        try {
            // throw new Error("Error");
            const {data} = await authInstance.get("/contacts");
            console.log(data);
            return data;
        } catch (error) {
            return thunkApi.rejectWithValue(error.message);
        } 
}
);

export const addContact = createAsyncThunk(
    "contacts/addContact",
    async (newContact, thunkApi) => {
      try {
        const {data} = await authInstance.post('/contacts', newContact);
        return data;
      } catch (error) {
        return thunkApi.rejectWithValue(error.message);
      }
    }
  );

  export const deleteContact = createAsyncThunk(
    "contacts/deleteContact",
    async (contactId, thunkApi) => {
      try {
        const {data} = await authInstance.delete(`/contacts/${contactId}`);
        return data;
      } catch (error) {
        return thunkApi.rejectWithValue(error.message);
      }
    }
  );