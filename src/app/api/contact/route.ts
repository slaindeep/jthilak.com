import { NextRequest, NextResponse } from 'next/server';

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
    const { name, email, subject, message } = formData;
    
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

    // Log the contact form submission
    console.log('Contact form submission:', formData);

    // Here you would typically:
    // 1. Send an email notification to the law firm
    // 2. Store the inquiry in a database
    // 3. Send an auto-response to the client

    // Example email notification (using a service like SendGrid, SES, etc.)
    // const emailContent = {
    //   to: process.env.CONTACT_EMAIL,
    //   from: process.env.FROM_EMAIL,
    //   subject: `New Contact Form: ${subject}`,
    //   html: `
    //     <h3>New Contact Form Submission</h3>
    //     <p><strong>Name:</strong> ${name}</p>
    //     <p><strong>Email:</strong> ${email}</p>
    //     <p><strong>Company:</strong> ${company || 'Not provided'}</p>
    //     <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
    //     <p><strong>Subject:</strong> ${subject}</p>
    //     <p><strong>Message:</strong></p>
    //     <p>${message}</p>
    //   `
    // };

    // Simulate processing time
    await new Promise(resolve => setTimeout(resolve, 1000));

    return NextResponse.json(
      { 
        success: true, 
        message: 'Your message has been sent successfully. We will get back to you within 24 hours.',
        submissionId: Date.now().toString() // In production, use a proper ID
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Contact API error:', error);
    return NextResponse.json(
      { success: false, message: 'Internal server error. Please try again later.' },
      { status: 500 }
    );
  }
}