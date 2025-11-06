import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();

    // Format the email content based on booking type
    let emailContent = '';

    if (data.type === 'hotel') {
      emailContent = `
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background: linear-gradient(135deg, #1e40af 0%, #7c3aed 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
    .content { background: #f9fafb; padding: 30px; border-radius: 0 0 10px 10px; }
    .field { margin: 15px 0; padding: 10px; background: white; border-left: 4px solid #1e40af; }
    .field-label { font-weight: bold; color: #1e40af; }
    .footer { margin-top: 20px; text-align: center; color: #666; font-size: 12px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>🏨 New Hotel Booking Request</h1>
    </div>
    <div class="content">
      <div class="field">
        <div class="field-label">Customer Name:</div>
        <div>${data.name}</div>
      </div>
      <div class="field">
        <div class="field-label">WhatsApp Number:</div>
        <div>${data.whatsapp}</div>
      </div>
      <div class="field">
        <div class="field-label">Destination:</div>
        <div>${data.destination}</div>
      </div>
      ${data.hotelType ? `<div class="field"><div class="field-label">Hotel Type:</div><div>${data.hotelType}</div></div>` : ''}
      ${data.location ? `<div class="field"><div class="field-label">Location:</div><div>${data.location}</div></div>` : ''}
      ${data.amenities ? `<div class="field"><div class="field-label">Amenities:</div><div>${data.amenities}</div></div>` : ''}
      <div class="field">
        <div class="field-label">Check-in Date:</div>
        <div>${data.checkIn}</div>
      </div>
      <div class="field">
        <div class="field-label">Check-out Date:</div>
        <div>${data.checkOut}</div>
      </div>
      <div class="field">
        <div class="field-label">Rooms & Guests:</div>
        <div>${data.rooms}</div>
      </div>
    </div>
    <div class="footer">
      <p>Sent from www.houseianabooking.com</p>
    </div>
  </div>
</body>
</html>
      `;
    } else if (data.type === 'flight') {
      emailContent = `
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background: linear-gradient(135deg, #1e40af 0%, #7c3aed 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
    .content { background: #f9fafb; padding: 30px; border-radius: 0 0 10px 10px; }
    .field { margin: 15px 0; padding: 10px; background: white; border-left: 4px solid #1e40af; }
    .field-label { font-weight: bold; color: #1e40af; }
    .footer { margin-top: 20px; text-align: center; color: #666; font-size: 12px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>✈️ New Flight Booking Request</h1>
    </div>
    <div class="content">
      <div class="field">
        <div class="field-label">Customer Name:</div>
        <div>${data.name}</div>
      </div>
      <div class="field">
        <div class="field-label">WhatsApp Number:</div>
        <div>${data.whatsapp}</div>
      </div>
      <div class="field">
        <div class="field-label">Flight Type:</div>
        <div>${data.flightType}</div>
      </div>
      ${data.priorities ? `<div class="field"><div class="field-label">Priorities:</div><div>${data.priorities}</div></div>` : ''}
      <div class="field">
        <div class="field-label">Route:</div>
        <div>${data.route}</div>
      </div>
      ${data.departureDate ? `<div class="field"><div class="field-label">Departure Date:</div><div>${data.departureDate}</div></div>` : ''}
      ${data.returnDate ? `<div class="field"><div class="field-label">Return Date:</div><div>${data.returnDate}</div></div>` : ''}
      <div class="field">
        <div class="field-label">Cabin Class:</div>
        <div>${data.cabin}</div>
      </div>
      <div class="field">
        <div class="field-label">Passengers:</div>
        <div>${data.adults} Adults${data.children > 0 ? `, ${data.children} Children` : ''}</div>
      </div>
    </div>
    <div class="footer">
      <p>Sent from www.houseianabooking.com</p>
    </div>
  </div>
</body>
</html>
      `;
    } else if (data.type === 'meetAssist') {
      emailContent = `
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background: linear-gradient(135deg, #1e40af 0%, #7c3aed 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
    .content { background: #f9fafb; padding: 30px; border-radius: 0 0 10px 10px; }
    .field { margin: 15px 0; padding: 10px; background: white; border-left: 4px solid #1e40af; }
    .field-label { font-weight: bold; color: #1e40af; }
    .footer { margin-top: 20px; text-align: center; color: #666; font-size: 12px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>🤝 New Meet & Assist Booking</h1>
    </div>
    <div class="content">
      <div class="field">
        <div class="field-label">Customer Name:</div>
        <div>${data.name}</div>
      </div>
      <div class="field">
        <div class="field-label">WhatsApp Number:</div>
        <div>${data.whatsapp}</div>
      </div>
      <div class="field">
        <div class="field-label">Airport:</div>
        <div>${data.airport}</div>
      </div>
      <div class="field">
        <div class="field-label">Service Type:</div>
        <div>${data.serviceType}</div>
      </div>
      <div class="field">
        <div class="field-label">Flight Number:</div>
        <div>${data.flightNumber}</div>
      </div>
      <div class="field">
        <div class="field-label">Flight Date:</div>
        <div>${data.flightDate}</div>
      </div>
      <div class="field">
        <div class="field-label">Flight Time:</div>
        <div>${data.flightTime}</div>
      </div>
      <div class="field">
        <div class="field-label">Number of Travelers:</div>
        <div>${data.travelers}</div>
      </div>
    </div>
    <div class="footer">
      <p>Sent from www.houseianabooking.com</p>
    </div>
  </div>
</body>
</html>
      `;
    } else if (data.type === 'visa') {
      emailContent = `
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background: linear-gradient(135deg, #1e40af 0%, #7c3aed 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
    .content { background: #f9fafb; padding: 30px; border-radius: 0 0 10px 10px; }
    .field { margin: 15px 0; padding: 10px; background: white; border-left: 4px solid #1e40af; }
    .field-label { font-weight: bold; color: #1e40af; }
    .footer { margin-top: 20px; text-align: center; color: #666; font-size: 12px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>📄 New Visa Application Request</h1>
    </div>
    <div class="content">
      <div class="field">
        <div class="field-label">Customer Name:</div>
        <div>${data.name}</div>
      </div>
      <div class="field">
        <div class="field-label">WhatsApp Number:</div>
        <div>${data.whatsapp}</div>
      </div>
      <div class="field">
        <div class="field-label">Destination Country:</div>
        <div>${data.country}</div>
      </div>
      <div class="field">
        <div class="field-label">Message:</div>
        <div>${data.message}</div>
      </div>
    </div>
    <div class="footer">
      <p>Sent from www.houseianabooking.com</p>
    </div>
  </div>
</body>
</html>
      `;
    } else if (data.type === 'contact') {
      emailContent = `
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background: linear-gradient(135deg, #1e40af 0%, #7c3aed 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
    .content { background: #f9fafb; padding: 30px; border-radius: 0 0 10px 10px; }
    .field { margin: 15px 0; padding: 10px; background: white; border-left: 4px solid #1e40af; }
    .field-label { font-weight: bold; color: #1e40af; }
    .message-box { margin: 15px 0; padding: 15px; background: white; border-left: 4px solid #1e40af; white-space: pre-wrap; }
    .footer { margin-top: 20px; text-align: center; color: #666; font-size: 12px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>📧 New Contact Form Submission</h1>
    </div>
    <div class="content">
      <div class="field">
        <div class="field-label">Name:</div>
        <div>${data.firstName} ${data.lastName}</div>
      </div>
      <div class="field">
        <div class="field-label">Email:</div>
        <div>${data.email}</div>
      </div>
      ${data.phone ? `<div class="field"><div class="field-label">Phone:</div><div>${data.countryCode || ''} ${data.phone}</div></div>` : ''}
      <div class="field">
        <div class="field-label">Subject:</div>
        <div>${data.subject}</div>
      </div>
      <div class="message-box">
        <div class="field-label">Message:</div>
        <div>${data.message}</div>
      </div>
    </div>
    <div class="footer">
      <p>Sent from www.houseianabooking.com - Contact Form</p>
    </div>
  </div>
</body>
</html>
      `;
    }

    // Send email using Resend
    const subjectMap: Record<string, string> = {
      hotel: 'New Hotel Booking Request',
      flight: 'New Flight Booking Request',
      meetAssist: 'New Meet & Assist Booking',
      visa: 'New Visa Application Request',
      contact: `Contact Form: ${data.subject || 'General Inquiry'}`,
    };

    const emailResponse = await resend.emails.send({
      from: 'Houseiana Booking <bookings@houseianabooking.com>',
      to: ['info@houseianabooking.com'],
      subject: subjectMap[data.type] || `New ${data.type} Request`,
      html: emailContent,
    });

    if (emailResponse.error) {
      console.error('Resend error:', emailResponse.error);
      throw new Error('Failed to send email');
    }

    return NextResponse.json({ success: true, id: emailResponse.data?.id });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to send email' },
      { status: 500 }
    );
  }
}
