import { api } from "./api";

export const orderApi = api.injectEndpoints({
  endpoints: (builder) => ({
    createOrderApi: builder.mutation({
      query: (data) => ({
        url: "/order",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: data,
      }),
    }),
    updateMenuApi: builder.mutation({
      query: ({ data, id }) => ({
        url: `/order/${id}`,
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: data,
      }),
    }),
    getOrderByID: builder.mutation({
      query: (id) => ({
        url: `/order/${id}`,
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }),
    }),
    deleteOrMinusOneMenu: builder.mutation({
      query: ({ id, data }) => ({
        url: `/order/${id}`,
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: data,
      }),
    }),
    deleteOrder: builder.mutation({
      query: (id) => ({
        url: `/order/${id}`,
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      }),
    }),
  }),
});
export const {
  useCreateOrderApiMutation,
  useUpdateMenuApiMutation,
  useGetOrderByIDMutation,
  useDeleteOrMinusOneMenuMutation,
  useDeleteOrderMutation
} = orderApi;
