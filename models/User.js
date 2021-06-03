const mongoose, { Schema } = require('mongoose');

module.exports = mongoose.model('User', new Schema({
  firstName: 'String',
  lastName: 'String',
  email: 'String'
}));