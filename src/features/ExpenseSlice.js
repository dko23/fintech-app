
import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from "@reduxjs/toolkit";

const initialState = [
  // {
  //   id: nanoid(),
  //   category: "Groceries",
  //   amount: 300,
  //   date: "2023-07-03",
  // },
  // {
  //   id: nanoid(),
  //   category: 'Transportation',
  //   amount: 289,
  //   date: "2023-05-06",
  // },
  // {
  //   id: nanoid(),
  //   category: 'Groceries',
  //   amount: 100,
  //   date: "2023-06-11",
  // }

];
const expensesSlice = createSlice({
  name: 'expenses',
  initialState,
  reducers: {
    addExpense: (state, action) => {
      state.push(action.payload);
    },
    editExpense: (state, action) => {
      return state.map((expense) =>
        expense.id === action.payload.id ? action.payload : expense
      );
    },
    deleteExpense: (state, action) => {
      return state.filter((expense) => expense.id !== action.payload);
    },
    getExpense: (state, action) => {
      return action.payload.map((expense) => ({
        id: expense._id,
        category: expense.category,
        amount: expense.amount,
        date: expense.date,
      }));
    }

    
  },
});

export const { addExpense,editExpense, deleteExpense, getExpense} = expensesSlice.actions;
export default expensesSlice.reducer;








