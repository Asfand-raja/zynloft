const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');
const Contact = require('../models/Contact');

// Configure Nodemailer transporter (Placeholder credentials)
const transporter = nodemailer.createTransport({
  service: 'gmail', // Use your preferred service
  auth: {
    user: process.env.EMAIL_USER || 'your-email@gmail.com',
    pass: process.env.EMAIL_PASS || 'your-app-password'
  }
});

// @route   POST /api/contact
// @desc    Submit a contact form
// @access  Public
router.post('/', async (req, res) => {
  const { name, email, company, message } = req.body;

  // Basic validation
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Please provide name, email, and message.' });
  }

  try {
    // 1. Save to MongoDB
    const newContact = new Contact({
      name,
      email,
      company,
      message
    });
    
    await newContact.save();

    // 2. Send Email Notification
    const mailOptions = {
      from: process.env.EMAIL_USER || 'your-email@gmail.com',
      to: process.env.NOTIFICATION_EMAIL || 'admin@zynloft.com', // Where you want to receive the notification
      subject: `New Contact Request from ${name} at ${company || 'N/A'}`,
      text: `You have received a new contact request on Zynloft:\n\nName: ${name}\nEmail: ${email}\nCompany: ${company || 'N/A'}\n\nMessage:\n${message}`
    };

    // We don't await this to speed up the response, unless you want guaranteed delivery before responding
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error('Error sending email to admin:', error);
      } else {
        console.log('Email sent to admin:', info.response);
      }
    });

    // 3. Send "Thank You" Auto-Reply to Client
    const clientMailOptions = {
      from: process.env.EMAIL_USER || 'your-email@gmail.com',
      to: email, // The client's email from the form
      subject: `Thank you for contacting Zynloft`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #333;">
          <h2 style="color: #e60000;">ZYNLOFT</h2>
          <h3>Hello ${name},</h3>
          <p>Thank you for reaching out to us. We have received your message regarding <strong>${company || 'Strategic Partnership'}</strong>.</p>
          <p>Our engineering team will review your inquiry and get back to you within 24 hours to discuss how we can build the next frontier together.</p>
          <br/>
          <p>Best regards,</p>
          <p><strong>The Zynloft Team</strong></p>
        </div>
      `
    };

    transporter.sendMail(clientMailOptions, (error, info) => {
      if (error) {
        console.error('Error sending auto-reply to client:', error);
      } else {
        console.log('Auto-reply sent to client:', info.response);
      }
    });

    res.status(201).json({ success: true, message: 'Message sent successfully!' });

  } catch (error) {
    console.error('Contact submission error:', error);
    res.status(500).json({ error: 'Server error while processing your request.' });
  }
});

module.exports = router;
