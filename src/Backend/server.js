const express = require('express');
const app = express();
const cors = require('cors');
const savings = require('./schema/save');
const mongoose = require('mongoose');
const  {postsave, getsave, deletesave, putsave} =require('./controllers/save-control') 
const { postexpense, getexpense, deleteexpense} = require('./controllers/expense-control')
const { postmessage, getmessage} = require('./controllers/message-control'); 
const { postbudget, getbudget } = require('./controllers/budget-control');

app.use(express.json());// basically the same as body.parser middleware which is outdated.
app.use(cors()); // Use the cors middleware


// Replace '<password>' with your actual database user password
const connectionURI    = 'mongodb+srv://danielowusu1759:ct2203@code-cluster.zdowcz5.mongodb.net/fintech?retryWrites=true&w=majority';

mongoose.connect(connectionURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connected to MongoDB Atlas');
}).catch((error) => {
  console.error('Error connecting to MongoDB Atlas:', error);
});



// Define your routes here
// Route to create a new save goal(FinanceGoal component)
// Route to get a new save goal
app.post('/postsave', postsave);
// Route to retrieve update list
app.put('/putsave/:id', putsave);
// Route to retrieve goal list
app.get('/getsave', getsave);
// Route to delete goal list
app.delete('/deletesave/:id', deletesave)



// Route to create a new expense form(Expenseform component)
app.post('/postexpense', postexpense );
// Route to retrieve goal list
app.get('/getexpense', getexpense);
// Route to delete goal list
app.delete('/deleteexpense/:id', deleteexpense)



// Route to create a new expense form(Expenseform component)
app.post('/postmessage', postmessage );
// Route to retrieve goal list
app.get('/getmessage', getmessage);


app.post('/postbudget', postbudget);
app.get('/getbudget', getbudget);

// Start the server
app.listen(8000, () => {
    console.log('Server is running on port 8000');
});

