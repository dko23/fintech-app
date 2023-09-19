const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');

const userSchema = new Schema({
  
  username: String,
  password: String,
});

// The plugin adds additional methods and fields to the User schema related to user authentication.
userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('users', userSchema);

//The first argument 'User': This is the name of the MongoDB collection. Mongoose will automatically create a collection with this name (pluralized and lowercased) based on the model.
//The second argument User: This is the User schema we defined earlier. It tells Mongoose that the documents in the 'User' collection should adhere to this schema structure.