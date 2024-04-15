import { api } from "./api";

export const menuApi = api.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (data) => ({
        url: "/login",
        method: "POST",
        credentials: "include",
        body: data
      }),
    }),
    signup: builder.mutation({
      query: (data) => ({
        url: "/signup",
        method: "POST",
        credentials: "include",
        body: data
      }),
    }),
    logout: builder.mutation({
      query: () => ({
        url: "/logout",
        method: "POST",
        credentials: "include"
      }),
    }),
    updateUser: builder.mutation({
      query: ({data,id}) => ({
        url: `/${id}`,
        method: "PUT",
        credentials: "include",
        body: data
      }),
    }),
  }),
});
export const { useLoginMutation,useSignupMutation,useLogoutMutation, useUpdateUserMutation } = menuApi;
