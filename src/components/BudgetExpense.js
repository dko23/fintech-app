import React, { useState } from 'react';

function BudgetExpense() {
  const [remainingBudget, setRemainingBudget] = useState(0);
  const [expenses, setExpenses] = useState([]);

  // Function to add an expense
  const addExpense = (newExpense) => {
    setExpenses([...expenses, newExpense]);
    setRemainingBudget(remainingBudget - newExpense.amount);
  };

  const handleExpenseFormSubmit = (data) => {
    const newExpense = {
      amount: Number(data.amount),
      category: data.category,
      date: data.date,
    };/// we are creating the new data to be passed on as a parameter and arguements to the functions of the addExpense and setterFunctions
    addExpense(newExpense);
  };

  return (
    <div>
      <>
        <h3>Add Expense</h3>
        <form onSubmit={handleExpenseFormSubmit}>
          <label>
            Amount:
            <input type="number" name="amount" />
          </label>
          <label>
            Category:
            <input type="text" name="category" />
          </label>
          <label>
            Date:
            <input type="date" name="date" />
          </label>
          <button type="submit">Add Expense</button>
        </form>
        <p>Remaining Budget: {remainingBudget}</p>
      </>
    </div>
  );
}

export default BudgetExpense;
