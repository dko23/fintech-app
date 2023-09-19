
import React, { useState } from 'react';
import { useDispatch } from 'react-redux'
import { addExpense } from '../features/ExpenseSlice';
import { nanoid } from '@reduxjs/toolkit';
import { CircularProgress, CircularProgressLabel } from '@chakra-ui/react'


function BudgetWire() {
  const [budget, setBudget] = useState(0);
  const [remainingBudget, setRemainingBudget] = useState(0);
  const [inputBudget, setInputBudget] = useState(0);
  const [expenses, setExpenses] = useState([]);
  const [savings, setSavings] = useState(0); // State for savings amount
  const [showAlert, setShowAlert] = useState(false); // State to track if the alert has been shown
  const [amount, setAmount] = useState(0);
  const [category, setCategory] = useState('');
  const [date, setDate] = useState('');
  


  const dispatch = useDispatch()



  const handleAmountChange = (event) => {
    setAmount(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const handleDateChange = (event) => {
    setDate(event.target.value);
  };

  // Function to calculate the total expenses
  const calculateTotalExpenses = () => {
    return expenses.reduce((total, expense) => total + expense.amount, 0);
  };


  const handleBudgetFormSubmit = (event) => {
    event.preventDefault();
    setBudget(inputBudget);
    setRemainingBudget(inputBudget);
    setInputBudget('');
    console.log(inputBudget)
  };


  const handleReset = (event) => {
    event.preventDefault();
    setBudget('');
    setRemainingBudget('');
    setExpenses([]); // Reset expenses array to an empty array
  };


  const handleExpenseFormSubmit = (event) => {
    event.preventDefault()
    const newExpense = {
      amount: Number(amount),
      category,
      date
    };
    setExpenses([...expenses, newExpense]);
    setRemainingBudget(remainingBudget - newExpense.amount);
    console.log(newExpense);



    // Calculate the percentage achieved
    const percentageUsed = (budget - remainingBudget) / budget * 100;

    if (percentageUsed > 50 && !showAlert) {
      alert('You have used over 50% of your budget.');
      setShowAlert(true); // Set showAlert to true to prevent further alerts
    }

    // Check if the percentage achieved is over 100% and show an alert
    if (percentageUsed >= 100) {
      alert('you have used up all the budget');
    }

    // console.log(percentageUsed)
    console.log(calculateTotalExpenses())

    dispatch(
      addExpense({
        id: nanoid(),
        amount: Number(amount),
        category,
        date
      })
    );
  };


  return (
    <div>
      <div>
        <h2>Expense Tracker</h2>
        <form onSubmit={handleExpenseFormSubmit}>
          <div>
            <label className="form-label">Amount:</label>
            <input
              type="number"
              value={amount}
              onChange={handleAmountChange}
              name="amount"
            />
          </div>

          <label>
            Category:
            <select value={category} onChange={handleCategoryChange} name="category">
              <option value="">Select a category</option>
              <option value="Groceries">Groceries</option>
              <option value="Transportation">Transportation</option>
              <option value="Rent">Rent</option>
              <option value="Entertainment">Entertainment</option>
              <option value="Education">Education</option>
              {/* Add more category options as needed */}
            </select>
          </label>

          <label>
            Date:
            <input type="date" value={date} onChange={handleDateChange} name="date" />
          </label>

          <button type="submit">Add Expense</button>
        </form>
        <h2>Budget Tracker</h2>
        <form onSubmit={handleBudgetFormSubmit}>
          <label>
            Budget:
            <input
              type="number"
              name="budget"
              value={inputBudget}
              onChange={(event) => setInputBudget(event.target.value)}
            />
          </label>
          <button type="submit">Set Budget</button>
          <button onClick={handleReset}>reset button</button>
        </form>
      </div>
      <div>
        <h3>Budget Summary</h3>
        <p>Budget: {budget}</p>
        <p>Total Expenses: {calculateTotalExpenses()}</p>
        <p>
          Remaining Budget: {remainingBudget}
        </p>
        <CircularProgress value={(budget - remainingBudget) / budget * 100}
  color="orange.200"
  thickness={10}
          size="300px"
          trackColor= "green.400"
 >
  <CircularProgressLabel>&#8373;{remainingBudget}</CircularProgressLabel>
</CircularProgress>
      </div>
    </div>
  );
}

export default BudgetWire;
