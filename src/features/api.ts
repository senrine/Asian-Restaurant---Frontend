import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
  baseUrl: "http://localhost",
});

export const api = createApi({
  baseQuery,
  endpoints: () => ({}),
});
