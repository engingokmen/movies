import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export interface MovieGet {
  s: string;
  y: string;
  type: string;
}

export const movieApi = createApi({
  reducerPath: "filmApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://www.omdbapi.com/",
  }),
  endpoints: (builder) => ({
    getFilm: builder.query({
      query: (data) =>
        "?" +
        new URLSearchParams({
          ...data,
          apikey: String(process.env.REACT_APP_API_KEY),
        }).toString(),
    }),
  }),
});

export const { useGetFilmQuery } = movieApi;
