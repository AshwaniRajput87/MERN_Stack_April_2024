# How to send email via backend?

   -> whenever -> you need to use some else email services-> you need the API key and Server where the services are getting deployed.

   -> Email Services:
       - Twilio sendgrid
       - gmail
       - hotmail
       - outlooks
   -> SMTP Server:
       - that are specofocally designed to store and exchange emails.

   -> steps to get the API key from sendgrid:

      1. sign up: https://sendgrid.com/en-us
      2. MFA auth - enabling
      3. follow the steps in screenshots of sendgrid(check Lec-8 emails folder)
      4. login
      5. generate API key and put in .env file
      6. npm install --save @sendgrid/mail or yarn add  @sendgrid/mail

# how to send email via node apps?

 - via nodemailer:  a library to use for sending email from nodeJS applications.
 - because it is very simple and versatile to use.
 - nodemailer can be used with any SMTP server for sending email.

 - how will you use nodemailer:
     install the nodemailer package: yarn add nodemailer

# how to send dynamic emails?

   - you need to create Email template:
       1. https://beefree.io/
       2. https://mailchimp.com/pricing/marketing/

# What is Authorisation?

  - an uthorised person can perform few extra operations which a normal user can't perform likewis getting all users data, delete the users

  - A person who is having admin access/role 