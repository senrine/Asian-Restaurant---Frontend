import { api } from "./api";

export const menuApi = api.injectEndpoints({
  endpoints: (builder) => ({
    fetchMenu: builder.mutation({
      query: () => ({
        url: "/menu",
        method: "GET",
        credentials: "include",
      }),
    }),
  }),
});
export const { useFetchMenuMutation } = menuApi;
