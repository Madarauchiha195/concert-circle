const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const GigPlan = require('./models/GigPlan');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err));

const validateGigPlan = (data) => {
  const errors = [];
  if (!data.eventName || typeof data.eventName !== 'string') errors.push('Event Name is required.');
  if (!data.artist || typeof data.artist !== 'string') errors.push('Artist/Performer is required.');
  if (!data.eventDate || typeof data.eventDate !== 'string') errors.push('Event Date is required.');
  if (!data.venue || typeof data.venue !== 'string') errors.push('Venue is required.');
  if (!data.budget || typeof data.budget !== 'string') errors.push('Budget is required.');
  if (!data.contactEmail || !/^\S+@\S+\.\S+$/.test(data.contactEmail)) errors.push('Valid contact email is required.');
  // Add more validation as needed
  return errors;
};

app.post('/api/gig-plan', async (req, res) => {
  const errors = validateGigPlan(req.body);
  if (errors.length > 0) {
    return res.status(400).json({ errors });
  }
  try {
    const gigPlan = new GigPlan(req.body);
    await gigPlan.save();
    res.status(201).json({ message: 'Gig plan saved!' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get('/api/gig-plan', async (req, res) => {
  try {
    const plans = await GigPlan.find().sort({ createdAt: -1 });
    res.json(plans);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`)); 