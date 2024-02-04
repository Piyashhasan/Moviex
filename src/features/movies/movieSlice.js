import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  url: {},
};

export const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {},
});

// --- export action ---
// export const {} = movieSlice.actions;

// --- export reducer ---
export default movieSlice.reducer;
