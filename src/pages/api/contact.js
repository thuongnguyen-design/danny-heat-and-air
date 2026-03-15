import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  // We only want to accept form submissions (POST requests)
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { name, phone, email, service } = req.body;

  // Set up the digital postman using your environment variables
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  try {
    // Build and send the actual email
    await transporter.sendMail({
      from: `"${name}" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER, // Sends it to your own email address
      replyTo: email, // If you hit "Reply" in Gmail, it goes to the customer
      subject: `NEW LEAD: ${service} from ${name}`,
      html: `
        <div style="font-family: sans-serif; padding: 20px; background: #f4f5f7;">
          <h2 style="color: #001f3f;">New Service Booking!</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Phone:</strong> <a href="tel:${phone}">${phone}</a></p>
          <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
          <p><strong>Service Needed:</strong> ${service}</p>
        </div>
      `,
    });

    res.status(200).json({ success: true });
  } catch (error) {
    console.error('Email error:', error);
    res.status(500).json({ success: false, error: 'Failed to send email' });
  }
}
