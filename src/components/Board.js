import React from 'react'

function Board() {
    const {
        register, handleSubmit, formState: { errors }, reset, watch
      }=useForm({
        defaultValues: {
          email: "",
          password: ""
        }
      });
      
      // console.log(watch("email"))
      const onSubmit = (data) => {
        console.log(data)
      
        reset()
      }
  return (
      <div>
          <>
          return (
  
  <div className='container'>
    <div className='row'>
      <form onSubmit={handleSubmit(onSubmit)} className='box'>
        <div><h3>OCARINA</h3></div>
    
    <div class="mb-3">
  <label>First Name</label>
  <input type="text" class="form-control" name='first-name' {...register('first-name')}/>
</div>

<div class="mb-3">
  <label>Last Name</label>
  <input type="text" class="form-control" name='last-name'/>
</div>

<div class="mb-3">
  <label for="exampleInputEmail1" class="form-label">Email address</label>
  <input type="email" class="form-control" name='email'{...register('email',{required: true, pattern:/^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/})} />
      <div>We'll never share your email with anyone else. We promise, Wink wink! </div>
      {errors.email && errors.email.type === 'required' && (<p className='error-message'>Email is required</p>)}
      {errors.email && errors.email.type === 'pattern' && (<p className='error-message'>Email is not valid</p>) }
</div>
<div class="mb-3">
  <label for="exampleInputPassword1" class="form-label">Password</label>
  <input type="password" class="form-control" {...register('password', {required: true, minLength:5})} />
  {errors.password && errors.password.type === "required" && (<p className='error-message'>password is required</p>)}
{errors.password && errors.password.type === "minLength" && (<p className='error-message'>password should be atleast 6 characters</p>)}
        </div>
        
        <div>
          <p>By clicking log in, or continuing with the other options below,<br></br>you agree to Ocarina's Terms of Service and have read the Privacy Policy</p>
        </div>

  
<button type="submit" class="btn btn-primary">Submit</button>
</form>
    </div>
  
  
  
  </div>


); 
          
          
          
          </>
    </div>
  )
}

export default Board

//register function, you enable the react-hook-form library to keep track of the input values, perform validation, and handle form submission. When you register a form input using the register function, it establishes a connection between the input and the form state managed by the useForm hook.


 const handleGoalSubmit = (event, goalId) => {
  event.preventDefault();
  setGoals((prevGoals) =>
    prevGoals.map((goal) =>
      goal.id === goalId ? { ...goal, savings: (goal.savings || 0) + save } : goal
    )
  );
};



const handleGoalSubmit = (event) => {
  event.preventDefault();
  const save = parseFloat(event.target.goal.value);
  savingGoals(savings + save);
}
//?Expense Form ////////////////////////////////////////////////////////////////////////////


import React from 'react'
import { useForm } from 'react-hook-form';
const [expenses, setExpenses] = useState([]);
const [showAlert, setShowAlert] = useState(false); // State to track if the alert has been shown



/// the Expense Input Form serves as a means for users to enter their expense details. Its purpose is to collect and capture the necessary information related to an expense, such as the amount, category, and date.

function ExpenseInputForm(props) {
    const { register, reset,handleSubmit, formState: { errors } } = useForm();
    ///Function to handle form submission
    const onSubmit = (data) => {
        // Process and save the expense data
        console.log(data);
        // Reset the form fields
        reset();
    };

    return (
        <div>
            <>
                <form onSubmit={handleSubmit(props.expense) }>


                    <div>
                        <label className="form-label">
                            Amount:
                        </label>
                        <input type="number" {...register('amount', { required: true, minValue: 0 })} name='amount' />
                        {errors.amount && errors.amount.type === "required" && (
                            <p className='error-message'>Amount is required</p>
                        )}
                    </div>

                    <label>
  Category:
  <select {...register('category')} name='category'>
    <option value="">Select a category</option>
    <option value="groceries">Groceries</option>
    <option value="transportation">Transportation</option>
    <option value="rent">Rent</option>
    <option value="entertainment">Entertainment</option>
    <option value="education">Education</option>
    {/* Add more category options as needed */}
  </select>
</label>
                    <label>
                        Date:
                        <input type="date" {...register('date')} name='date' />
                    </label>

                    <button type="submit">Add Expense</button>
                </form>


            </>
        </div>
    )
}

