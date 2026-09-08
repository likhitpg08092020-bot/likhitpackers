import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { formType, ...fields } = data; // formType: 'contact', 'quote', or 'chat'

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER || 'likhitpg08092020@gmail.com',
        pass: process.env.EMAIL_PASS, // Needs 16-character Google App Password
      },
    });

    let subject = '';
    let htmlContent = '';

    // 1. Email to the Business (Likhit Packers)
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
        <p><strong>Mobile:</strong> ${fields.mobile || fields.phone}</p>
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

    const businessMailOptions = {
      from: process.env.EMAIL_USER || 'likhitpg08092020@gmail.com',
      to: 'likhitpg08092020@gmail.com',
      subject: subject,
      html: htmlContent,
    };

    if (process.env.EMAIL_PASS) {
      // Send to business
      await transporter.sendMail(businessMailOptions);
      
      // 2. Email to the Customer (Auto-responder)
      if (fields.email) {
        const customerMailOptions = {
          from: process.env.EMAIL_USER || 'likhitpg08092020@gmail.com',
          to: fields.email,
          subject: 'Thank You for Contacting Likhit Packers and Movers!',
          html: `
            <h3>Dear ${fields.name || 'Customer'},</h3>
            <p>Thank you for reaching out to Likhit Packers and Movers.</p>
            <p>We have successfully received your request and our logistics team is currently reviewing your details. One of our representatives will contact you very soon with your quotation and next steps!</p>
            <br/>
            <p>Best Regards,</p>
            <p><strong>Likhit Packers and Movers</strong></p>
            <p>Phone: +91 9900231434</p>
          `,
        };
        await transporter.sendMail(customerMailOptions);
      }
    } else {
      console.log('--- SIMULATED EMAIL SEND (Missing EMAIL_PASS in .env) ---');
      console.log(businessMailOptions);
      return NextResponse.json(
        { success: false, message: 'Server missing EMAIL_PASS configuration.' },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true, message: 'Emails sent successfully!' });
  } catch (error) {
    console.error('Email API Error:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to send emails.' },
      { status: 500 }
    );
  }
}
