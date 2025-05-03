// Next.js API route for handling contact form submissions
import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  // Only accept POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { name, email, message } = req.body;
    
    // Basic validation
    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Please fill all required fields' });
    }

    // Configure email transport
    // For production, you'll need to set up proper SMTP credentials
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL_USER || 'Twofinscharters@gmail.com',
        pass: process.env.EMAIL_PASS, // This should be set in environment variables
      },
      tls: {
        rejectUnauthorized: false // For development only, remove in production
      }
    });

    // Email content
    const mailOptions = {
      from: `"${name}" <${email}>`,
      to: 'Twofinscharters@gmail.com',
      subject: `Two Fins Charters - New Contact from ${name}`,
      text: `
        Name: ${name}
        Email: ${email}
        
        Message: 
        ${message}
      `,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `
    };

    // Send the email
    // In development, this will likely fail without proper SMTP credentials
    // For testing, you can check if the API is called correctly
    await transporter.sendMail(mailOptions);
    
    return res.status(200).json({ success: true, message: 'Email sent successfully!' });
  } catch (error) {
    console.error('Error sending email:', error);
    return res.status(500).json({ 
      error: 'Failed to send email', 
      details: error.message 
    });
  }
}