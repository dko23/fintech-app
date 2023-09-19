import { configureStore } from "@reduxjs/toolkit";
import expenseReducer from './ExpenseSlice'
import savingReducer from './SavingSlice'
import purchaseReducer from './purchaseSlice'
import budgetReducer from './BudgetSlice'

export default configureStore({
    reducer: {
        expenses: expenseReducer,
        saving: savingReducer,
        purchase: purchaseReducer,
        budget:budgetReducer,
    },
  });
  