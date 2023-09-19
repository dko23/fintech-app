
import React, { useState, useEffect } from 'react';
import { nanoid } from '@reduxjs/toolkit';
import { useDispatch,useSelector } from 'react-redux';
import { addSaving, topUp, deleteTopUp, getSave } from '../features/SavingSlice';
import { Textarea } from '@chakra-ui/react'
import { Input } from '@chakra-ui/react'
import { Button } from '@chakra-ui/react'
import { Progress } from '@chakra-ui/react'
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'
import { IconButton } from '@chakra-ui/react'
import { AddIcon, DeleteIcon } from '@chakra-ui/icons';
import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from '@chakra-ui/react'
import ConfettiExplosion from 'confetti-explosion-react';
import axios from 'axios';// communicate with the server
import playing from '../images/playing-chess.jpg'
import { motion } from "framer-motion"
import Bar from './Bar';



function FinanceGoal() {
  const [goalName, setGoalName] = useState('');
  const [targetAmount, setTargetAmount] = useState('');
  const [targetDate, setTargetDate] = useState('');
  const [description, setDescription] = useState('');
  const [goals, setGoals] = useState([]);
  const [funds, setFunds] = useState(0);
  const [isExploding, setIsExploding] = useState(true);
  
  const saving = useSelector((state) => state.saving);
  const dispatch = useDispatch()

  const handleGoalSubmit = async (event, goalId) => {
    event.preventDefault();
    const save = parseFloat(event.target.goal.value);
  
    try {
      // Update the goal in the database
      await axios.put(`http://localhost:8000/putsave/${goalId}`, { funds: save });
  
      // Dispatch the topUp action to update Redux state
      dispatch(
        topUp({
          id: goalId,
          amount: save,
        })
      );
  
      // Update the local state
      setGoals((prevGoals) =>
        prevGoals.map((goal) =>
          goal.id === goalId ? { ...goal, funds: goal.funds + save } : goal
        )
      );
  
      // Check if the goal is met and set isExploding
      const updatedGoal = goals.find((goal) => goal.id === goalId);
      if (updatedGoal && updatedGoal.funds + save >= updatedGoal.targetAmount) {
        setIsExploding(true);
      }
    } catch (error) {
      // Handle any error that occurred during the request
      console.error('Error updating funds and dispatching action', error);
    }
  };
  


  const handleFormSubmit = (event) => {
    event.preventDefault();

    // Create a goal object with the form input values
    const newGoal = {
      id: nanoid(),
      goalName,
      targetAmount: parseFloat(targetAmount),
      targetDate,
      description,
      funds// Initialize savings for the new goal. The savings property in each goal object is used to keep track of the amount saved specifically for that goal. Similar to how the id property uniquely identifies each goal, the savings property uniquely tracks the savings for each goal. 
    };

   
    // Perform any additional actions with the new goal object
    console.log(newGoal);

    // Reset the form fields
    setGoalName('');
    setTargetAmount('');
    setTargetDate('');
    setDescription('');

    setGoals([...goals, newGoal]);

    
    // dispatch(
    //   addSaving({
    //     id: nanoid(),
    //     goalName,
    //     targetAmount,
    //     targetDate,
    //     description,
    //     funds
    //   })
    // );
  };

  // const removeTopUp = (id) => {
  //   dispatch(deleteTopUp(id));
  // };

  const createSave = async () => {
    try {
      const response = await axios.post('http://localhost:8000/postsave', {
        goalName,
        targetAmount,
        targetDate,
        description,
        funds
      });
  
      const newSave = response.data; // Extract the newly created bill from the response
  
      // Dispatch the action to update Redux store with the newly created bill
      dispatch(
        addSaving({
          id: newSave._id, // Use the generated _id from the response
          goalName: newSave.goalName,
          targetAmount: newSave.targetAmount,
          targetDate: newSave.targetDate,
          description: newSave.description,
          funds: newSave.funds,
        })
      );
    } catch (error) {
      // Handle any error that occurred during the request
      console.error('Error creating save', error);
    }
  };




  const fetchData = async () => {
    try {
      // Make a GET request to your Node.js server to fetch data from MongoDB
      const response = await axios.get('http://localhost:8000/getsave');
      // dispatch(setData(response.data)); // Dispatch the setData action to set the fetched data in Redux state
      dispatch(getSave(response.data))
    } catch (error) {
      // Handle any error that occurred during the request
      console.error('Error fetching data from server', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);


  const removeTopUp = async (id) => {
    try {
      await axios.delete(`http://localhost:8000/deletesave/${id}`);
        dispatch(deleteTopUp(id));
    } catch (error) {
      // Handle any error that occurred during the request
    }
  };


 return (
  
   <>
     <Bar/>
          <motion.div  className='container' initial={{ opacity: 0, x: '-100vh' }}
    animate={{ opacity: 1, x: 0 }}>
     <div className='row save-goal'>
     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" 
     style={{ marginBottom: '-250px' }}><path fill="#00cba9" fill-opacity="1" d="M0,64L720,0L1440,160L1440,0L720,0L0,0Z"></path></svg>
       <div className='col-md-6'>
       <h1 style={{ fontWeight: 'bold'}}>Be strategic about your savings</h1>
                          <img src={playing}/>
      </div>
      <div className='col-md-6 '>
         <div className='savegoal-form bills'>
         <h3 style={{ fontWeight: 'bold'}}>create your goal now!</h3>
          <div>
              <Input placeholder='goal' value={goalName} name= 'goalname'type='text' onChange={(e) => setGoalName(e.target.value)} required/>
          </div>
          <div>
              <Input placeholder='Target Amount'  type="number" value={targetAmount} name="targetAmount" onChange={(e) => setTargetAmount(e.target.value)}required />
          </div>
          <div>
              <Input placeholder='Target Date'  type="date" value={targetDate} onChange={(e) => setTargetDate(e.target.value)} required />
          </div>
          <div>
          <Textarea placeholder='Description'  value={description} onChange={(e) => setDescription(e.target.value)} />
          </div>
          <div>
          <Button colorScheme='teal' size='md' type='submit' onClick={createSave} >Start Goal</Button>
          </div>
      </div>
         </div>
     <div>
       </div>
       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" style={{ marginTop: '-250px' }}><path fill="#00cba9" fill-opacity="1" d="M0,320L720,224L1440,288L1440,320L720,320L0,320Z"></path></svg>
     </div>
     

    

<div className='row submitted-goal'>
       <div className='goals-container'>
{saving.map((goal) =>  (
<div className="col-sm-4" >
<div className="card" style={{ width: '18rem',border: '2px solid teal', borderRadius:'20px'}}>
<div className="card-body" key={goal.id}>
<strong>Goal:{goal.goalName}</strong>
     <p>Amount &#8373;:{goal.targetAmount}</p>
     <p>Target Date:{goal.targetDate}</p>
     <p>Goal description: {goal.description}</p>
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
     {/* Display goal details and savings */}
 
<p>
Current Goal: {goal.funds}/{goal.targetAmount}
{goal.funds >= goal.targetAmount && isExploding && <ConfettiExplosion />}
{goal.funds >= goal.targetAmount && (
<Alert status='success'>
<AlertIcon />
Target met!!!
</Alert>
)}
<Progress hasStripe value={(goal.funds / goal.targetAmount) * 100} colorScheme='green' />
</p>
<div className='buttons'>
         <div className='button'>
           <DeleteIcon boxSize={6} type='submit' onClick={() => removeTopUp(goal.id)} color="red.500" />
 </div>
 </div>
</div>
</div>
</div>
))}
</div>
  
</div> 
     </motion.div>
   </>
    
  );
}
export default FinanceGoal;
