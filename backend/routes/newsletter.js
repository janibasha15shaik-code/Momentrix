const express = require('express');
const router = express.Router();
const { sendMailHelper } = require('../utils/mailer');

// POST /api/newsletter
router.post('/', async (req, res) => {
  const { email } = req.body;

  if (!email || !email.includes('@')) {
    return res.status(400).json({ error: 'Please provide a valid email address.' });
  }

  const companyEmail = process.env.COMPANY_EMAIL || 'hello@momentrixmedia.com';
  const emailFrom = process.env.EMAIL_FROM || '"Momentrix Media" <hello@momentrixmedia.com>';

  try {
    // 1. Send notification to the company
    const companyMailOptions = {
      from: emailFrom,
      to: companyEmail,
      subject: 'New Newsletter Subscription',
      text: `A new user has subscribed to the newsletter.\n\nEmail: ${email}\nDate: ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata', timeZoneName: 'short' })}`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; border: 1px solid #ddd; padding: 20px; border-radius: 8px;">
          <h2 style="color: #16a34a; border-bottom: 2px solid #f0fdf4; padding-bottom: 10px;">New Newsletter Subscriber</h2>
          <p>You have received a new subscription to the newsletter:</p>
          <table style="width: 100%; border-collapse: collapse; margin-top: 15px;">
            <tr>
              <td style="padding: 8px; border: 1px solid #eee; font-weight: bold; width: 120px;">Email:</td>
              <td style="padding: 8px; border: 1px solid #eee;">${email}</td>
            </tr>
            <tr>
              <td style="padding: 8px; border: 1px solid #eee; font-weight: bold;">Date:</td>
              <td style="padding: 8px; border: 1px solid #eee;">${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata', timeZoneName: 'short' })}</td>
            </tr>
          </table>
        </div>
      `
    };

    // 2. Send auto-reply to the customer
    const userMailOptions = {
      from: emailFrom,
      to: email,
      subject: 'Welcome to the Momentrix newsletter!',
      text: `Thank you for subscribing to the Momentrix newsletter! We are excited to share digital marketing blueprints, organic scale insights, and AI automation news with you.\n\nBest regards,\nThe Momentrix Team`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <style>
            body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif; background-color: #f8fafc; color: #334155; margin: 0; padding: 0; }
            .container { max-width: 600px; margin: 40px auto; background-color: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06); border: 1px solid #e2e8f0; }
            .header { background-color: #0f172a; padding: 32px; text-align: center; }
            .header h1 { color: #ffffff; margin: 0; font-size: 24px; font-weight: 800; letter-spacing: -0.5px; }
            .content { padding: 40px 32px; }
            .content h2 { color: #0f172a; font-size: 20px; font-weight: 700; margin-top: 0; margin-bottom: 16px; }
            .content p { font-size: 15px; line-height: 1.6; margin-top: 0; margin-bottom: 24px; }
            .badge { display: inline-block; background-color: #dcfce7; color: #16a34a; font-weight: 700; font-size: 11px; padding: 6px 12px; border-radius: 9999px; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 16px; }
            .cta-button { display: inline-block; background-color: #16a34a; color: #ffffff; text-decoration: none; font-weight: 700; font-size: 14px; padding: 14px 28px; border-radius: 9999px; box-shadow: 0 4px 14px 0 rgba(22, 163, 74, 0.3); transition: all 0.2s; }
            .footer { background-color: #f1f5f9; padding: 24px 32px; text-align: center; border-top: 1px solid #e2e8f0; font-size: 12px; color: #64748b; }
            .footer a { color: #16a34a; text-decoration: none; font-weight: 600; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>MOMENTRIX MEDIA</h1>
            </div>
            <div class="content">
              <span class="badge">Success subscribed</span>
              <h2>Welcome to Our Newsletter!</h2>
              <p>Thank you for subscribing to the Momentrix Media newsletter. We are thrilled to have you join our community of forward-thinking business leaders.</p>
              <p>Every month, we share high-value digital marketing strategies, search engine optimization blueprints, and custom AI automation concepts designed to streamline workflows and drive enterprise growth.</p>
              <p style="margin-bottom: 32px;">In the meantime, feel free to explore our digital transformation solutions or reach out if you have any questions.</p>
              <div style="text-align: center;">
                <a href="https://momentrixmedia.com/services" class="cta-button" style="color: #ffffff;">Explore Our Services</a>
              </div>
            </div>
            <div class="footer">
              <p>© ${new Date().getFullYear()} Momentrix Media. Ground floor, 1-12, 25, 3rd Line, Chandramouli Nagar, Guntur, AP 522007</p>
              <p>You received this email because you subscribed on our website. <a href="#">Unsubscribe</a></p>
            </div>
          </div>
        </body>
        </html>
      `
    };

    // Send both emails
    await sendMailHelper(companyMailOptions);
    await sendMailHelper(userMailOptions);

    res.status(200).json({ success: true, message: 'Successfully subscribed to the newsletter!' });
  } catch (error) {
    console.error('Error handling newsletter subscription:', error);
    res.status(500).json({ error: 'An error occurred while processing your request. Please try again later.' });
  }
});

module.exports = router;
