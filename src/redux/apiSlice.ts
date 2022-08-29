import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "../configs";

export const apiSlice = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
  endpoints: (builder) => ({
    // get categories
    getCategories: builder.query({
      query: () => "/categories",
    }),

    // get labels
    getLabels: builder.query({
      query: () => "/labels",
    }),

    // add new transaction
    addTransaction: builder.mutation({
      query: (initialTransaction) => ({
        url: "/transaction",
        method: "POST",
        body: initialTransaction,
      }),
    }),

    // delete transaction
    deleteTransaction: builder.mutation({
      query: (recordId) => ({
        url: "/transaction",
        method: "DELETE",
        body: recordId,
      }),
    }),
  }),
});

export default apiSlice;
