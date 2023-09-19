
// budgetSlice.js
import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState =
{
 
    budget: 0,
    remainingBudget: 0,
    pay:0


}


const budgetSlice = createSlice({
    name: 'budget',
    initialState,
    reducers: {
        addBudget: (state, action) => {
            state.budget = action.payload; // Update the 'budget' property
        },
        addRemainingBudget: (state, action) => {
            state.remainingBudget = action.payload; // Update the 'budget' property
        },
        decreaseRemainingBudget: (state, action) => {
            state.remainingBudget -= action.payload; // Update the 'budget' property
        }, 

        accExpense: (state, action) => {
            state.expenses.reduce((total, expense) => total + expense.amount, 0);
        },
        
        expenseUp: (state, action) => {
     state.pay += action.payload.amount; // Assuming action.payload.amount contains the amount to top up
        },
        
        resetBudget: (state, action) => {
            state.budget = 0; // Reset the budget
            state.remainingBudget = 0; // Reset the remaining budget
            state.pay = 0; // Reset the pay
        }
        
        
    
    
    },
});


export const { addBudget, addRemainingBudget, decreaseRemainingBudget ,accExpense, expenseUp, resetBudget } = budgetSlice.actions;
export default budgetSlice.reducer;

// //    decreaseRemainingBudget: (state, action) => {
//     state.remainingBudget -= action.payload; // Update the 'budget' property



// const numbers = [1, 2, 3, 4, 5];

// const sum = numbers.reduce((accumulator, currentNumber) => {
//   return accumulator + currentNumber;
// }, 0);

// console.log(sum); // Output: 15 (1 + 2 + 3 + 4 + 5)

  
//** The reason you don't need to use action.payload in the same way as the other reducers is because the accExpense reducer doesn't need any external payload data. Instead, it's performing a calculation based on the existing state. In the other reducers, like addBudget, addRemainingBudget, and decreaseRemainingBudget, you're typically updating the state with data that comes from the action's payload.


// accExpense: (state, action) => {
//     state.expensesTotal = state.expenses.reduce((total, expense) => total + expense.amount, 0);
//   }
// }
