
import { useSelector } from 'react-redux';
import React, { useState } from 'react';


function Test() {
    const [budget, setNewBudget] = useState(0);
    const budg = useSelector((state) => state.budget.budget); // Assuming 'budgets' is the correct slice name
    
    return (
        <div>
            <>
          <p>new budget:{budg}</p> 
            </>
        </div>
    );
}

export default Test;

// {budg.map(bu => (
//     <div className="card-body" key={bu.id}>
//         <strong>Goal: {bu.money}</strong>
//     </div>
// ))}