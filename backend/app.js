// app.js
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

// Import routes
const authRoutes = require('./routes/authRoutes');


const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.use('/api/auth', authRoutes);

// Root endpoint
app.get('/', (req, res) => res.send('LoanDesk API is running...'));

module.exports = app;
