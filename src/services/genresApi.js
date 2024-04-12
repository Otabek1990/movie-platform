import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "../constants";

const getToken = () => {
  const token = localStorage.getItem("token");
  return token ? `Token ${token}` : "";
};
export const genresApi = createApi({
  reducerPath: "genresApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${baseUrl}`,
  }),
  tagTypes: ["Genre"],
  endpoints: (builder) => ({
    genres: builder.query({
      query: () => ({
        url: "/v1/core/admin/genre/",
        headers: {
          Authorization: getToken(),
        },
      }),
      providesTags: ["Genre"],
    }),
    genreItemDetails: builder.query({
      query: (id) => ({
        url: `/v1/core/admin/genre/id=${id}/`,
        headers: {
          Authorization: getToken(),
        },
        method: "GET",
      }),
      providesTags: ["Genre"],
    }),

    addGenre: builder.mutation({
      query: (genre) => ({
        url: "/v1/core/admin/genre/",
        method: "POST",
        body: genre,
        headers: {
          Authorization: getToken(),
        },
      }),

      invalidatesTags: ["Genre"],
    }),

    updateGenre: builder.mutation({
      query: ({ id, ...rest }) => ({
        url: `/v1/core/admin/genre/${id}/`,
        method: "PUT",
        body: rest,
        headers: {
          Authorization: getToken(),
        },
      }),

      invalidatesTags: ["Genre"],
    }),
    deleteGenre: builder.mutation({
      query: (id) => ({
        url: `/v1/core/admin/genre/${id}/`,
        method: "DELETE",
        headers: {
          Authorization: getToken(),
        },
      }),
      invalidatesTags: ["Genre"],
    }),
  }),
});
export const {
  useGenresQuery,
  useGenreItemDetailsQuery,
  useAddGenreMutation,
  useUpdateGenreMutation,
  useDeleteGenreMutation,
} = genresApi;
