import { NextResponse } from 'next/server';

// Remove Resend initialization from module level
// This prevents build-time errors when RESEND_API_KEY is not available

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { to, subject, html, adminNotification = false } = body;

    // Check if RESEND_API_KEY is available at runtime
    const apiKey = process.env.RESEND_API_KEY;
    
    if (!apiKey) {
      // Log for debugging but don't fail the request
      console.log('RESEND_API_KEY not configured. Mocking email:', {
        to: adminNotification ? 'ADMIN' : to,
        subject,
        adminNotification,
        timestamp: new Date().toISOString(),
      });
      
      return NextResponse.json({ 
        success: true, 
        mock: true,
        message: 'Email would be sent with valid RESEND_API_KEY configuration' 
      });
    }

    // Dynamically import Resend only when we have an API key
    const { Resend } = await import('resend');
    const resend = new Resend(apiKey);

    if (adminNotification) {
      // Send to admin
      await resend.emails.send({
        from: 'Bookings <bookings@tinzwave.com>',
        to: process.env.ADMIN_EMAIL || 'info@tinzwave.com',
        subject: `💰 New Payment: ${subject}`,
        html: `
          <h2>New Payment Received!</h2>
          ${html}
          <p><strong>Time:</strong> ${new Date().toLocaleString()}</p>
        `,
      });
    } else {
      // Send to customer
      await resend.emails.send({
        from: 'Bookings <bookings@tinzwave.com>',
        to: to,
        subject: subject,
        html: html,
      });
    }

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error('Email error:', error);
    
    // Still return success so the booking doesn't fail
    // You might want to log this to an error tracking service
    return NextResponse.json({ 
      success: true,  // Changed from false to true to not break booking flow
      error: 'Email service issue, but booking was recorded',
      details: error.message 
    });
  }
}