const dotenv = require('dotenv');
const nodemailer = require('nodemailer');

dotenv.config();

const {SENDGRID_API_KEY} = process.env;

console.log(SENDGRID_API_KEY)


//1. Entering the technical details about the STMP server and client -> create tranporter.


// follow as a refernce: https://www.twilio.com/en-us/blog/send-smtp-emails-node-js-sendgrid#:~:text=For%20the%20authentication%20data%2C%20you,be%20your%20actual%20API%20key.
const techDetails = {
    host: 'smtp.sendgrid.net',
    port: 465,
    secure: true,
    auth: {
        user: 'apikey',
        pass: SENDGRID_API_KEY
    }
}

const transporter = nodemailer.createTransport(techDetails);


// 2. Sending the email via created transporter

const emailObject = {
  to: 'ashwin.rajput87@gmail.com', // Change to your recipient
  from: 'ashwani.rajput_1@scaler.com', // Change to your verified sender
  subject: 'Sending with NodeMailer is Fun',
  text: 'You can send email to anyone',
  html: '<strong>You sending email via nodemailer</strong>',
}

transporter.sendMail(emailObject).then(()=>{
  console.log("Email Sent");
}).catch((err)=>{
  console.log(err.message);
})
