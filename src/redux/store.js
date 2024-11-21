import { configureStore } from "@reduxjs/toolkit";
import { contactsReducer } from "../redux/contacts/slice";
import { filtersReducer } from "../redux/filters/slice";
import { authReducer } from "./auth/slice";

import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from "redux-persist";

  import storage from "redux-persist/lib/storage";


  const authConfig = {
    key: "authKey",
    storage,
    whitelist: ["token"],
  };
  
export const store = configureStore({
    reducer: {
        contactsData: contactsReducer,
        filtersData: filtersReducer,
        authData: persistReducer(authConfig, authReducer),
    },

    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
          serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
          },
        }),
});
export const persistor = persistStore(store);
