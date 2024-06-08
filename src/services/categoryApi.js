import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "../constants";

const getToken = () => {
  const token = localStorage.getItem("token");
  return token ? `Token ${token}` : "";
};
export const categoryApi = createApi({
  reducerPath: "categoryApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${baseUrl}`,
  }),
  tagTypes: ["Category"],
  endpoints: (builder) => ({
    categories: builder.query({
      query: () => ({
        url: "/v1/core/admin/category/",
        headers: {
          Authorization: getToken(),
        },
      }),
      providesTags: ["Category"],
    }),
    categoryItemDetails: builder.query({
      query: (id) => ({
        url: `/v1/core/admin/category/id=${id}/`,
        headers: {
          Authorization: getToken(),
        },
        method: "GET",
      }),
      providesTags: ["Category"],
    }),

    addCategory: builder.mutation({
      query: (category) => ({
        url: "/v1/core/admin/category/",
        method: "POST",
        body: category,
        headers: {
          Authorization: getToken(),
        },
      }),

      invalidatesTags: ["Category"],
    }),

    updateCategory: builder.mutation({
      query: ({ id, ...rest }) => ({
        url: `/v1/core/admin/category/${id}/`,
        method: "PATCH",
        body: rest,
        headers: {
          Authorization: getToken(),
        },
      }),

      invalidatesTags: ["Category"],
    }),
    deleteCategory: builder.mutation({
      query: (id) => ({
        url: `/v1/core/admin/category/${id}/`,
        method: "DELETE",
        headers: {
          Authorization: getToken(),
        },
      }),
      invalidatesTags: ["Category"],
    }),
  }),
});
export const {
  useCategoriesQuery,
  useCategoryItemDetailsQuery,
  useAddCategoryMutation,
  useUpdateCategoryMutation,
  useDeleteCategoryMutation,
} = categoryApi;
