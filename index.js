const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const fs = require('fs');

const indexRoute = require('./routes');
const documentRoute = require('./routes/document');
const userRoute = require('./routes/user');
const { verifyToken } = require('./services/authentication');

const server = express();
const documentDir = 'docs';

// Create docs dir 
if (!fs.existsSync(documentDir)) {
  fs.mkdirSync(documentDir);
}

// apply middleware
server.use(cors())
server.use(express.json());
server.use(express.static(documentDir));

// connect db
try {
  mongoose.connect('mongodb://localhost:27017/test', { useNewUrlParser: true, useUnifiedTopology: true });
} catch (error) {
  console.log(error);
}

// apply routes
server.use('/', indexRoute);
server.use('/api', verifyToken, documentRoute);
server.use('/user', userRoute);

// run server
server.listen(3000, () => console.log('Server is runnning at port 3000'));