import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "../constants";

const getToken = () => {
  const token = localStorage.getItem("token");
  return token ? `Token ${token}` : "";
};
export const topMovieApi = createApi({
  reducerPath: "topMovieApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${baseUrl}`,
  }),
  tagTypes: ["Banners"],
  endpoints: (builder) => ({
    topMovies: builder.query({
      query: () => ({
        url: "/v1/core/top-cinema/",
        headers: {
          Authorization: getToken(),
        },
      }),
      providesTags: ["TopCinema"],
    }),
    topMovieItemDetails: builder.query({
      query: (id) => ({
        url: `/v1/core/top-cinema/${id}/`,
        headers: {
          Authorization: getToken(),
        },
        method: "GET",
      }),
      providesTags: ["TopCinema"],
    }),

    addTopMovie: builder.mutation({
      query: (topCinema) => ({
        url: "/v1/core/top-cinema/",
        method: "POST",
        body: topCinema,
        headers: {
          Authorization: getToken(),
        },
      }),

      invalidatesTags: ["TopCinema"],
    }),

    updateTopMovie: builder.mutation({
      query: ({ id, ...rest }) => ({
        url: `/v1/core/cinema/${id}/`,
        method: "PUT",
        body: rest,
        headers: {
          Authorization: getToken(),
        },
      }),

      invalidatesTags: ["TopCinema"],
    }),
    deleteTopMovie: builder.mutation({
      query: (id) => ({
        url: `/v1/core/top-cinema/${id}/`,
        method: "DELETE",
        headers: {
          Authorization: getToken(),
        },
      }),
      invalidatesTags: ["TopCinema"],
    }),
  }),
});
export const {
  useTopMoviesQuery,
  useTopMovieItemDetailsQuery,
  useAddTopMovieMutation,
  useUpdateTopMovieMutation,
  useDeleteTopMovieMutation,
} = topMovieApi;
