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
        // {
      //     "user": {
      //         "name": "John Taco",
      //         "email": "1231241sadwda213wd@gmail.com"
      //     },
      //     "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzJiYmYxOWM0OTVlZDZlMjVmMzhkYzUiLCJpYXQiOjE3MzA5MjAyMTd9.YLCxvnYkkYJDZzyDlOTJs71Ulev9u4OAEVP7a3OVb8c"
      // }
        setHeaders(data.token);
        console.log(data);
        return data;
      } catch (error) {
        return thunkApi.rejectWithValue(error.message);
      }
    })

    export const login = createAsyncThunk(
      "auth/login",
      async (formData, thunkApi) => {
          // formData : {
          //     "name": "Adrian Cross",
          //     "email": "across@mail.com",
          //   }
            
        try {
          const {data} = await authInstance.post('/users/login', formData);
          // {
        //     "user": {
        //         "name": "John Taco",
        //         "email": "1231241sadwda213wd@gmail.com"
        //     },
        //     "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzJiYmYxOWM0OTVlZDZlMjVmMzhkYzUiLCJpYXQiOjE3MzA5MjAyMTd9.YLCxvnYkkYJDZzyDlOTJs71Ulev9u4OAEVP7a3OVb8c"
        // }
          setHeaders(data.token);
          console.log(data);
          return data;
        } catch (error) {
          return thunkApi.rejectWithValue(error.message);
        }
      })
      
      export const refresh = createAsyncThunk(
        "auth/refresh",
        async (_, thunkApi) => {
          const state = thunkApi.getState();
          const savedToken = state.authData.token;
         
          if (!savedToken) {
            return thunkApi.rejectWithValue("No token found to refresh user data");
          }
          try {
              setHeaders(savedToken);
            const {data} = await authInstance.get('/users/current');
            console.log(data);
            return data;
          } catch (error) {
            return thunkApi.rejectWithValue(error.message);
          }
        })
        
        export const logout = createAsyncThunk(
          "auth/logout",
          async (_, thunkApi) => {

            try {
                
              const {data} = await authInstance.post('/users/logout');
              clearHeaders();
              console.log(data);
              return data;
            } catch (error) {
              return thunkApi.rejectWithValue(error.message);
            }
          });