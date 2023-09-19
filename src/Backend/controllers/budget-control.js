const budgets= require('../schema/budget'); // Import your expense model
const postbudget = async (req, res) => {
    try {
        const { budget} = req.body;
        const buds = await budgets.create({
          budget
        });

        // Log the entire saving goal object, including the generated _id
        console.log('Newly created:', buds);

        res.json(buds); // Return the newly created saving goal in the response
    } catch (error) {
        console.error('Error creating budget', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};



const getbudget= async (req, res) => {
    try {
      const budgetData = await budgets.findOne({});
      res.json({ budget: budgetData.budget });
    } catch (error) {
      console.error('Error fetching budget from MongoDB', error);
      res.status(500).json({ error: 'Internal server error' });
    }
}
  

module.exports = {postbudget, getbudget}; // Export the postsave function


// const getbudget = async (req, res) => {
//     try {
//         const allBudgets = await budgets.find();
//         res.json(allBudgets);
//         console.log('Got budget:', allBudgets);
//     } catch (error) {
//         console.error('Error fetching budget', error);
//         res.status(500).json({ error: 'Internal server error' });
//     }
// };


