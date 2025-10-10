import { NextRequest, NextResponse } from 'next/server';

const RESEND_API_KEY = process.env.RESEND_API_KEY;

export async function GET() {
  try {
    // Check if API key is available
    if (!RESEND_API_KEY) {
      return NextResponse.json(
        { error: 'RESEND_API_KEY is not set in environment variables' },
        { status: 500 }
      );
    }

    // Test API key by sending a simple test email
    const emailResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'Test <onboarding@resend.dev>',
        to: ['infohelioshippingandtrading@gmail.com'],
        subject: 'Test Email from Helios Contact Form',
        html: '<p>This is a test email to verify the Resend integration is working.</p>',
        text: 'This is a test email to verify the Resend integration is working.',
      }),
    });

    const emailResult = await emailResponse.json();

    if (!emailResponse.ok) {
      console.error('Resend API test error:', {
        status: emailResponse.status,
        statusText: emailResponse.statusText,
        error: emailResult
      });
      
      return NextResponse.json({
        success: false,
        error: 'API key test failed',
        status: emailResponse.status,
        details: emailResult
      }, { status: 200 });
    }

    return NextResponse.json({
      success: true,
      message: 'Test email sent successfully!',
      emailId: emailResult.id
    }, { status: 200 });

  } catch (error) {
    console.error('Test API error:', error);
    return NextResponse.json(
      { 
        success: false,
        error: 'Internal server error',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}
