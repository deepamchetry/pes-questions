const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  host: 'smtp.example.com',
  port: 587,
  secure: false,
  auth: {
    user: 'your-email@example.com',
    pass: 'your-password',
  },
});

const mailOptions = {
  from: 'your-email@example.com',
  to: 'recipient-email@example.com',
  subject: 'Test Email',
  text: 'This is a test email sent from Node.js!',
};

transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.error('Error occurred while sending email:', error);
  } else {
    console.log('Email sent successfully:', info.response);
  }
});
