const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
  title: String,
  description: String,
  date: String,
  registrations: [
    {
      name: String,
      email: String
    }
  ]
});

module.exports = mongoose.model('Event', eventSchema);
