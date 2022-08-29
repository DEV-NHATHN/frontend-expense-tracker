import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Category } from "@src/models/expense";
import { baseUrl } from "../configs";

export const apiSlice = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
  endpoints: (builder) => ({
    // get categories
    getCategories: builder.query({
      query: () => "/categories",
      providesTags: ["categories"] as any,
    }),

    // get labels
    getLabels: builder.query({
      query: () => "/labels",
      providesTags: ["transaction"] as any,
    }),

    // add new transaction
    addTransaction: builder.mutation({
      query: (initialTransaction) => ({
        url: "/transaction",
        method: "POST",
        body: initialTransaction,
      }),
      invalidatesTags: ["transaction"] as any,
    }),

    // delete transaction
    deleteTransaction: builder.mutation({
      query: (recordId) => ({
        url: "/transaction",
        method: "DELETE",
        body: recordId,
      }),
      invalidatesTags: ["transaction"] as any,
    }),
  }),
});

export default apiSlice;
