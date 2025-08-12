import nodemailer from 'nodemailer';

interface EmailData {
  name: string;
  email: string;
  company?: string;
  phone?: string;
  subject: string;
  message: string;
}

export async function sendContactEmail(data: EmailData) {
  // Create transporter using environment variables
  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: parseInt(process.env.EMAIL_PORT || '587'),
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
    tls: {
      rejectUnauthorized: false // Allow self-signed certificates
    }
  });

  // Verify connection configuration
  try {
    await transporter.verify();
    console.log('SMTP server is ready to send emails');
  } catch (error) {
    console.error('SMTP server error:', error);
    throw new Error('Email server configuration error');
  }

  // Email content for TFF Legal
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
              <td style="padding: 8px 0; color: #111827;">${data.name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #4b5563;">Email:</td>
              <td style="padding: 8px 0; color: #111827;">
                <a href="mailto:${data.email}" style="color: #0f766e; text-decoration: none;">${data.email}</a>
              </td>
            </tr>
            ${data.company ? `
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #4b5563;">Company:</td>
              <td style="padding: 8px 0; color: #111827;">${data.company}</td>
            </tr>
            ` : ''}
            ${data.phone ? `
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #4b5563;">Phone:</td>
              <td style="padding: 8px 0; color: #111827;">
                <a href="https://wa.me/${data.phone.replace(/[^0-9]/g, '')}" style="color: #0f766e; text-decoration: none;">${data.phone}</a>
              </td>
            </tr>
            ` : ''}
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #4b5563;">Subject:</td>
              <td style="padding: 8px 0; color: #111827;">${data.subject}</td>
            </tr>
          </table>
        </div>
        
        <div style="margin-bottom: 20px;">
          <h2 style="color: #374151; font-size: 18px; margin: 0 0 15px 0;">Message</h2>
          <div style="background-color: #f3f4f6; padding: 20px; border-radius: 6px; border-left: 4px solid #0f766e;">
            <p style="margin: 0; color: #374151; line-height: 1.6; white-space: pre-wrap;">${data.message}</p>
          </div>
        </div>
        
        <div style="border-top: 1px solid #e5e7eb; padding-top: 20px; margin-top: 30px;">
          <p style="color: #6b7280; font-size: 12px; margin: 0; text-align: center;">
            This email was sent from the TFF Legal contact form on jthilak.com<br>
            Time: ${new Date().toLocaleString('en-UAE', { timeZone: 'Asia/Dubai' })} (UAE Time)
          </p>
        </div>
      </div>
    </div>
  `;

  // Email options
  const mailOptions = {
    from: {
      name: 'TFF Legal Website',
      address: process.env.EMAIL_FROM || 'info@jthilak.com'
    },
    to: process.env.EMAIL_TO || 'info@jthilak.com',
    replyTo: data.email,
    subject: `New Contact: ${data.subject} - ${data.name}`,
    html: emailHTML,
    text: `
New Contact Form Submission from TFF Legal Website

Name: ${data.name}
Email: ${data.email}
${data.company ? `Company: ${data.company}` : ''}
${data.phone ? `Phone: ${data.phone}` : ''}
Subject: ${data.subject}

Message:
${data.message}

Sent at: ${new Date().toLocaleString('en-UAE', { timeZone: 'Asia/Dubai' })} (UAE Time)
    `.trim()
  };

  // Send the email
  try {
    const result = await transporter.sendMail(mailOptions);
    console.log('Email sent successfully:', result.messageId);
    return { success: true, messageId: result.messageId };
  } catch (error) {
    console.error('Error sending email:', error);
    throw error;
  }
}