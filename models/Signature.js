const mongoose, { Schema, Types } = require('mongoose');

module.exports = mongoose.model('Signature', new Schema({
  data: 'String',
  created_at: 'Date',
  user: Types.ObjectId,
}));