"use strict";
const router = require('express').Router();
const uploadMiddleware = require('multer')({ dest: 'docs/' });

const {
  handleCreateDocumentSigningProcess,
  handleSignDocument,
} = require('../controllers/document');

router.get('/signDocument', handleSignDocument)
  .post('/createDocumentSigningProcess', uploadMiddleware.single('document'), handleCreateDocumentSigningProcess);

module.exports = router;
