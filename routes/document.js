"use strict";
const router = require('express').Router();

const {
  handleCreateDocumentSigningProcess,
  handleSignDocument,
} = require('../controllers/document');

router.get('/signDocument', handleSignDocument)
  .post('/createDocumentSigningProcess', handleCreateDocumentSigningProcess);

module.exports = router;
