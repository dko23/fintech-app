import React, { useState } from 'react';

function BudgetTracker() {
    const [budget, setBudget] = useState(0);
    const [expenses, setExpenses] = useState([]);
    const [remainingBudget, setRemainingBudget] = useState(0);

  // Function to update the budget
  const updateBudget = (newBudget) => {
    setBudget(newBudget);
      setRemainingBudget(newBudget);
  };

  // Function to add an expense
  const addExpense = (expense) => {
    setExpenses([...expenses, expense]);
    setRemainingBudget(remainingBudget - expense.amount);
  };

  // Function to calculate the total expenses
  const calculateTotalExpenses = () => {
    return expenses.reduce((total, expense) => total + expense.amount, 0);
  };

  // Function to handle form submission for updating the budget
  const handleBudgetFormSubmit = (data) => {
    const newBudget = Number(data.budget);
    updateBudget(newBudget);
  };

  // Function to handle form submission for adding an expense
  const handleExpenseFormSubmit = (data) => {
    const newExpense = {
      amount: Number(data.amount),
      category: data.category,
      date: data.date,
    };
    addExpense(newExpense);
  };

  return (
    <div>
      <h2>Budget Tracker</h2>
      <div>
        <h3>Set Budget</h3>
        <form onSubmit={handleBudgetFormSubmit}>
          <label>
            Budget:
            <input type="number" name="budget" />
          </label>
          <button type="submit">Set Budget</button>
        </form>
      </div>
      <div>
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
      </div>
      <div>
        <h3>Budget Summary</h3>
        <p>Budget: {budget}</p>
        <p>Total Expenses: {calculateTotalExpenses()}</p>
        <p>Remaining Budget: {remainingBudget}</p>
      </div>
    </div>
  );

}

export default BudgetTracker;
