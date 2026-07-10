const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

// Load environment variables
dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ limit: '10mb', extended: true }));

const { isMockEmail } = require('../backend/utils/mailer');

// API Health Check
app.get('/api/health', (req, res) => {
  res.status(200).json({
    status: 'UP',
    message: 'Momentrix API Server is running on Vercel Serverless Functions',
    emailMode: isMockEmail ? 'MOCK' : 'SMTP',
    smtpUser: process.env.SMTP_USER ? `${process.env.SMTP_USER.slice(0, 3)}...` : 'undefined',
    smtpHost: process.env.SMTP_HOST || 'undefined',
    smtpPort: process.env.SMTP_PORT || 'undefined',
    smtpSecure: process.env.SMTP_SECURE || 'undefined'
  });
});

// Import route handlers from the backend folder
const newsletterRouter = require('../backend/routes/newsletter');
const contactRouter = require('../backend/routes/contact');
const careersRouter = require('../backend/routes/careers');

// Use routes
app.use('/api/newsletter', newsletterRouter);
app.use('/api/contact', contactRouter);
app.use('/api/careers', careersRouter);

module.exports = app;
