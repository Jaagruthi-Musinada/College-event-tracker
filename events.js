const express = require('express');
const router = express.Router();
const Event = require('../models/Event');

// Get all events
router.get('/', async (req, res) => {
  const events = await Event.find();
  res.json(events);
});

// Create a new event
router.post('/', async (req, res) => {
  const newEvent = new Event(req.body);
  await newEvent.save();
  res.json({ message: 'Event Created' });
});

// ✅ Register for an event
router.post('/:id/register', async (req, res) => {
  const { name, email } = req.body;
  const event = await Event.findById(req.params.id);
  if (!event) {
    return res.status(404).json({ message: 'Event not found' });
  }
  event.registrations.push({ name, email });
  await event.save();
  res.json({ message: 'Registered Successfully' });
});

// Get single event
router.get('/:id', async (req, res) => {
  const event = await Event.findById(req.params.id);
  res.json(event);
});

// Update event
router.put('/:id', async (req, res) => {
  const updatedEvent = await Event.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json({ message: 'Event Updated', updatedEvent });
});

module.exports = router;
