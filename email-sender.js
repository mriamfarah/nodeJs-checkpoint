
const nodemailer = require('nodemailer');

// Create a transporter using SMTP
const transporter = nodemailer.createTransport({
  service: 'gmail',  
  auth: {
    user: 'mariemfrh06@gmail.com',
    pass: 'hooyo123'
  }
});

// Set email options
const mailOptions = {
  from:  'mariemfrh06@gmail.com',
  to: 'mriamfarah09@gmail.com',
  subject: 'Test Email from Node.js',
  text: 'Hello, this is a test email sent from Node.js!'
};

// Send email
transporter.sendMail(mailOptions, (err, info) => {
  if (err) {
    console.log('Error occurred:', err);
  } else {
    console.log('Email sent:', info.response);
  }
});
