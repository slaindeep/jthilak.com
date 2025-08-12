import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import fs from 'fs';
import path from 'path';

interface ContactFormData {
  name: string;
  email: string;
  company?: string;
  phone?: string;
  subject: string;
  message: string;
}

export async function POST(request: NextRequest) {
  try {
    const formData: ContactFormData = await request.json();

    // Validate required fields
    const { name, email, subject, message, company, phone } = formData;
    
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { success: false, message: 'Please fill in all required fields' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, message: 'Invalid email address' },
        { status: 400 }
      );
    }

    // Validate message length
    const maxLength = parseInt(process.env.MAX_MESSAGE_LENGTH || '5000');
    if (message.length > maxLength) {
      return NextResponse.json(
        { success: false, message: 'Message is too long' },
        { status: 400 }
      );
    }

    // Sanitize input
    const sanitizedName = name.replace(/[<>]/g, '');
    const sanitizedEmail = email.replace(/[<>]/g, '');
    const sanitizedCompany = company?.replace(/[<>]/g, '') || '';
    const sanitizedPhone = phone?.replace(/[<>]/g, '') || '';
    const sanitizedSubject = subject.replace(/[<>]/g, '');
    const sanitizedMessage = message.replace(/[<>]/g, '');

    // Log submission (if enabled)
    if (process.env.ENABLE_LOGGING === 'true') {
      try {
        const logData = {
          timestamp: new Date().toISOString(),
          name: sanitizedName,
          email: sanitizedEmail,
          subject: sanitizedSubject,
          ip: request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || 'unknown'
        };
        
        const logFile = path.join(process.cwd(), 'contact_submissions.log');
        await fs.promises.appendFile(logFile, JSON.stringify(logData) + '\n');
      } catch (logError) {
        console.warn('Failed to log submission:', logError);
      }
    }

    // Create nodemailer transporter
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: parseInt(process.env.EMAIL_PORT || '587'),
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
      tls: {
        ciphers: 'SSLv3'
      }
    });

    // Generate professional HTML email template
    const currentTime = new Date().toLocaleString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      timeZoneName: 'short',
      timeZone: 'Asia/Dubai'
    });

    const phoneLink = sanitizedPhone ? `https://wa.me/${sanitizedPhone.replace(/[^0-9]/g, '')}` : '';

    const emailHTML = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9fafb;">
        <div style="background-color: white; padding: 30px; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
            <div style="border-bottom: 3px solid #0f766e; padding-bottom: 20px; margin-bottom: 30px;">
                <h1 style="color: #0f766e; margin: 0; font-size: 24px;">New Contact Form Submission</h1>
                <p style="color: #6b7280; margin: 5px 0 0 0; font-size: 14px;">TFF Legal Website - jthilak.com</p>
            </div>
            
            <div style="margin-bottom: 20px;">
                <h2 style="color: #374151; font-size: 18px; margin: 0 0 15px 0;">Contact Information</h2>
                <table style="width: 100%; border-collapse: collapse;">
                    <tr>
                        <td style="padding: 8px 0; font-weight: bold; color: #4b5563; width: 120px;">Name:</td>
                        <td style="padding: 8px 0; color: #111827;">${sanitizedName}</td>
                    </tr>
                    <tr>
                        <td style="padding: 8px 0; font-weight: bold; color: #4b5563;">Email:</td>
                        <td style="padding: 8px 0; color: #111827;">
                            <a href="mailto:${sanitizedEmail}" style="color: #0f766e; text-decoration: none;">${sanitizedEmail}</a>
                        </td>
                    </tr>
                    ${sanitizedCompany ? `
                    <tr>
                        <td style="padding: 8px 0; font-weight: bold; color: #4b5563;">Company:</td>
                        <td style="padding: 8px 0; color: #111827;">${sanitizedCompany}</td>
                    </tr>` : ''}
                    ${sanitizedPhone ? `
                    <tr>
                        <td style="padding: 8px 0; font-weight: bold; color: #4b5563;">Phone:</td>
                        <td style="padding: 8px 0; color: #111827;">
                            <a href="${phoneLink}" style="color: #0f766e; text-decoration: none;">${sanitizedPhone}</a>
                        </td>
                    </tr>` : ''}
                    <tr>
                        <td style="padding: 8px 0; font-weight: bold; color: #4b5563;">Subject:</td>
                        <td style="padding: 8px 0; color: #111827;">${sanitizedSubject}</td>
                    </tr>
                </table>
            </div>
            
            <div style="margin-bottom: 20px;">
                <h2 style="color: #374151; font-size: 18px; margin: 0 0 15px 0;">Message</h2>
                <div style="background-color: #f3f4f6; padding: 20px; border-radius: 6px; border-left: 4px solid #0f766e;">
                    <p style="margin: 0; color: #374151; line-height: 1.6; white-space: pre-wrap;">${sanitizedMessage}</p>
                </div>
            </div>
            
            <div style="border-top: 1px solid #e5e7eb; padding-top: 20px; margin-top: 30px;">
                <p style="color: #6b7280; font-size: 12px; margin: 0; text-align: center;">
                    This email was sent from the TFF Legal contact form on jthilak.com<br>
                    Time: ${currentTime}
                </p>
            </div>
        </div>
    </div>`;

    // Plain text version
    const plainText = `New Contact Form Submission from TFF Legal Website

Name: ${sanitizedName}
Email: ${sanitizedEmail}${sanitizedCompany ? `\nCompany: ${sanitizedCompany}` : ''}${sanitizedPhone ? `\nPhone: ${sanitizedPhone}` : ''}
Subject: ${sanitizedSubject}

Message:
${sanitizedMessage}

Sent at: ${currentTime}`;

    // Email options
    const mailOptions = {
      from: `"${process.env.EMAIL_FROM_NAME}" <${process.env.EMAIL_FROM}>`,
      to: process.env.EMAIL_TO,
      replyTo: sanitizedEmail,
      subject: `New Contact: ${sanitizedSubject} - ${sanitizedName}`,
      text: plainText,
      html: emailHTML,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    // Success response
    return NextResponse.json({
      success: true,
      message: 'Your message has been sent successfully. We will get back to you within 24 hours.',
      submissionId: `tff_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
    });

  } catch (error) {
    console.error('Contact API error:', error);
    return NextResponse.json(
      { 
        success: false, 
        message: 'There was an error sending your message. Please try again or contact us directly.',
        debug: process.env.NODE_ENV === 'development' ? (error instanceof Error ? error.message : String(error)) : undefined
      },
      { status: 500 }
    );
  }
}