export default ExpenseInputForm



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

    // event.preventDefault();
    // const amount = Number(event.target.elements.amount.value);
    // const category = event.target.elements.category.value;
    // const date = event.target.elements.date.value; /////function is modified to capture the input values directly from the form elements using event.target.elements. It extracts the amount, category, and date values and creates a new expense object to be added using the addExpense function.
    // const newExpense = {
    //   amount: amount,
    //   category: category,
    //   date: date,
    // };  /// In the situation were I have to chnage the parameter from event to data and vice verca
    addExpense(newExpense);
    console.log(newExpense);
         // Calculate the percentage achieved
         const percentageUsed = (budget - remainingBudget) / budget * 100;

         if (percentageUsed > 50 && !showAlert) {
           alert('You have used 50% of your budget.');
           setShowAlert(true); // Set showAlert to true to prevent further alerts
    }
 
        // Check if the percentage achieved is over 100% and show an alert
        if (percentageUsed >= 100) {
          alert('you have used up all the budget');
      }
    console.log(remainingBudget - newExpense.amount)
    console.log(percentageUsed)
    console.log(calculateTotalExpenses())
  };



  // Function to calculate the total expenses
  const calculateTotalExpenses = () => {
    return expenses.reduce((total, expense) => total + expense.amount, 0);
  };///n the calculateTotalExpenses function, the expense parameter represents each individual expense object within the expenses array during each iteration of the reduce function.By using expense.amount, we access the amount value of each expense object in the array. This allows us to accumulate the amounts and calculate the total expenses by adding each expense's amount to the total value.










// event.preventDefault();
    // const amount = Number(event.target.elements.amount.value);
    // const category = event.target.elements.category.value;
    // const date = event.target.elements.date.value; /////function is modified to capture the input values directly from the form elements using event.target.elements. It extracts the amount, category, and date values and creates a new expense object to be added using the addExpense function.
    // const newExpense = {
    //   amount: amount,
    //   category: category,
    //   date: date,
    // };  /// In the situation were I have to chnage the parameter from event to data and vice verca
























  // import React from 'react'
// import { useForm } from 'react-hook-form';



// /// the Expense Input Form serves as a means for users to enter their expense details. Its purpose is to collect and capture the necessary information related to an expense, such as the amount, category, and date.

// function ExpenseInputForm(props) {
//     const { register, reset,handleSubmit, formState: { errors } } = useForm();
//     ///Function to handle form submission
//     const onSubmit = (data) => {
//         // Process and save the expense data
//         console.log(data);
//         // Reset the form fields
//         reset();
//     };

//     return (
//         <div>
//             <>
//                 <form onSubmit={handleSubmit(props.expense) }>


//                     <div>
//                         <label className="form-label">
//                             Amount:
//                         </label>
//                         <input type="number" {...register('amount', { required: true, minValue: 0 })} name='amount' />
//                         {errors.amount && errors.amount.type === "required" && (
//                             <p className='error-message'>Amount is required</p>
//                         )}
//                     </div>

//                     <label>
//   Category:
//   <select {...register('category')} name='category'>
//     <option value="">Select a category</option>
//     <option value="groceries">Groceries</option>
//     <option value="transportation">Transportation</option>
//     <option value="rent">Rent</option>
//     <option value="entertainment">Entertainment</option>
//     <option value="education">Education</option>
//     {/* Add more category options as needed */}
//   </select>
// </label>
//                     <label>
//                         Date:
//                         <input type="date" {...register('date')} name='date' />
//                     </label>

//                     <button type="submit">Add Expense</button>
//                 </form>


//             </>
//         </div>
//     )
// }

// export default ExpenseInputForm



import React, { useState } from 'react';
import ExpenseInputForm from './ExpenseInputForm';
import { useEffect } from 'react';

