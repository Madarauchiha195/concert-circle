const mongoose = require('mongoose');

const GigPlanSchema = new mongoose.Schema({
  eventName: String,
  artist: String,
  eventDate: String,
  venue: String,
  budget: String,
  expectedAttendees: String,
  preferences: Object,
  description: String,
  contactEmail: String,
  contactPhone: String,
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('GigPlan', GigPlanSchema); 