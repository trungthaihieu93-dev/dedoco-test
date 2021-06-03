const mongoose, { Schema } = require('mongoose');

module.exports = mongoose.model('User', new Schema({
  text: 'String',
  description: 'String',
  created_at: 'Date'
}));