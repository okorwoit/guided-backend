// All routes related to user registration and authentication are defined here
const express = require('express');
const router = express.Router();

//Import the model
const User = require('../models/user');

// Import the user controller
const userController = require('../controllers/userController');

// Route for user signup
router.post('/signup', userController.signupUser);

// Route for user login
router.post('/login', userController.loginUser);

module.exports = router;
