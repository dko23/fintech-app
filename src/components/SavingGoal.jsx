// import React, { useState } from 'react';

// function SavingGoal() {
//     const [goal, setGoal] = useState(0);

//     const handleFormSubmit = (event) => {
//         event.preventDefault();
//         const newGoal = parseFloat(event.target.goal.value); // Convert input value to a number
//         setGoal(goal+newGoal);
//     };

//     return (
//         <div>
//             <h3>SavingGoal</h3>
//             <form onSubmit={handleFormSubmit}>
//                 <input type="number" name="goal" />
//                 <button type="submit" disabled={goal >= 200}>Top up</button>
//             </form>
//             <p>
//                 Current Goal: {goal}/200
//                 {goal >= 200 && <span> - Target met!</span>}
//             </p>
//         </div>
//     );
// }

// export default SavingGoal;


import React, { useState } from 'react';


function SavingGoal() {
    const [goal, setGoal] = useState(0);
    const [showAlert, setShowAlert] = useState(false); // State to track if the alert has been shown


    const handleFormSubmit = (event) => {
        event.preventDefault();
        const newGoal = parseFloat(event.target.goal.value); // Convert input value to a number
        const updatedGoal = goal + newGoal;
        setGoal(updatedGoal);
        console.log(updatedGoal)
    
        // Calculate the percentage achieved
        const percentageAchieved = (updatedGoal / 200) * 100;
    
        // Check if the percentage achieved is over 50% and show an alert
        if (percentageAchieved > 50 && !showAlert) {
            alert('You have achieved 50% of your target');
            setShowAlert(true); // Set showAlert to true to prevent further alerts
        }
    
        // Check if the percentage achieved is over 100% and show an alert
        if (percentageAchieved >= 100) {
            alert('Congratulations! You have achieved 100% of your target');
        }
    };

    
    return (
        <div>
            <h3>SavingGoal</h3>
            <form onSubmit={handleFormSubmit}>
                <input type="number" name="goal" />
                <button type="submit" disabled={goal >= 200}>Top up</button>
            </form>
            <p>
                Current Goal: {goal}/200
                {goal >= 200 && <span> - Target met!</span>}
            </p>
        </div>
    );
}

export default SavingGoal;


