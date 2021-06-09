const mongoose = require('mongoose');
const { Schema, SchemaTypes } = mongoose;

module.exports = mongoose.model('Document', new Schema({
  data: SchemaTypes.String,
  description: SchemaTypes.String,
  created_at: SchemaTypes.Date
}));