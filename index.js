const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const eventRoutes = require('./routes/events');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
  mongoose.connect('mongodb+srv://jaagruthimusinada:jaagruthi@cluster-1.bhedlte.mongodb.net/', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log("MongoDB Connected");
}).catch(err => console.log(err));

// Routes
app.use('/api/events', eventRoutes);

// Start server
app.listen(5000, () => {
  console.log('Server running on http://localhost:5000');
});
