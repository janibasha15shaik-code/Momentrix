const express = require('express');
const router = express.Router();
const { sendMailHelper } = require('../utils/mailer');

// POST /api/contact
router.post('/', async (req, res) => {
  const { firstName, lastName, email, phone, service, message } = req.body;

  if (!firstName || !lastName || !email || !phone || !message) {
    return res.status(400).json({ error: 'Please fill in all required fields.' });
  }

  const companyEmail = process.env.COMPANY_EMAIL || 'hello@momentrixmedia.com';
  const emailFrom = process.env.EMAIL_FROM || '"Momentrix Media" <hello@momentrixmedia.com>';

  try {
    // 1. Send notification to the company
    const companyMailOptions = {
      from: emailFrom,
      to: companyEmail,
      subject: `New Contact Inquiry - ${service || 'General'}`,
      text: `New contact form submission:\n\nName: ${firstName} ${lastName}\nEmail: ${email}\nPhone: ${phone}\nService: ${service || 'Not Specified'}\nMessage: ${message}\n\nDate: ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata', timeZoneName: 'short' })}`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; border: 1px solid #ddd; padding: 20px; border-radius: 8px;">
          <h2 style="color: #16a34a; border-bottom: 2px solid #f0fdf4; padding-bottom: 10px;">New Contact Inquiry</h2>
          <p>You have received a new message from the contact form:</p>
          <table style="width: 100%; border-collapse: collapse; margin-top: 15px; margin-bottom: 20px;">
            <tr>
              <td style="padding: 8px; border: 1px solid #eee; font-weight: bold; width: 150px;">Name:</td>
              <td style="padding: 8px; border: 1px solid #eee;">${firstName} ${lastName}</td>
            </tr>
            <tr>
              <td style="padding: 8px; border: 1px solid #eee; font-weight: bold;">Email:</td>
              <td style="padding: 8px; border: 1px solid #eee;"><a href="mailto:${email}">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px; border: 1px solid #eee; font-weight: bold;">Phone:</td>
              <td style="padding: 8px; border: 1px solid #eee;"><a href="tel:${phone}">${phone}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px; border: 1px solid #eee; font-weight: bold;">Service of Interest:</td>
              <td style="padding: 8px; border: 1px solid #eee;">${service || 'General Inquiry'}</td>
            </tr>
            <tr>
              <td style="padding: 8px; border: 1px solid #eee; font-weight: bold;">Date:</td>
              <td style="padding: 8px; border: 1px solid #eee;">${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata', timeZoneName: 'short' })}</td>
            </tr>
          </table>
          <h3 style="color: #333; border-bottom: 1px solid #eee; padding-bottom: 5px;">Message:</h3>
          <div style="background-color: #f9f9f9; padding: 15px; border-radius: 4px; border-left: 4px solid #16a34a; white-space: pre-wrap;">${message}</div>
        </div>
      `
    };

    // 2. Send auto-reply to the customer
    const userMailOptions = {
      from: emailFrom,
      to: email,
      subject: 'We have received your message! - Momentrix Media',
      text: `Hi ${firstName},\n\nThank you for reaching out to Momentrix Media. We have received your inquiry regarding "${service || 'General'}" and our digital transformation team will get back to you within 24 hours.\n\nHere is a summary of your inquiry:\nName: ${firstName} ${lastName}\nEmail: ${email}\nPhone: ${phone}\nService: ${service || 'General'}\nMessage: ${message}\n\nBest regards,\nThe Momentrix Team`,
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
            .summary-box { background-color: #f1f5f9; border-radius: 12px; padding: 20px; margin-bottom: 32px; border-left: 4px solid #16a34a; }
            .summary-box h3 { margin-top: 0; margin-bottom: 12px; font-size: 14px; font-weight: 700; color: #475569; text-transform: uppercase; letter-spacing: 0.5px; }
            .summary-item { font-size: 13px; margin-bottom: 8px; line-height: 1.5; }
            .summary-item strong { color: #0f172a; }
            .footer { background-color: #f1f5f9; padding: 24px 32px; text-align: center; border-top: 1px solid #e2e8f0; font-size: 12px; color: #64748b; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>MOMENTRIX MEDIA</h1>
            </div>
            <div class="content">
              <span class="badge">Inquiry Received</span>
              <h2>Thank You for Contacting Us!</h2>
              <p>Hi ${firstName},</p>
              <p>We appreciate you reaching out. This email confirms that we have successfully received your inquiry.</p>
              <p>Our digital transformation team will review your message and we'll get back to you within 24 hours to address your request or schedule a consultation call.</p>
              
              <div class="summary-box">
                <h3>Your Message Details</h3>
                <div class="summary-item"><strong>Phone Number:</strong> ${phone}</div>
                <div class="summary-item"><strong>Service of Interest:</strong> ${service || 'General Inquiry'}</div>
                <div class="summary-item"><strong>Submitted Message:</strong></div>
                <div style="font-size: 13px; font-style: italic; color: #475569; margin-top: 6px; white-space: pre-wrap;">"${message}"</div>
              </div>
              
              <p>If you need immediate assistance or want to update any details, feel free to reply directly to this email.</p>
            </div>
            <div class="footer">
              <p>© ${new Date().getFullYear()} Momentrix Media. Ground floor, 1-12, 25, 3rd Line, Chandramouli Nagar, Guntur, AP 522007</p>
              <p>You received this email because you submitted a contact inquiry on our website.</p>
            </div>
          </div>
        </body>
        </html>
      `
    };

    // Send both emails
    await sendMailHelper(companyMailOptions);
    await sendMailHelper(userMailOptions);

    res.status(200).json({ success: true, message: 'Message sent successfully!' });
  } catch (error) {
    console.error('Error handling contact form submission:', error);
    res.status(500).json({ error: 'An error occurred while sending your message. Please try again later.' });
  }
});

module.exports = router;
