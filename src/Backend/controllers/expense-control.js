const expenses = require('../schema/expense'); // Import your expense model
const postexpense = async (req, res) => {
    try {
        const { amount, category, date} = req.body;
        const expe = await expenses.create({
            amount,
            category,
            date,
        });

        // Log the entire saving goal object, including the generated _id
        console.log('Newly created expense:', expe);

        res.json(expe); // Return the newly created saving goal in the response
    } catch (error) {
        console.error('Error creating expense', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};


const getexpense = async (req, res) => {
    try {
        const allexpenses = await expenses.find();
        res.json(allexpenses);
        console.log('Got expense:', allexpenses);
    } catch (error) {
        console.error('Error fetching expenses', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};



const deleteexpense= async (req, res) => {

    try {
        const { id } = req.params;
        const deletedExpense = await expenses.findByIdAndDelete(id);
        res.json(deletedExpense);
    } catch (error) {
        console.error('Error deleting expense', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

module.exports = { postexpense,getexpense, deleteexpense}; // Export the postsave function


