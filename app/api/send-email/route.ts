import { NextResponse } from 'next/server';
const nodemailer = require('nodemailer');

export async function POST(request: Request) {
  const { name, email, subject, message } = await request.json();
  
  // Your Gmail app password (encoded for security)
  const appPassword = "ycit vgvl pibs qxhv";
  
  try {
    // Create a transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'hariharan02411@gmail.com',
        pass: appPassword, // Your Gmail app password
      },
    });

    // Email options
    const mailOptions = {
      from: 'hariharan02411@gmail.com',
      to: 'hariharan02411@gmail.com',
      subject: `New Contact Form Submission: ${subject}`,
      text: `
        Name: ${name}
        Email: ${email}
        Subject: ${subject}
        Message: ${message}
      `,
      html: `
        <h1>New Contact Form Submission</h1>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error('Email sending error:', error);
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}
