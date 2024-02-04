import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const token = import.meta.env.VITE_TOKEN;

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.themoviedb.org/3/",
  }),

  endpoints: (builder) => ({
    getConfiguration: builder.query({
      query: () => ({
        url: "configuration",
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
    }),

    getUpcomingMovies: builder.query({
      query: () => ({
        url: "movie/upcoming",
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
    }),
  }),
});

export const { useGetConfigurationQuery, useGetUpcomingMoviesQuery } = apiSlice;
