// Task 3: Use a Third-Party Module (nodemailer)
// First, you must install it by running:  npm install nodemailer
const nodemailer = require('nodemailer');

// Step 1: Create a transporter — this is the "mail service" configuration
// Here we use Gmail's SMTP server as an example
const transporter = nodemailer.createTransport({
    service: 'gmail',           // Use Gmail's built-in SMTP settings
    auth: {
        user: 'akanho.dev@gmail.com',       
        pass: 'uora jrnw gpzz bnpe'           // Replace with YOUR Gmail App Password
    }
});

// Step 2: Define the email details
const mailOptions = {
    from: 'akanho.dev@gmail.com',           
    to: 'i.dineinoussa@gmail.com',          
    subject: 'Test Email from Node.js',     
    text: 'Hello! This email was sent using nodemailer in Node.js.'  
};

// Step 3: Send the email
transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        console.log('Error sending email:', error.message);
    } else {
        console.log('Email sent successfully!');
        console.log('Message ID:', info.messageId);
    }
});
