import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "../services/api/apiSlice";
import movieSlice from "../features/movies/movieSlice";

const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    movie: movieSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});

export default store;