function BudgetWire() {
  const [budget, setBudget] = useState(0);
  const [remainingBudget, setRemainingBudget] = useState(0);
  const [inputBudget, setInputBudget] = useState(0);
  const [expenses, setExpenses] = useState([]);
  const [savings, setSavings] = useState(0); // State for savings amount
  const [showAlert, setShowAlert] = useState(false); // State to track if the alert has been shown
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');
  const [date, setDate] = useState('');

  const handleAmountChange = (event) => {
    setAmount(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const handleDateChange = (event) => {
    setDate(event.target.value);
  };



  // Function to update the budget
  // const updateBudget = (newBudget) => {
  //   setBudget(newBudget);// newBudget here is used as a parameter here, for reference for functions to pass as an arguement for the function to use
  //   setRemainingBudget(newBudget);
  // }; //updateBudget function, the newBudget parameter represents the new budget value that is passed to the function. It is typically the value entered by the user or obtained from any other source.

  // Function to handle form submission for updating the budget
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

    // event.preventDefault();
    // const amount = Number(event.target.elements.amount.value);
    // const category = event.target.elements.category.value;
    // const date = event.target.elements.date.value; /////function is modified to capture the input values directly from the form elements using event.target.elements. It extracts the amount, category, and date values and creates a new expense object to be added using the addExpense function.
    // const newExpense = {
    //   amount: amount,
    //   category: category,
    //   date: date,
    // };  /// In the situation were I have to chnage the parameter from event to data and vice verca
    addExpense(newExpense);
    console.log(newExpense);
    // Calculate the percentage achieved
    const percentageUsed = (budget - remainingBudget) / budget * 100;

    if (percentageUsed > 50 && !showAlert) {
      alert('You have used 50% of your budget.');
      setShowAlert(true); // Set showAlert to true to prevent further alerts
    }

    // Check if the percentage achieved is over 100% and show an alert
    if (percentageUsed >= 100) {
      alert('you have used up all the budget');
    }
    console.log(remainingBudget - newExpense.amount)
    console.log(percentageUsed)
    console.log(calculateTotalExpenses())
  };



  // Function to calculate the total expenses
  const calculateTotalExpenses = () => {
    return expenses.reduce((total, expense) => total + expense.amount, 0);
  };///n the calculateTotalExpenses function, the expense parameter represents each individual expense object within the expenses array during each iteration of the reduce function.By using expense.amount, we access the amount value of each expense object in the array. This allows us to accumulate the amounts and calculate the total expenses by adding each expense's amount to the total value.

 
  return (
    <div>
      <div>
      <ExpenseInputForm expense={handleExpenseFormSubmit} />
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
          {/* Remaining Budget: {remainingBudget} */}
        </p>

      </div>
    </div>
  );
}

export default BudgetWire;




import React, { useState } from 'react';
import ExpenseInputForm from './ExpenseInputForm';
import { useEffect } from 'react';

function BudgetWire() {
  const [budget, setBudget] = useState(0);
  const [remainingBudget, setRemainingBudget] = useState(0);
  const [inputBudget, setInputBudget] = useState('');
  const [expenses, setExpenses] = useState([]);
  const [savings, setSavings] = useState(0); // State for savings amount
  const [showAlert, setShowAlert] = useState(false); // State to track if the alert has been shown
  
  


  

  // Function to update the budget
  const updateBudget = (newBudget) => {
    setBudget(newBudget);// newBudget here is used as a parameter here, for reference for functions to pass as an arguement for the function to use
    setRemainingBudget(newBudget);
  }; //updateBudget function, the newBudget parameter represents the new budget value that is passed to the function. It is typically the value entered by the user or obtained from any other source.

  // Function to handle form submission for updating the budget
  const handleBudgetFormSubmit = (event) => {
    event.preventDefault();
    const newBudget = Number(inputBudget);/// using the Number method to convert the input(state) from a string to a number
    updateBudget(newBudget);
    setInputBudget(''); //reset the input field after the budget value has been submitted and updated.
  };





  const handleReset = (event) => {
    event.preventDefault();
    setBudget('');
    setRemainingBudget('');
  };




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

    // event.preventDefault();
    // const amount = Number(event.target.elements.amount.value);
    // const category = event.target.elements.category.value;
    // const date = event.target.elements.date.value; /////function is modified to capture the input values directly from the form elements using event.target.elements. It extracts the amount, category, and date values and creates a new expense object to be added using the addExpense function.
    // const newExpense = {
    //   amount: amount,
    //   category: category,
    //   date: date,
    // };  /// In the situation were I have to chnage the parameter from event to data and vice verca
    addExpense(newExpense);
    console.log(newExpense);
         // Calculate the percentage achieved
         const percentageUsed = (budget - remainingBudget) / budget * 100;

         if (percentageUsed > 50 && !showAlert) {
           alert('You have used 50% of your budget.');
           setShowAlert(true); // Set showAlert to true to prevent further alerts
    }
 
        // Check if the percentage achieved is over 100% and show an alert
        if (percentageUsed >= 100) {
          alert('Congratulations! You have achieved 100% of your target');
      }
    console.log(remainingBudget - newExpense.amount)
    console.log(percentageUsed)
    console.log(calculateTotalExpenses())
  };



  // Function to calculate the total expenses
  const calculateTotalExpenses = () => {
    return expenses.reduce((total, expense) => total + expense.amount, 0);
  };///n the calculateTotalExpenses function, the expense parameter represents each individual expense object within the expenses array during each iteration of the reduce function.By using expense.amount, we access the amount value of each expense object in the array. This allows us to accumulate the amounts and calculate the total expenses by adding each expense's amount to the total value.


 // Function to handle and transfer Savings



  return (
    <div>
      <div>
        <h2>Budget Tracker</h2>


        <h3>Add Expense</h3>
        <ExpenseInputForm expense={handleExpenseFormSubmit} />
        
        <h3>Set Budget</h3>
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

      </div>
    </div>
  );
}

