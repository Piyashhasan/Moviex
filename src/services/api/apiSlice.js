import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  // baseQuery: fetchBaseQuery({
  //   baseUrl: "https://jsonplaceholder.typicode.com/",
  // }),
  baseQuery: async (args, api, extraOptions) => {
    const customHeaders = {
      "Content-Type": "application/json", // Add any headers you need
      Authorization: "Bearer ",
    };
    const result = await fetchBaseQuery({
      baseUrl: "https://jsonplaceholder.typicode.com/", // Replace with your API base URL
    })(args, api, { ...extraOptions, headers: customHeaders });

    return result;
  },
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => ({
        url: "posts",
        method: "GET",
      }),
    }),
  }),
});

export const { useGetUsersQuery } = apiSlice;
