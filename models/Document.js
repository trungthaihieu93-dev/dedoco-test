const mongoose = require('mongoose');
const { Schema, SchemaTypes } = mongoose;

module.exports = mongoose.model('Document', new Schema({
  text: SchemaTypes.String,
  description: SchemaTypes.String,
  created_at: SchemaTypes.Date
}));