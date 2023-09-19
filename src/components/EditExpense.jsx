import React from 'react'
import { useState } from 'react';
import { Input } from '@chakra-ui/react'
import { Button } from '@chakra-ui/react'
import { useDispatch } from 'react-redux';
import { editExpense } from '../features/ExpenseSlice';

function ChangeExpense({ prefill, closeModal }) {
    const [state, setState] = useState({
        id: prefill.id,
        category: prefill.category,
        amount:0,
       date: prefill.date,
      });
      const dispatch = useDispatch();
    
      const handleChange = (e) => {
        e.preventDefault()
        setState({ ...state, [e.target.name]: e.target.value });
      };
    
      const handleEdit = (e) => {
        const expenseDiff = state.amount - prefill.amount;
        e.preventDefault()
        console.log(state)
        dispatch(editExpense(state));
        closeModal();
      };
  return (
      <div>
          <form form onSubmit={handleEdit} className='action'>
    <div>
    <Input name='category' placeholder='category' value={state.category} type='text' onChange={handleChange} />

              </div>
              <div>
    <Input name='amount' placeholder='amount' value={state.amount} type='number' onChange={handleChange} />

    </div>
    <div>
        <Input  name='date'  placeholder='date' value={state.date} type='text' onChange={handleChange} />
    </div>

    <div>
        <Button colorScheme='teal' size='md' type='submit'>
            Submit
        </Button>
    </div>
</form>
    </div>
  )
}

export default ChangeExpense
