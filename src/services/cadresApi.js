import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "../constants";

const getToken = () => {
  const token = localStorage.getItem("token");
  return token ? `Token ${token}` : "";
};
export const cadresApi = createApi({
  reducerPath: "cadresApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${baseUrl}`,
  }),
  tagTypes: ["Cadres"],
  endpoints: (builder) => ({
    cadres: builder.query({
      query: () => ({
        url: "/v1/core/admin/cadre/",
        headers: {
          Authorization: getToken(),
        },
      }),
      providesTags: ["Cadres"],
    }),
    cadreItemDetails: builder.query({
      query: (id) => ({
        url: `/v1/core/admin/cadre/id=${id}/`,
        headers: {
          Authorization: getToken(),
        },
        method: "GET",
      }),
      providesTags: ["Cadres"],
    }),

    addCadre: builder.mutation({
      query: (cadre) => ({
        url: "/v1/core/admin/cadre/",
        method: "POST",
        body: cadre,
        headers: {
          Authorization: getToken(),
        },
      }),

      invalidatesTags: ["Cadres"],
    }),

    updateCadr: builder.mutation({
      query: ({ id, ...rest }) => ({
        url: `/v1/core/admin/cadre/${id}/`,
        method: "PUT",
        body: rest,
        headers: {
          Authorization: getToken(),
        },
      }),

      invalidatesTags: ["Cadres"],
    }),
    deleteCadr: builder.mutation({
      query: (id) => ({
        url: `/v1/core/admin/cadre/${id}/`,
        method: "DELETE",
        headers: {
          Authorization: getToken(),
        },
      }),
      invalidatesTags: ["Cadres"],
    }),
  }),
});
export const {
  useCadresQuery,
  useCadreItemDetailsQuery,
  useDeleteCadrMutation,
  useAddCadreMutation,
  useUpdateCadrMutation,
} = cadresApi;
