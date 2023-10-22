const mongoose = require('mongoose');
const { Schema } = mongoose;

const mentoringOpportunitySchema = new Schema({
  title: String,
  description: String,
  category: String,
  // Additional fields like date, mentor ID, student ID, etc.
});

// Create the MentoringOpportunity model
const MentoringOpportunity = mongoose.model('MentoringOpportunity', mentoringOpportunitySchema);

module.exports = MentoringOpportunity;
