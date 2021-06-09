const mongoose = require('mongoose');
const { Schema, SchemaTypes } = mongoose;

module.exports = mongoose.model('User', new Schema({
  firstName: SchemaTypes.String,
  lastName: SchemaTypes.String,
  email: SchemaTypes.String,
  username: SchemaTypes.String,
  password: SchemaTypes.String
}));