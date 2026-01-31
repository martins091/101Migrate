import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { to, subject, html, adminNotification = false } = body;

    if (adminNotification) {
      // Send to admin
      await resend.emails.send({
        from: 'Bookings <bookings@yourdomain.com>',
        to: process.env.ADMIN_EMAIL || 'admin@yourdomain.com',
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
        from: 'Bookings <bookings@yourdomain.com>',
        to: to,
        subject: subject,
        html: html,
      });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Email error:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
}