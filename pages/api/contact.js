import { getDatabase } from '../../lib/mongodb';
import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { name, email, message, phone, subject } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ message: 'Missing required fields' });
  }

  try {
    const db = await getDatabase();

    // Insert into MongoDB
    const result = await db.collection('contacts').insertOne({
      name,
      email,
      message,
      phone: phone || null,
      subject: subject || null,
      createdAt: new Date(),
    });

    // Create Nodemailer transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: process.env.SMTP_PORT === '465', // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Compose email content
    const mailOptions = {
      from: process.env.EMAIL_FROM,
      to: process.env.EMAIL_TO,
      subject: `New Contact Form Submission${subject ? `: ${subject}` : ''}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ''}
        ${subject ? `<p><strong>Subject:</strong> ${subject}</p>` : ''}
        <p><strong>Message:</strong><br/>${message.replace(/\n/g, '<br/>')}</p>
        <p><em>Sent on ${new Date().toLocaleString()}</em></p>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return res.status(201).json({ message: 'Message sent successfully', id: result.insertedId });
  } catch (error) {
    console.error('Error handling contact submission:', error);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
}
