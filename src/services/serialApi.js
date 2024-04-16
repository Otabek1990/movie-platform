import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "../constants";

const getToken = () => {
  const token = localStorage.getItem("token");
  return token ? `Token ${token}` : "";
};
export const serialApi = createApi({
  reducerPath: "serialApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${baseUrl}`,
  }),
  tagTypes: ["Serial"],
  endpoints: (builder) => ({
    serials: builder.query({
      query: () => ({
        url: "/v1/core/admin/series/",
        headers: {
          Authorization: getToken(),
        },
      }),
      providesTags: ["Serial"],
    }),
    serialItemDetails: builder.query({
      query: (id) => ({
        url: `/v1/core/admin/series/${id}/`,
        headers: {
          Authorization: getToken(),
        },
        method: "GET",
      }),
      providesTags: ["Serial"],
    }),

    addSerial: builder.mutation({
      query: (series) => ({
        url: "/v1/core/admin/series/",
        method: "POST",
        body: series,
        headers: {
          Authorization: getToken(),
        },
      }),

      invalidatesTags: ["Serial"],
    }),

    updateSerial: builder.mutation({
      query: ({ id, ...rest }) => ({
        url: `/v1/core/admin/series/${id}/`,
        method: "PUT",
        body: rest,
        headers: {
          Authorization: getToken(),
        },
      }),

      invalidatesTags: ["Serial"],
    }),
    deleteSerial: builder.mutation({
      query: (id) => ({
        url: `/v1/core/admin/series/${id}/`,
        method: "DELETE",
        headers: {
          Authorization: getToken(),
        },
      }),
      invalidatesTags: ["Serial"],
    }),
  }),
});
export const {
  useSerialsQuery,
  useSerialItemDetailsQuery,
  useAddSerialMutation,
  useUpdateSerialMutation,
  useDeleteSerialMutation,
} = serialApi;
