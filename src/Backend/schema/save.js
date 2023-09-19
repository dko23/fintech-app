const mongoose = require('mongoose');
const saveSchema = new mongoose.Schema({
    
    goalName: String,
    targetAmount: Number, 
    targetDate: String,
    targetDate: String, 
    description: String,
    funds:Number,
    createdAt: {
        type: Date,
        default: ()=>new Date()
        
    }
});
module.exports = mongoose.model('savings', saveSchema);
