
import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from "@reduxjs/toolkit";

const initialState = [
    // {
    //     // id: nanoid(),
    //     goalName:'vacation',
    //     targetAmount: 200,
    //     targetDate:'09-04-23',
    //     description:'Ashanti Region',
    //     funds:6,
    // }



];
const savingSlice = createSlice({
    name: 'saving',
    initialState,
    reducers: {
        addSaving: (state, action) => {
            state.push(action.payload);
        },
        topUp: (state, action) => {
            state.forEach((goal) => {
              if (goal.id === action.payload.id) {
                goal.funds += action.payload.amount; // Assuming action.payload.amount contains the amount to top up
              }
            });
        },
        deleteTopUp: (state, action) => {
            return state.filter((goal) => goal.id !== action.payload);
        },
        

        getSave: (state, action) => {
            return action.payload.map((expense) => ({
              id: expense._id,
              goalName: expense.goalName,
              targetAmount: expense.targetAmount,
              targetDate: expense.targetDate,
              description: expense.description,
              funds: expense.funds 
            }));
          }
    
          
        // Add other reducers as needed

    },
});

export const { addSaving, topUp, deleteTopUp, getSave } = savingSlice.actions;
export default savingSlice.reducer;
