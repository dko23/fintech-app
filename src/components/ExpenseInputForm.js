import React from 'react'
import { useForm } from 'react-hook-form';



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



