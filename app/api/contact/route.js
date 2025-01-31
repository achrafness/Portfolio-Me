import nodemailer from 'nodemailer';

export async function POST(request) {
  try {
    const { name, email, message } = await request.json();

    console.log('Request Body:', { name, email, message });

    // Validate required fields
    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ message: 'Please fill in all fields' }),
        {
          status: 400,
          headers: { 'Content-Type': 'application/json' },
        },
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return new Response(
        JSON.stringify({ message: 'Invalid email address' }),
        {
          status: 400,
          headers: { 'Content-Type': 'application/json' },
        },
      );
    }
    
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      auth: {
        user: process.env.EMAIL, 
        pass: process.env.PASS,
      },
    });

    // Verify the transporter
    transporter.verify((error, success) => {
      if (error) {
        console.error('Transporter verification failed:', error);
      } else {
        console.log('Transporter is ready to send emails');
      }
    });

    // Define the email options
    const mailOptions = {
      from: email, 
      to: 'a_nessighaoui@estin.dz',
      subject: `New Contact Form Submission from ${name}`,
      text: message, 
    };

    // Send the email
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent:', info);

    return new Response(
      JSON.stringify({ message: 'Email sent successfully!' }),
      {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      },
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return new Response(
      JSON.stringify({ message: 'Error sending email' }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      },
    );
  }
}