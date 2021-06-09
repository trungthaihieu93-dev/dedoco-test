'use strict';
const jwt = require('jsonwebtoken');

const User = require('../models/User');

require('dotenv').config();

module.exports = {
  login: async (req, res) => {
    try {
      const { user } = req;

      return res.status(200).json({ token: jwt.sign(user, process.env.TOKEN_SECRET) });
    } catch (error) {
      res.status(500).send('Internal Server Errror!');
    }
  },

  register: async (req, res) => {
    try {
      const { username, password } = req.body;

      return await User.create({ username, password });
    } catch (error) {
      res.status(500).send('Internal Server Errror!');
    }
  }
}