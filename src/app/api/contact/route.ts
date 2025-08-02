import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
  turnstileToken: string;
}

export async function POST(request: NextRequest) {
  try {
    const body: ContactFormData = await request.json();
    const { name, email, subject, message, turnstileToken } = body;

    // Validate required fields
    if (!name || !email || !subject || !message || !turnstileToken) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Verify Turnstile token
    const turnstileResponse = await fetch(
      'https://challenges.cloudflare.com/turnstile/v0/siteverify',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: `secret=${process.env.TURNSTILE_SECRET_KEY}&response=${turnstileToken}`,
      }
    );

    const turnstileResult = await turnstileResponse.json();

    if (!turnstileResult.success) {
      return NextResponse.json(
        { error: 'CAPTCHA verification failed' },
        { status: 400 }
      );
    }

    // Create transporter for SMTP
    const transporter = nodemailer.createTransport({
      service: 'gmail', // You can use other services like 'outlook', 'yahoo', etc.
      auth: {
        user: process.env.SMTP_EMAIL,
        pass: process.env.SMTP_PASSWORD, // Use App Password for Gmail
      },
    });

    // Email to you (receiving the contact form)
    const mailOptionsToYou = {
      from: process.env.SMTP_EMAIL,
      to: 'hokacristian@gmail.com',
      subject: `New Contact Form Submission: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2563eb; border-bottom: 2px solid #2563eb; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          
          <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #1e293b; margin-top: 0;">Contact Details</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
            <p><strong>Subject:</strong> ${subject}</p>
          </div>
          
          <div style="background-color: #ffffff; padding: 20px; border-left: 4px solid #2563eb; margin: 20px 0;">
            <h3 style="color: #1e293b; margin-top: 0;">Message</h3>
            <p style="line-height: 1.6; color: #374151;">${message.replace(/\n/g, '<br>')}</p>
          </div>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; color: #6b7280; font-size: 14px;">
            <p>This message was sent from your portfolio contact form.</p>
            <p>Time: ${new Date().toLocaleString()}</p>
          </div>
        </div>
      `,
    };

    // Auto-reply email to the sender
    const mailOptionsToSender = {
      from: process.env.SMTP_EMAIL,
      to: email,
      subject: 'Thank you for contacting me!',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2563eb; border-bottom: 2px solid #2563eb; padding-bottom: 10px;">
            Thank You for Your Message!
          </h2>
          
          <p>Hi ${name},</p>
          
          <p>Thank you for reaching out through my portfolio website. I have received your message about "<strong>${subject}</strong>" and I appreciate you taking the time to contact me.</p>
          
          <div style="background-color: #f0f9ff; padding: 20px; border-radius: 8px; border-left: 4px solid #2563eb; margin: 20px 0;">
            <h3 style="color: #1e40af; margin-top: 0;">What happens next?</h3>
            <ul style="color: #374151; line-height: 1.6;">
              <li>I typically respond to all messages within 24-48 hours</li>
              <li>I'll review your message carefully and provide a detailed response</li>
              <li>If you're interested in Code Mercenaries services, I'll schedule a consultation call</li>
            </ul>
          </div>
          
          <p>In the meantime, feel free to:</p>
          <ul style="color: #374151; line-height: 1.6;">
            <li>Check out my case studies on <a href="https://medium.com/@hokacristian" style="color: #2563eb;">Medium</a></li>
            <li>Connect with me on <a href="https://www.linkedin.com/in/hokacsa/" style="color: #2563eb;">LinkedIn</a></li>
            <li>Explore my projects on <a href="https://github.com/hokacristian" style="color: #2563eb;">GitHub</a></li>
          </ul>
          
          <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 30px 0;">
            <h3 style="color: #1e293b; margin-top: 0;">About Code Mercenaries</h3>
            <p style="color: #374151; line-height: 1.6;">
              As the founder of Code Mercenaries Software House, I specialize in delivering enterprise-grade solutions 
              including inventory management systems, learning management platforms, and IoT monitoring applications. 
              We've successfully served 10+ commercial clients with a 95% satisfaction rate.
            </p>
          </div>
          
          <p>Best regards,<br>
          <strong>Hoka Cristian Son</strong><br>
          Founder & Lead Developer<br>
          Code Mercenaries Software House</p>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; color: #6b7280; font-size: 14px;">
            <p>This is an automated response. Please do not reply to this email.</p>
            <p>If you need immediate assistance, please contact me directly at hokacristian@gmail.com</p>
          </div>
        </div>
      `,
    };

    // Send both emails
    await Promise.all([
      transporter.sendMail(mailOptionsToYou),
      transporter.sendMail(mailOptionsToSender),
    ]);

    return NextResponse.json(
      { success: 'Message sent successfully!' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send message. Please try again.' },
      { status: 500 }
    );
  }
}