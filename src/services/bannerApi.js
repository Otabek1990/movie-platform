import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "../constants";

const getToken = () => {
  const token = localStorage.getItem("token");
  return token ? `Token ${token}` : "";
};
export const bannerApi = createApi({
  reducerPath: "bannerApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${baseUrl}`,
  }),
  tagTypes: ["Banners"],
  endpoints: (builder) => ({
    banners: builder.query({
      query: () => ({
        url: "/v1/core/banner/",
        headers: {
          Authorization: getToken(),
        },
      }),
      providesTags: ["Banner"],
    }),
    bannerItemDetails: builder.query({
      query: (id) => ({
        url: `/v1/core/banner/${id}/`,
        headers: {
          Authorization: getToken(),
        },
        method: "GET",
      }),
      providesTags: ["Banner"],
    }),

    addBanner: builder.mutation({
      query: (banner) => ({
        url: "/v1/core/banner/",
        method: "POST",
        body: banner,
        headers: {
          Authorization: getToken(),
        },
      }),

      invalidatesTags: ["Banner"],
    }),

    updateBanner: builder.mutation({
      query: ({ id, ...rest }) => ({
        url: `/v1/core/cinema/${id}/`,
        method: "PUT",
        body: rest,
        headers: {
          Authorization: getToken(),
        },
      }),

      invalidatesTags: ["Banner"],
    }),
    deleteBanner: builder.mutation({
      query: (id) => ({
        url: `/v1/core/banner/${id}/`,
        method: "DELETE",
        headers: {
          Authorization: getToken(),
        },
      }),
      invalidatesTags: ["Banner"],
    }),
  }),
});
export const {
  useBannersQuery,
  useBannerItemDetailsQuery,
  useAddBannerMutation,
  useUpdateBannerMutation,
  useDeleteBannerMutation,
} = bannerApi;
