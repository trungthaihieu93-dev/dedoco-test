const mongoose = require('mongoose');
const { Schema, SchemaTypes } = mongoose;

module.exports = mongoose.model('Signature', new Schema({
  data: SchemaTypes.String,
  created_at: SchemaTypes.Date,
  user: SchemaTypes.ObjectId,
}));