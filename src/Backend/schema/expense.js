const mongoose = require('mongoose');
const expenseSchema = new mongoose.Schema({

    amount: Number,
    category: String,
    date: String,
    budget: Number,



});
module.exports = mongoose.model('expenses', expenseSchema);


