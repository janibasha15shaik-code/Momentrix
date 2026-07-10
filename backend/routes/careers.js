const express = require('express');
const router = express.Router();
const { sendMailHelper } = require('../utils/mailer');

// POST /api/careers
router.post('/', async (req, res) => {
  const { firstName, lastName, email, phone, jobTitle, resumeName, resumeData } = req.body;

  if (!firstName || !lastName || !email || !phone || !jobTitle) {
    return res.status(400).json({ error: 'Please fill in all required fields.' });
  }

  const companyEmail = process.env.COMPANY_EMAIL || 'hello@momentrixmedia.com';
  const emailFrom = process.env.EMAIL_FROM || '"Momentrix Media" <hello@momentrixmedia.com>';

  try {
    // Parse the base64 resume file if provided
    let attachments = [];
    if (resumeName && resumeData) {
      // Extract the actual base64 content if it starts with data:URI prefix
      let fileContent = resumeData;
      if (resumeData.startsWith('data:')) {
        const commaIndex = resumeData.indexOf(',');
        if (commaIndex !== -1) {
          fileContent = resumeData.substring(commaIndex + 1);
        }
      }
      attachments.push({
        filename: resumeName,
        content: Buffer.from(fileContent, 'base64')
      });
    }

    // 1. Send notification to the company with resume attachment
    const companyMailOptions = {
      from: emailFrom,
      to: companyEmail,
      subject: `New Job Application - ${jobTitle}`,
      text: `New job application received:\n\nPosition: ${jobTitle}\nName: ${firstName} ${lastName}\nEmail: ${email}\nPhone: ${phone}\n\nDate: ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata', timeZoneName: 'short' })}`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; border: 1px solid #ddd; padding: 20px; border-radius: 8px;">
          <h2 style="color: #9333ea; border-bottom: 2px solid #faf5ff; padding-bottom: 10px;">New Job Application</h2>
          <p>You have received a new application for the following position:</p>
          <table style="width: 100%; border-collapse: collapse; margin-top: 15px; margin-bottom: 20px;">
            <tr>
              <td style="padding: 8px; border: 1px solid #eee; font-weight: bold; width: 150px;">Position:</td>
              <td style="padding: 8px; border: 1px solid #eee; font-weight: bold; color: #9333ea;">${jobTitle}</td>
            </tr>
            <tr>
              <td style="padding: 8px; border: 1px solid #eee; font-weight: bold;">Name:</td>
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
              <td style="padding: 8px; border: 1px solid #eee; font-weight: bold;">Resume Attachment:</td>
              <td style="padding: 8px; border: 1px solid #eee;">${resumeName || 'None'}</td>
            </tr>
            <tr>
              <td style="padding: 8px; border: 1px solid #eee; font-weight: bold;">Date:</td>
              <td style="padding: 8px; border: 1px solid #eee;">${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata', timeZoneName: 'short' })}</td>
            </tr>
          </table>
        </div>
      `,
      attachments: attachments
    };

    // 2. Send acknowledgement to the applicant
    const userMailOptions = {
      from: emailFrom,
      to: email,
      subject: `Application Received: ${jobTitle} - Momentrix Media`,
      text: `Hi ${firstName},\n\nThank you for applying for the "${jobTitle}" position at Momentrix Media. We have received your application and resume. Our hiring team will review your qualifications and contact you within 3-5 business days if your profile matches our requirements.\n\nBest regards,\nThe Momentrix Careers Team`,
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
            .badge { display: inline-block; background-color: #f3e8ff; color: #9333ea; font-weight: 700; font-size: 11px; padding: 6px 12px; border-radius: 9999px; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 16px; }
            .summary-box { background-color: #f8fafc; border-radius: 12px; padding: 20px; margin-bottom: 32px; border-left: 4px solid #9333ea; }
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
              <span class="badge">Application Received</span>
              <h2>Thank You for Applying!</h2>
              <p>Hi ${firstName},</p>
              <p>We appreciate your interest in joining Momentrix Media. This email confirms that we have successfully received your job application.</p>
              
              <div class="summary-box">
                <h3>Application Details</h3>
                <div class="summary-item"><strong>Applied Position:</strong> ${jobTitle}</div>
                <div class="summary-item"><strong>Resume Name:</strong> ${resumeName || 'None'}</div>
              </div>
              
              <p>Our hiring team will review your qualifications, portfolio, and experience against the requirements. If your profile matches our needs, we will reach out to you within 3-5 business days to schedule an initial screening interview.</p>
            </div>
            <div class="footer">
              <p>© ${new Date().getFullYear()} Momentrix Media. Ground floor, 1-12, 25, 3rd Line, Chandramouli Nagar, Guntur, AP 522007</p>
              <p>You received this email because you applied for a job position on our careers portal.</p>
            </div>
          </div>
        </body>
        </html>
      `
    };

    await sendMailHelper(companyMailOptions);
    await sendMailHelper(userMailOptions);

    res.status(200).json({ success: true, message: 'Application submitted successfully!' });
  } catch (error) {
    console.error('Error handling job application:', error);
    res.status(500).json({ error: 'An error occurred while submitting your application. Please try again later.' });
  }
});

module.exports = router;
