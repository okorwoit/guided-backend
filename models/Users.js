//Here, will define the schema for users.
const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  firstName: String,
  lastName: String,
  email: String,
  password: String, // You should hash passwords before storing them
  role: String, // Student, Mentor, Admin, etc.
});

// Create the User model
const User = mongoose.model('User', userSchema);

module.exports = User;
