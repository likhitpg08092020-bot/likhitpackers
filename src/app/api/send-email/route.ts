import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { formType, ...fields } = data; // formType: 'contact', 'quote', or 'chat'

    // Create a transporter using Gmail SMTP (user must provide real credentials in production)
    // For development, we'll configure it, but it will fail if EMAIL_USER and EMAIL_PASS are missing.
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER || 'likhitpg08092020@gmail.com',
        pass: process.env.EMAIL_PASS || 'your_gmail_app_password_here',
      },
    });

    let subject = '';
    let htmlContent = '';

    if (formType === 'contact') {
      subject = `New Contact Message from ${fields.name}`;
      htmlContent = `
        <h2>New Contact Message</h2>
        <p><strong>Name:</strong> ${fields.name}</p>
        <p><strong>Phone:</strong> ${fields.phone}</p>
        <p><strong>Email:</strong> ${fields.email}</p>
        <p><strong>Message:</strong> ${fields.message}</p>
      `;
    } else if (formType === 'quote') {
      subject = `New Quotation Request from ${fields.name}`;
      htmlContent = `
        <h2>New Quotation Request</h2>
        <p><strong>Name:</strong> ${fields.name}</p>
        <p><strong>Mobile:</strong> ${fields.mobile}</p>
        <p><strong>Email:</strong> ${fields.email}</p>
        <hr/>
        <h3>Moving Details</h3>
        <p><strong>From:</strong> ${fields.movingFrom}</p>
        <p><strong>To:</strong> ${fields.movingTo}</p>
        <p><strong>Date:</strong> ${fields.movingDate}</p>
        <p><strong>Service:</strong> ${fields.serviceRequired}</p>
        <p><strong>Size:</strong> ${fields.propertySize}</p>
      `;
    } else if (formType === 'chat') {
      subject = `New Chatbot Message from ${fields.name || 'Visitor'}`;
      htmlContent = `
        <h2>New Chatbot Inquiry</h2>
        <p><strong>Phone:</strong> ${fields.phone}</p>
        <p><strong>Message:</strong> ${fields.message}</p>
      `;
    }

    const mailOptions = {
      from: process.env.EMAIL_USER || 'likhitpg08092020@gmail.com',
      to: 'likhitpg08092020@gmail.com',
      subject: subject,
      html: htmlContent,
    };

    // Attempt to send email
    if (process.env.EMAIL_PASS) {
      await transporter.sendMail(mailOptions);
    } else {
      console.log('--- SIMULATED EMAIL SEND (Missing EMAIL_PASS in .env) ---');
      console.log(mailOptions);
    }

    return NextResponse.json({ success: true, message: 'Email processed successfully!' });
  } catch (error) {
    console.error('Email API Error:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to send email.' },
      { status: 500 }
    );
  }
}