export default BudgetWire;





// <div>
// <label className="form-label">Amount:</label>
// <input
//   type="number"
//   value={amount}
//   onChange={handleAmountChange}
//   name="amount"
// />
// </div>

// <label>
// Category:
// <select value={category} onChange={handleCategoryChange} name="category">
//   <option value="">Select a category</option>
//   <option value="groceries">Groceries</option>
//   <option value="transportation">Transportation</option>
//   <option value="rent">Rent</option>
//   <option value="entertainment">Entertainment</option>
//   <option value="education">Education</option>
//   {/* Add more category options as needed */}
// </select>
// </label>

// <label>
// Date:
// <input type="date" value={date} onChange={handleDateChange} name="date" />
// </label>

// <button type="submit">Add Expense</button>



//cookies used to persist the data; we are using the set method to set the name of the cookies and their values. the 1st parameter is the name given to the cookie and the 2nd is the value. the set method is used to create or update a cookie
Cookies.set('budget', budget);
Cookies.set('remaingBudget', remainingBudget);
Cookies.set('pay', pay);


useEffect(() => {
  // Get the budget from the 'budget' cookie and set it in the component state
  //useEffect we discussed earlier loads the budget value from the cookie and sets it as the initial value of the component's state when the component mounts or when the page is refreshed. 
  const savedBudget = Cookies.get('budget');
  if (savedBudget) {
    setBudget(parseFloat(savedBudget));//*When you retrieve data from a cookie using Cookies.get('budget'), it returns a string. In JavaScript, you should ensure that you provide the correct type of data to functions, 
  }

  // Similarly, load and set 'totalExpense' and 'remainingBudget' from cookies
  const savedTotalExpense = Cookies.get('pay');
  if (savedTotalExpense) {
    setPay(parseFloat(savedTotalExpense));
  }

  const savedRemainingBudget = Cookies.get('remainingBudget');
  if (savedRemainingBudget) {
    setRemainingBudget(parseFloat(savedRemainingBudget));
  }
}, []);


useEffect(() => {
  // Whenever 'budget' state changes, update the 'budget' cookie
  Cookies.set('budget', budget);

  // Similarly, update 'totalExpense' and 'remainingBudget' cookies
  Cookies.set('pay', pay);
  Cookies.set('remainingBudget', remainingBudget);
}, [budget, pay, remainingBudget]);




<form onSubmit={(e) => handleGoalSubmit(e, goal.id)}>
<Input placeholder='Top up' name= 'goal'type='number'required/>
<IconButton
              isRound={true}
              variant='solid'
              colorScheme='teal'
              aria-label='Done'
              fontSize='20px'
  type='submit'
  icon={<AddIcon boxSize={4}/>}
              disabled={goal.funds >= goal.targetAmount}/>
    </form>


