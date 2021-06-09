'use strict';
const fs = require('fs');

const Document = require('../models/Document');
const User = require('../models/User');
const Report = require('../models/Report');
const Signature = require('../models/Signature');
const sendMail = require('../services/mailer');

module.exports = {
  handleCreateDocumentSigningProcess: async (req, res) => {
    try {
      const file = req.file;
      const { signature, email, description } = req.body;
      const { user } = req;

      if (file && file.mimetype !== 'pdf') {
        return res.status(400).json({ messsage: 'Document must be in .pdf format.' });
      }

      const docFile = `${file.filename}.${file.mimetype}`;

      const { _id: signeeId } = await User.findOne({ username: user });

      await Signature.create({
        user: signeeId,
        data: signature,
        created_at: new Date()
      });

      const { _id: documentId } = await Document.create({
        data: docFile,
        created_at: new Date(),
        description
      });

      const { _id: reportId } = await Report.create({
        signee: signeeId,
        document: documentId,
        signer: null,
        created_at: new Date()
      });

      // mail the signer
      const signLink = `http://localhost:3000/api/signDocument?signerEmail=${email}&reportId=${reportId}`;
      await sendMail(email, signLink);

      return res.status(200).json({ messsage: 'Your document is being processed to be signed.' });
    } catch (error) {
      return res.status(500).json(error);
    }
  },

  handleSignDocument: async (req, res) => {
    try {
      const { signerEmail, reportId } = req.query;

      if (!signerEmail || !reportId) {
        return res.status(400).send('Bad Link!');
      }

      const { _id: signerId } = await User.findOne({ email: signerEmail });

      const { document } = await Report.findByIdAndUpdate(reportId, { signer: signerId });

      const { data: docFile } = await Document.findById(document);

      return res.status(200).json({
        messsage: 'Document is signed.',
        link: `http://localhost:3000/${docFile}`
      });
    } catch (error) {
      res.status(500).json(error);
    }
  }
}