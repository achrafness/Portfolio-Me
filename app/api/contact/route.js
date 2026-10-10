import nodemailer from 'nodemailer';

const json = (message, status) =>
  new Response(JSON.stringify({ message }), {
    status,
    headers: { 'Content-Type': 'application/json' },
  });

export async function POST(request) {
  try {
    const body = await request.json().catch(() => ({}));
    const name = String(body.name ?? '').trim();
    const email = String(body.email ?? '').trim();
    const message = String(body.message ?? '').trim();

    // Validate required fields
    if (!name || !email || !message) {
      return json('Please fill in all fields', 400);
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return json('Invalid email address', 400);
    }

    if (name.length > 100 || email.length > 200 || message.length > 5000) {
      return json('Your message is too long', 400);
    }

    // EMAIL: the Gmail account that sends the message, PASS: its app password
    // Google shows app passwords as "abcd efgh ijkl mnop": drop the spaces and any pasted quotes
    const EMAIL = (process.env.EMAIL ?? '').trim().replace(/^["']|["']$/g, '');
    const PASS = (process.env.PASS ?? '').replace(/["'\s]/g, '');
    if (!EMAIL || !PASS) {
      console.error('Contact form: EMAIL and PASS are not set (see .env.example)');
      return json('The contact form is not configured yet', 500);
    }

    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: EMAIL,
        pass: PASS,
      },
    });

    // Gmail only sends as the authenticated account, so the visitor goes in replyTo
    await transporter.sendMail({
      from: `"${name.replace(/["\r\n]/g, '')} (portfolio)" <${EMAIL}>`,
      to: process.env.CONTACT_TO || EMAIL,
      replyTo: email,
      subject: `New Contact Form Submission from ${name.replace(/[\r\n]/g, ' ')}`,
      text: `From: ${name} <${email}>\n\n${message}`,
    });

    return json('Email sent successfully!', 200);
  } catch (error) {
    console.error('Error sending email:', error);
    return json('Error sending email', 500);
  }
}
