import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
    name: "",
};

export const filtersSlice = createSlice({
  name: "filter",
  initialState: INITIAL_STATE,
  reducers: {
    onFilter(state, action) {
      state.name = action.payload;
    },
  },
});

export const filtersReducer = filtersSlice.reducer;
export const { onFilter } = filtersSlice.actions;


