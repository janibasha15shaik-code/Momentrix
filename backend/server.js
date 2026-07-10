const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path');
const { isMockEmail } = require('./utils/mailer');

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ limit: '10mb', extended: true }));

// Log incoming requests
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
});

// API Health Check
app.get('/api/health', (req, res) => {
  res.status(200).json({
    status: 'UP',
    message: 'Momentrix API Server is running',
    emailMode: isMockEmail ? 'MOCK' : 'SMTP'
  });
});

// Routes
const newsletterRouter = require('./routes/newsletter');
const contactRouter = require('./routes/contact');
const careersRouter = require('./routes/careers');

app.use('/api/newsletter', newsletterRouter);
app.use('/api/contact', contactRouter);
app.use('/api/careers', careersRouter);

// Serve frontend static files in production if dist folder is built
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../dist')));
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../dist/index.html'));
  });
}

// Start Server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
  console.log(`📡 Health Check: http://localhost:${PORT}/api/health`);
});
