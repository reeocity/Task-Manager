const express = require('express');
const router = express.Router();
const { register, login } = require('../controllers/authController');
const { registerValidation, loginValidation } = require('../utils/validators');

// Register route
router.post('/register', registerValidation, register);

// Login route
router.post('/login', loginValidation, login);

module.exports = router; 