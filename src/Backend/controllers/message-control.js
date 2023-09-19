const messages = require('../schema/message'); // Import your expense model
const postmessage = async (req, res) => {
    try {
        const { message } = req.body;
        const mess = await messages.create({
     message
        });

        // Log the entire saving goal object, including the generated _id
        console.log('Newly created note:', mess);

        res.json(mess); // Return the newly created saving goal in the response
    } catch (error) {
        console.error('Error creating note', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};


const getmessage = async (req, res) => {
    try {
        const allmessages = await messages.find();
        res.json(allmessages);
        console.log('Got expense:', allmessages);
    } catch (error) {
        console.error('Error fetching messages', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};




module.exports = {postmessage, getmessage}; // Export the postsave function