import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "../constants";

const getToken = () => {
  const token = localStorage.getItem("token");
  return token ? `Token ${token}` : "";
};
export const cinemaApi = createApi({
  reducerPath: "cinemaApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${baseUrl}`,
  }),
  tagTypes: ["Cinema"],
  endpoints: (builder) => ({
    cinemas: builder.query({
      query: () => ({
        url: "/v1/core/admin/cinema/",
        headers: {
          Authorization: getToken(),
        },
      }),
      providesTags: ["Cinema"],
    }),
    cinemaItemDetails: builder.query({
      query: (id) => ({
        url: `/v1/core/admin/cinema/id=${id}/`,
        headers: {
          Authorization: getToken(),
        },
        method: "GET",
      }),
      providesTags: ["Cinema"],
    }),

    addCinema: builder.mutation({
      query: (cinema) => ({
        url: "/v1/core/admin/cinema/",
        method: "POST",
        body: cinema,
        headers: {
          Authorization: getToken(),
        },
      }),

      invalidatesTags: ["Cinema"],
    }),

    updateCinema: builder.mutation({
      query: ({ id, ...rest }) => ({
        url: `/v1/core/admin/cinema/${id}/`,
        method: "PUT",
        body: rest,
        headers: {
          Authorization: getToken(),
        },
      }),

      invalidatesTags: ["Cinema"],
    }),
    deleteCinema: builder.mutation({
      query: (id) => ({
        url: `/v1/core/admin/cinema/${id}/`,
        method: "DELETE",
        headers: {
          Authorization: getToken(),
        },
      }),
      invalidatesTags: ["Cinema"],
    }),
  }),
});
export const {
  useCinemasQuery,
  useCinemaItemDetailsQuery,
  useAddCinemaMutation,
  useUpdateCinemaMutation,
  useDeleteCinemaMutation,
} = cinemaApi;
