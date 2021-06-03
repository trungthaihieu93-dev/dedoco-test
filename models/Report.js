const mongoose = require('mongoose');
const { Schema, SchemaTypes } = mongoose;

module.exports = mongoose.model('Report', new Schema({
  created_ad: SchemaTypes.Date,
  signee: SchemaTypes.ObjectId,
  signer: SchemaTypes.ObjectId,
  document: SchemaTypes.ObjectId
}));