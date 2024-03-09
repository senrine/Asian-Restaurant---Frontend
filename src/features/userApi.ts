import { api } from "./api";

export const userApi = api.injectEndpoints({
  endpoints: (builder) => ({
    signup: builder.mutation({
      query: (data) => ({
        url: "/user/signup",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: data,
        credentials: "include",
      }),
    }),
    login: builder.mutation({
      query: (data) => ({
        url: "/user/login",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: data,
        credentials: "include",
      }),
    }),
    getUser: builder.mutation({
      query: (data) => ({
        url: "/user",
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        body: data,
        credentials: "include",
      }),
    }),
    logout: builder.mutation({
      query: () => ({
        url: "/user",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      }),
    }),
  }),
});
export const {
  useSignupMutation,
  useLoginMutation,
  useGetUserMutation,
  useLogoutMutation,
} = userApi;
