'use strict';

const nodemailer = require('nodemailer');

module.exports = async (targetEmail, link) => {
  // Generate test SMTP service account from ethereal.email
  // Only needed if you don't have a real mail account for testing
  const testAccount = await nodemailer.createTestAccount();

  // create reusable transporter object using the default SMTP transport
  const transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: testAccount.user, // generated ethereal user
      pass: testAccount.pass, // generated ethereal password
    },
  });

  // send mail with defined transport object
  let mailContent = await transporter.sendMail({
    from: '"Tony Thai" <tony.thai@illuminos.sg>', // sender address
    to: targetEmail, // list of receivers
    subject: "Document Sign Link ✔", // Subject line
    html: `<b>Document link: </b>${link}`, // html body
  });
}