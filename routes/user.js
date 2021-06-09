"use strict";
const router = require('express').Router();

const { passport } = require('../services/authentication');

const {
  register,
  login,
} = require('../controllers/user');

router
  .post('/register', register)
  .post('/login', passport.authenticate('local', { failureRedirect: '/unauthorized' }), login);

module.exports = router;
