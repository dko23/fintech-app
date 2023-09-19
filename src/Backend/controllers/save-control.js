const savings = require('../schema/save'); // Import your savings model
const postsave = async (req, res) => {
    try {
        const { goalName, targetAmount, targetDate, description, funds } = req.body;
        const saves = await savings.create({
            goalName,
            targetAmount,
            targetDate,
            description,
            funds
        });

        // Log the entire saving goal object, including the generated _id
        console.log('Newly created saving goal:', saves);

        res.json(saves); // Return the newly created saving goal in the response
    } catch (error) {
        console.error('Error creating saving goal', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

const putsave= async (req, res) => {
    try {
      const { id } = req.params;
      const { funds } = req.body;
  
      // Find the document by ID and update the funds field
      const updatedSaving = await savings.findByIdAndUpdate(id, { funds });
  
      // Respond with the updated document
      res.json(updatedSaving);
    } catch (error) {
      console.error('Error updating savings', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  };
  

const getsave = async (req, res) => {
    try {
        const allsavings = await savings.find();
        res.json(allsavings);
        console.log('Got saving:', allsavings);
    } catch (error) {
        console.error('Error fetching savings', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};



const deletesave= async (req, res) => {

    try {
        const { id } = req.params;
        const deletedSaving = await savings.findByIdAndDelete(id);
        res.json(deletedSaving);
    } catch (error) {
        console.error('Error deleting savings', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

module.exports = { postsave,getsave, deletesave, putsave}; // Export the postsave function
