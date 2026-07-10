const nodemailer = require('nodemailer');
const dotenv = require('dotenv');

dotenv.config();

// email is running in mock mode if user hasn't set SMTP_USER or it's equal to the template placeholder
const isMockEmail = !process.env.SMTP_USER || 
                    process.env.SMTP_USER === 'your-email@gmail.com' || 
                    process.env.SMTP_USER === '';

let transporter;

if (isMockEmail) {
  console.log('⚠️ SMTP credentials are not configured or are placeholder values. Email will run in MOCK mode.');
} else {
  transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT || '587'),
    secure: process.env.SMTP_SECURE === 'true',
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
    connectionTimeout: 5000, // 5 seconds
    greetingTimeout: 5000,   // 5 seconds
    socketTimeout: 5000,     // 5 seconds
  });

  // Verify connection configuration only in local development
  if (process.env.NODE_ENV !== 'production') {
    transporter.verify((error, success) => {
      if (error) {
        console.error('❌ SMTP Connection Error:', error);
      } else {
        console.log('✅ SMTP Server is ready to take messages');
      }
    });
  }
}

// Helper function to send email
async function sendMailHelper(mailOptions) {
  if (isMockEmail) {
    console.log('--------------------------------------------------');
    console.log(`[MOCK EMAIL SENT]`);
    console.log(`From: ${mailOptions.from}`);
    console.log(`To: ${mailOptions.to}`);
    console.log(`Subject: ${mailOptions.subject}`);
    console.log(`Body (Text): ${mailOptions.text}`);
    if (mailOptions.html) {
      console.log(`Body (HTML length): ${mailOptions.html.length} chars`);
    }
    console.log('--------------------------------------------------');
    return { mock: true, messageId: 'mock-id-' + Math.random().toString(36).substr(2, 9) };
  } else {
    return await transporter.sendMail(mailOptions);
  }
}

module.exports = {
  sendMailHelper,
  isMockEmail
};
