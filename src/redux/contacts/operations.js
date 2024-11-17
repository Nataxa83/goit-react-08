import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// axios.defaults.baseURL = "https://connections-api.goit.global/";

export const fetchContacts = createAsyncThunk(
    "contacts/fetchAll",
    async (_, thunkApi) => {
                // dispatch({ type: "contacts/fetchAll/pending" })
        try {
            // throw new Error("Error");
            const response = await axios.get("/contacts");
            return response.data;
                // dispatch({ type: "contacts/fetchAll/fulfilled", payload: response.data })
        } catch (error) {
                // return error.message;
                // dispatch({ type: "contacts/fetchAll/rejected", payload: error.message })
            return thunkApi.rejectWithValue(error.message);
        } 
}
);

export const addContact = createAsyncThunk(
    "contacts/addContact",
    async (newContact, thunkApi) => {
      try {
        const response = await axios.post('/contacts', newContact);
        return response.data;
      } catch (error) {
        return thunkApi.rejectWithValue(error.message);
      }
    }
  );

  export const deleteContact = createAsyncThunk(
    "contacts/deleteContact",
    async (id, thunkApi) => {
      try {
        const response = await axios.delete(`/contacts/${id}`);
        return response.data;
      } catch (error) {
        return thunkApi.rejectWithValue(error.message);
      }
    }
  );