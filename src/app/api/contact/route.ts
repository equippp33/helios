import { NextRequest, NextResponse } from 'next/server';

// Initialize Resend without importing the full package to avoid React Email dependency
const RESEND_API_KEY = process.env.RESEND_API_KEY;

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { firstName, lastName, email, phoneNumber, subject, message } = body;

    // Validate required fields
    if (!firstName || !lastName || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Check if API key is available
    if (!RESEND_API_KEY) {
      console.error('RESEND_API_KEY is not set in environment variables');
      return NextResponse.json(
        { error: 'Email service not configured' },
        { status: 500 }
      );
    }

    // Send email using Resend API directly
    const emailResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'Contact Form <onboarding@resend.dev>', // Using Resend's default domain for now
        to: ['infohelioshippingandtrading@gmail.com'], // Your verified business email
        subject: `New Contact Form Submission: ${subject}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #003751; border-bottom: 2px solid #003751; padding-bottom: 10px;">
              New Contact Form Submission
            </h2>
            
            <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="color: #003751; margin-top: 0;">Contact Information</h3>
              <p><strong>Name:</strong> ${firstName} ${lastName}</p>
              <p><strong>Email:</strong> ${email}</p>
              <p><strong>Phone:</strong> ${phoneNumber || 'Not provided'}</p>
            </div>
            
            <div style="background-color: #fff; padding: 20px; border: 1px solid #e9ecef; border-radius: 8px;">
              <h3 style="color: #003751; margin-top: 0;">Subject</h3>
              <p style="font-weight: bold;">${subject}</p>
              
              <h3 style="color: #003751;">Message</h3>
              <p style="white-space: pre-wrap;">${message}</p>
            </div>
            
            <div style="margin-top: 20px; padding: 15px; background-color: #e8f4f8; border-radius: 8px;">
              <p style="margin: 0; font-size: 12px; color: #666;">
                This email was sent from the Helios Shipping and Trading contact form.
              </p>
            </div>
          </div>
        `,
        text: `
          New Contact Form Submission
          
          Name: ${firstName} ${lastName}
          Email: ${email}
          Phone: ${phoneNumber || 'Not provided'}
          
          Subject: ${subject}
          
          Message:
          ${message}
        `,
      }),
    });

    const emailResult = await emailResponse.json();

    if (!emailResponse.ok) {
      console.error('Resend API error:', {
        status: emailResponse.status,
        statusText: emailResponse.statusText,
        error: emailResult
      });
      
      // Return more specific error messages
      let errorMessage = 'Failed to send email';
      if (emailResponse.status === 401) {
        errorMessage = 'Invalid API key';
      } else if (emailResponse.status === 422) {
        errorMessage = 'Invalid email data';
      } else if (emailResponse.status === 429) {
        errorMessage = 'Rate limit exceeded';
      }
      
      return NextResponse.json(
        { 
          error: errorMessage,
          details: emailResult.message || 'Unknown error'
        },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: 'Email sent successfully', id: emailResult.id },
      { status: 200 }
    );

  } catch (error) {
    console.error('API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
