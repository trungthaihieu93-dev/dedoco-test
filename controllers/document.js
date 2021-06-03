'use strict';
const Document = require('../models/Document');
const User = require('../models/User');
const Report = require('../models/Report');
const Signature = require('../models/Signature');

module.exports = {
  handleCreateDocumentSigningProcess: async (req, res) => {
    try {
      res.status(200).json({ messsage: 'Your document is being processed to be signed.' })
    } catch (error) {
      res.status(500).json(error);
    }
  },

  handleSignDocument: async (req, res) => {
    try {
      res.status(200).json({
        messsage: 'Document is signed.',
        link: 'https://link.to.document'
      });
    } catch (error) {
      res.status(500).json(error);
    }
  }
}