"use strict";
const router = require('express').Router();

router
  .get('/', (req, res) => res.send('Server is online!'))
  .get('/unauthorized', (req, res) => res.status(401).send('Unauthorized!'));

module.exports = router;
