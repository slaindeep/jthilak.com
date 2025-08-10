import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json();

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, message: 'Invalid email address' },
        { status: 400 }
      );
    }

    // Log the email for now - in production, integrate with your email service
    // Examples: Mailchimp, SendGrid, ConvertKit, etc.
    console.log('Newsletter subscription:', email);

    // Here you would typically integrate with your email service provider
    // Example integrations:
    
    // For Mailchimp:
    // const response = await fetch(`https://${process.env.MAILCHIMP_SERVER_PREFIX}.api.mailchimp.com/3.0/lists/${process.env.MAILCHIMP_LIST_ID}/members`, {
    //   method: 'POST',
    //   headers: {
    //     Authorization: `Bearer ${process.env.MAILCHIMP_API_KEY}`,
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({
    //     email_address: email,
    //     status: 'subscribed',
    //   }),
    // });

    // For SendGrid:
    // const response = await fetch('https://api.sendgrid.com/v3/marketing/contacts', {
    //   method: 'PUT',
    //   headers: {
    //     Authorization: `Bearer ${process.env.SENDGRID_API_KEY}`,
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({
    //     contacts: [{ email }]
    //   }),
    // });

    // For now, simulate successful subscription
    await new Promise(resolve => setTimeout(resolve, 500));

    return NextResponse.json(
      { 
        success: true, 
        message: 'Successfully subscribed to newsletter',
        email: email
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Newsletter API error:', error);
    return NextResponse.json(
      { success: false, message: 'Internal server error' },
      { status: 500 }
    );
  }
}