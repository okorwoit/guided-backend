// All routes related to managing mentoring opportunities,such as creating, updating, and deleting them, are defined here
const express = require('express');
const router = express.Router();

// Import the model
const MentoringOpportunity = require('../models/mentoringOpportunity');

// Import the mentoring controller
const mentoringController = require('../controllers/mentoringController');

// Route to create a mentoring opportunity
router.post('/create', mentoringController.createMentoringOpportunity);

// Route to update a mentoring opportunity
router.put('/:opportunityId', mentoringController.updateMentoringOpportunity);

// Route to delete a mentoring opportunity
router.delete('/:opportunityId', mentoringController.deleteMentoringOpportunity);

module.exports = router;
