// routes/authRoutes.js
const express = require('express');
const router = express.Router();

const { register, login } = require('../controllers/authController');

// User Signup
router.post('/register', register);

// User Login
router.post('/login', login);

module.exports = router;
