const dotenv = require('dotenv');
const sgMail = require('@sendgrid/mail');

dotenv.config();

const {SENDGRID_API_KEY} = process.env

sgMail.setApiKey(SENDGRID_API_KEY)
const msg = {
  to: 'ashwin.rajput87@gmail.com', // Change to your recipient
  from: 'ashwani.rajput_1@scaler.com', // Change to your verified sender
  subject: 'Sending with SendGrid is Fun',
  text: 'You can send email to anyone',
  html: '<strong>Sendgrid is sending you the email</strong>',
}
sgMail
  .send(msg)
  .then(() => {
    console.log('Email sent')
  })
  .catch((error) => {
    console.error(error)
  })