import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const authInstance = axios.create({
    baseURL: 'https://connections-api.goit.global/',
    // headers: {
    //     Authorization: `Bearer ${token}`
    // }
});

export const setHeaders = token => {
    authInstance.defaults.headers.common.Authorization = `Bearer ${token}`;
  };

export const clearHeaders = () => {
    authInstance.defaults.headers.common.Authorization = '';
};

export const register = createAsyncThunk(
    "auth/register",
    async (formData, thunkApi) => {
        // formData : {
        //     "name": "Adrian Cross",
        //     "email": "across@mail.com",
        //     "password": "examplepwd12345"
        //   }
          
      try {
        const {data} = await authInstance.post('/users/signup', formData);
        console.log(data);
        return data;
      } catch (error) {
        return thunkApi.rejectWithValue(error.message);
      }
    }
  );