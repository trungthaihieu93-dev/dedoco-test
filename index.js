const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const server = express();

// apply middleware
server.use(cors())
server.use(express.json());

// connect db
try {
  mongoose.connect('mongodb://localhost:27017/test', { useNewUrlParser: true, useUnifiedTopology: true });
} catch (error) {
  console.log(error);
}

// apply routes

// run server
server.listen(3000, () => console.log('Server is runnning at port 3000'));