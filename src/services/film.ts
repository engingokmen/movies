import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const filmApi = createApi({
  reducerPath: "filmApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://www.omdbapi.com/",
  }),
  endpoints: (builder) => ({
    getFilmByName: builder.query({
      query: (name) =>
        "?" +
        new URLSearchParams({
          s: name,
          apikey: String(process.env.REACT_APP_API_KEY),
        }).toString(),
    }),
  }),
});

export const { useGetFilmByNameQuery } = filmApi;
