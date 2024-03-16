import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
  baseUrl: "https://localhost:8000",
});

export const api = createApi({
  baseQuery,
  endpoints: () => ({}),
});
