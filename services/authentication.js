'use strict';
const passport = require('passport');
const LocalStragegy = require('passport-local').Strategy;
const jwt = require('jsonwebtoken');

const User = require('../models/User');

require('dotenv').config();

passport.use(new LocalStragegy(
  async (username, password, done) => {
    try {

      const user = await User.findOne({ username });

      if (!user) {
        return done(null, false, { message: 'Incorrect username.' });
      }

      if (password !== user.password) {
        return done(null, false, { message: 'Incorrect password.' });
      }
    } catch (error) {
      return done(error);
    }
  }
));

const verifyToken = (req, res, next) => {
  const authHeader = req.headers['authorization']
  const token = authHeader && authHeader.split(' ')[1]

  if (token == null) return res.sendStatus(401)

  jwt.verify(token, process.env.TOKEN_SECRET, (err, username) => {
    if (err) return res.statusa(403).send('Forbidden!');

    req.user = username;

    next();
  })
}

module.exports = { passport, verifyToken };