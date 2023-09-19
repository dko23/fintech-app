import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { addExpense } from '../features/ExpenseSlice';
import { nanoid } from '@reduxjs/toolkit';
import { addBudget, addRemainingBudget, decreaseRemainingBudget,accExpense, expenseUp, resetBudget} from '../features/BudgetSlice';
import { CircularProgress, CircularProgressLabel } from '@chakra-ui/react'
import { Select } from '@chakra-ui/react'
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'
import { Button } from '@chakra-ui/react'
import { Input } from '@chakra-ui/react'
import axios from 'axios';// communicate with the server
import { motion } from "framer-motion"
import Bar from './Bar';








function BudgetWire() {
  const [budget, setBudget] = useState(() => {
    const budgetValue = localStorage.getItem('budget');
    return budgetValue ? parseFloat(budgetValue) : 0;
  });

  const [remainingBudget, setRemainingBudget] = useState(() => {
    const remainValue = localStorage.getItem('remainingBudget');
    return remainValue ? parseFloat(remainValue) : 0;
  });
  
  const [inputBudget, setInputBudget] = useState(0);
  const [expenses, setExpenses] = useState([]);
  const [savings, setSavings] = useState(0); // State for savings amount
  const [showAlert, setShowAlert] = useState(false); // State to track if the alert has been shown
  const [amount, setAmount] = useState(0);
  const [category, setCategory] = useState('');
  const [date, setDate] = useState('');
  const [pay, setPay]=useState(0) //* New state was created to keep track of the 'Total expense' in the budget tracker.

  const dispatch = useDispatch()
  const bud = useSelector((state) => state.budget.budget); // Assuming 'budget' is the name of your second slice
  const remain = useSelector((state) => state.budget.remainingBudget)
  const expensepay= useSelector((state) => state.budget.pay)



  console.log(bud) // previously 'bud'
  console.log(remain)
  console.log(expensepay)


  
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
  // const calculateTotalExpenses = () => {
  //   return expenses.reduce((total, expense) => total + expense.amount, 0);
  // };


  const handleBudgetFormSubmit = (event) => {
    event.preventDefault();
    setBudget(inputBudget);
    setRemainingBudget(inputBudget);
    setInputBudget('');
    setPay('');
    console.log(inputBudget) 
    dispatch(addBudget(inputBudget ));
    dispatch(addRemainingBudget(inputBudget));
  // Store data in Local Storage
    localStorage.setItem('budget', inputBudget);
    localStorage.setItem('remainingBudget', inputBudget);
  };

  useEffect(() => {
    localStorage.setItem('remainingBudget', remainingBudget.toString());
  }, [remainingBudget]);//useEffect hook that listens to changes in the remainingBudget state and updates the corresponding value in local storage whenever it changes. Here's how you can do it:

  
  const handleReset = (event) => {
    event.preventDefault();
    setBudget('');
    setRemainingBudget('');
    setExpenses([]); // Reset expenses array to an empty array
    dispatch(resetBudget(0));
      // Remove data from Local Storage
    localStorage.removeItem('budget');
    localStorage.removeItem('remainingBudget');
  };

  const handleExpenseFormSubmit = (event) => {
    event.preventDefault()
    const newExpense = {
      amount: Number(amount),
      category,
      date
    };

    const payExpense =parseFloat(event.target.amount.value);

    ; // Use the entered amount directly 
    console.log(newExpense); // Log the new expense first
    setExpenses([...expenses, newExpense]);
    setRemainingBudget(remainingBudget - newExpense.amount);
    setPay(pay + payExpense)
    console.log(payExpense)
    
    
    dispatch(decreaseRemainingBudget(newExpense.amount))


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
    // console.log(calculateTotalExpenses())

    // dispatch(
    //   addExpense({
    //     id: nanoid(),
    //     amount: Number(amount),
    //     category,
    //     date
    //   })
    // );
    dispatch(expenseUp({amount:payExpense}))
  };


  const createExpense = async () => {
    try {
      const response = await axios.post('http://localhost:8000/postexpense', {
        amount: Number(amount),
        category,
        date,
      });
  
      const newExpense = response.data; // Extract the newly created bill from the response
      console.log(newExpense)
      

  
      // Dispatch the action to update Redux store with the newly created bill
      dispatch(
        addExpense({
          id: nanoid(),
          amount: Number(amount),
          category,
          date,
     
        })
      );
    } catch (error) {
      // Handle any error that occurred during the request
      console.error('Error creating expense', error);
    }
  };
 

  return (
    <>
       <Bar />
        <motion.div  className='grid-container' initial={{ opacity: 0, x: '-100vh' }}
    animate={{ opacity: 1, x: 0 }}>
      <div className='expense-tracker' style={{border: '3px solid teal'}}>
     
            <h5>Enter Expense</h5>
            <form onSubmit={handleExpenseFormSubmit}>
              <div>
                <label className="form-label">Amount:</label>
                <Input placeholder='amount' type="number"
                  value={amount}
                  onChange={handleAmountChange}
                  name="amount" />
              </div>
              <div>
                <label>Date</label>
                <Input type="date" value={date} onChange={handleDateChange} name="date" />
              </div>
              <div>
                <label>Category:</label>
                <Select placeholder='Select option' onChange={handleCategoryChange} name="category">
                  <option value="Groceries">Groceries</option>
                  <option value="Transportation">Transportation</option>
                  <option value="Rent">Rent</option>
                  <option value="Entertainment">Entertainment</option>
                  <option value="Education">Education</option>
                </Select>

              </div>
              <Button colorScheme='teal' size='md' type='submit' onClick={createExpense}>
                Enter Expense
              </Button>
            </form>
    
     
        </div>
      <div className='budget-tracker' style={{border: '3px solid teal'}}>
      

            <h5>Enter budget</h5>
            <form onSubmit={handleBudgetFormSubmit}>
              <div>
                <label className="form-label">Budget:</label>
                <Input type="number"
                  name="budget"
                  value={inputBudget}
                  onChange={(event) => setInputBudget(event.target.value)} />
              </div>
<div className='buttons'>
<Button colorScheme='teal' size='md' type='submit' onClick={handleBudgetFormSubmit}>
                Set Budget
              </Button>

              <Button colorScheme='teal' size='md' onClick={handleReset} className='reset'>
                Reset Button
              </Button>
</div>
            </form>
      </div>
      <div className='budget-dash' style={{border: '3px solid teal'}}>
        <h3>Budget Summary</h3>
        <p>Budget:{budget}</p>
        <p>Total Expenses:{expensepay} </p>  
        <p>
          Remaining Budget: {remainingBudget} 
        </p>
        <CircularProgress value={(budget - remainingBudget) / budget * 100}
          color="gray.100"
          thickness={10}
          size="300px"
          trackColor="green.400"
        >
          <CircularProgressLabel>&#8373;{remainingBudget}</CircularProgressLabel>
        </CircularProgress>
        </div>
        
      </motion.div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#00cba9"  fill-opacity="0.5" d="M0,192L0,224L57.6,224L57.6,96L115.2,96L115.2,0L172.8,0L172.8,64L230.4,64L230.4,256L288,256L288,192L345.6,192L345.6,96L403.2,96L403.2,320L460.8,320L460.8,128L518.4,128L518.4,192L576,192L576,256L633.6,256L633.6,288L691.2,288L691.2,256L748.8,256L748.8,96L806.4,96L806.4,256L864,256L864,320L921.6,320L921.6,192L979.2,192L979.2,224L1036.8,224L1036.8,160L1094.4,160L1094.4,128L1152,128L1152,96L1209.6,96L1209.6,32L1267.2,32L1267.2,128L1324.8,128L1324.8,96L1382.4,96L1382.4,64L1440,64L1440,320L1382.4,320L1382.4,320L1324.8,320L1324.8,320L1267.2,320L1267.2,320L1209.6,320L1209.6,320L1152,320L1152,320L1094.4,320L1094.4,320L1036.8,320L1036.8,320L979.2,320L979.2,320L921.6,320L921.6,320L864,320L864,320L806.4,320L806.4,320L748.8,320L748.8,320L691.2,320L691.2,320L633.6,320L633.6,320L576,320L576,320L518.4,320L518.4,320L460.8,320L460.8,320L403.2,320L403.2,320L345.6,320L345.6,320L288,320L288,320L230.4,320L230.4,320L172.8,320L172.8,320L115.2,320L115.2,320L57.6,320L57.6,320L0,320L0,320Z"></path></svg>
    </>
  
  );
}

export default BudgetWire;





  // Function to update the budget
  // const updateBudget = (newBudget) => {
  //   setBudget(newBudget);// newBudget here is used as a parameter here, for reference for functions to pass as an arguement for the function to use
  //   setRemainingBudget(newBudget);
  // }; //updateBudget function, the newBudget parameter represents the new budget value that is passed to the function. It is typically the value entered by the user or obtained from any other source.

  // Function to handle form submission for updating the budget


// Rotate the CircularProgress



//Remaining Budget: {remainingBudget}// old one for reference
//<CircularProgress value={(budget - remainingBudget) / budget * 100}/> for reference
//   <CircularProgressLabel>&#8373;{remainingBudget}</CircularProgressLabel> for reference

// //    dispatch(
//   decreaseRemainingBudget({
//     remainingBudget: (remain.remainingBudget - newExpense.amount)
//    })
//  );


//{calculateTotalExpenses()}











