import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  url: {},
};

export const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    getUrlConfiguration: (state, action) => {
      state.url = action.payload;
    },
  },
});

// --- export action ---
export const { getUrlConfiguration } = movieSlice.actions;

// --- export reducer ---
export default movieSlice.reducer;
