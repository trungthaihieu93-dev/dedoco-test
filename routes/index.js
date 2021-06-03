"use strict";
const router = require('express').Router();

router.get('/', (req, res) => res.send("Server is online!"));

module.exports = router;
