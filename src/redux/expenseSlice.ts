import { createSlice } from "@reduxjs/toolkit";
import { Category, Transaction } from "@src/models/expense";

type ExpenseState = {
  categories: Category[];
  transactions: Transaction[];
};

const initialState: ExpenseState = {
  categories: [],
  transactions: [],
};

export const expenseSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    getTransactions: (state) => {
      return state;
    },
  },
});

export const { getTransactions } = expenseSlice.actions;

const expenseReducer = expenseSlice.reducer;
export default expenseReducer;
