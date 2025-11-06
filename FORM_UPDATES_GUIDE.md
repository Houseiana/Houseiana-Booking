# Form Updates Implementation Guide

## Summary of Changes

All booking forms need these updates:
1. Add red asterisk (*) for mandatory fields
2. Change "Search" buttons to "Submit"
3. Add HTML5 validation
4. Show success message after submission
5. Send form data to info@houseianabooking.com

## Changes for Each Form Component

### 1. HotelMegaMenu.tsx

**Add at top:**
```typescript
import { SuccessMessage } from './SuccessMessage';
const [showSuccess, setShowSuccess] = useState(false);
const [isSubmitting, setIsSubmitting] = useState(false);
```

**Update translations:**
```typescript
const t = {
  // ... existing translations
  submit: locale === 'ar' ? 'إرسال الطلب' : 'Submit Request',
  required: locale === 'ar' ? '*' : '*',
};
```

**Update handleSearch to handleSubmit:**
```typescript
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  if (!name || !whatsapp || !destination || !checkIn || !checkOut) {
    return; // Form validation will show browser errors
  }

  setIsSubmitting(true);

  try {
    const response = await fetch('/api/send-booking', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        type: 'hotel',
        name,
        whatsapp: `${countryCode}${whatsapp}`,
        destination,
        hotelType,
        location,
        amenities: amenities.join(', '),
        checkIn,
        checkOut,
        rooms: JSON.stringify(rooms),
      }),
    });

    if (response.ok) {
      setShowSuccess(true);
      // Reset form
      setName('');
      setWhatsapp('');
      setDestination('');
      setHotelType('');
      setLocation('');
      setAmenities([]);
      setCheckIn('');
      setCheckOut('');
      setRooms([{ adults: 2, children: 0 }]);
    }
  } catch (error) {
    console.error('Error submitting form:', error);
    alert('Failed to submit. Please try again.');
  } finally {
    setIsSubmitting(false);
  }
};
```

**Update all mandatory field labels** (add red asterisk):
```tsx
<label className="mb-2 block text-sm font-semibold text-gray-700 flex items-center gap-2">
  <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-primary/10 text-primary text-xs font-bold">1</span>
  {t.fullName}
  <span className="text-red-600 ml-1">*</span>
</label>
```

**Update Submit button:**
```tsx
<button
  type="submit"
  disabled={isSubmitting}
  className="btn-primary flex w-full items-center justify-center gap-3 py-4 text-lg font-bold shadow-xl hover:shadow-2xl transform hover:scale-[1.02] transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
>
  {isSubmitting ? (locale === 'ar' ? 'جاري الإرسال...' : 'Submitting...') : t.submit}
</button>
```

**Add success message at end:**
```tsx
{showSuccess && (
  <SuccessMessage
    locale={locale}
    onClose={() => {
      setShowSuccess(false);
      onClose?.();
    }}
  />
)}
```

### 2. FlightMegaMenu.tsx

Apply same changes as HotelMegaMenu:

**handleSubmit for flights:**
```typescript
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  setIsSubmitting(true);

  try {
    // Build route string
    let routeString = '';
    if (flightType === 'multiDestination') {
      routeString = multiCityFlights.map((f, i) =>
        `${i + 1}. ${f.from} → ${f.to} (${f.date})`
      ).join(', ');
    } else {
      routeString = `${from} → ${to}`;
    }

    const response = await fetch('/api/send-booking', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        type: 'flight',
        name,
        whatsapp: `${countryCode}${whatsapp}`,
        flightType,
        priorities: priorities.join(', '),
        route: routeString,
        departureDate,
        returnDate,
        cabin,
        adults,
        children,
      }),
    });

    if (response.ok) {
      setShowSuccess(true);
      // Reset form...
    }
  } catch (error) {
    console.error('Error:', error);
    alert('Failed to submit. Please try again.');
  } finally {
    setIsSubmitting(false);
  }
};
```

### 3. MeetAssistMegaMenu.tsx

**handleSubmit for meet & assist:**
```typescript
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  setIsSubmitting(true);

  try {
    const response = await fetch('/api/send-booking', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        type: 'meetAssist',
        name,
        whatsapp: `${countryCode}${whatsapp}`,
        airport,
        serviceType,
        flightNumber,
        flightDate,
        flightTime,
        travelers,
      }),
    });

    if (response.ok) {
      setShowSuccess(true);
      // Reset form...
    }
  } catch (error) {
    console.error('Error:', error);
    alert('Failed to submit. Please try again.');
  } finally {
    setIsSubmitting(false);
  }
};
```

### 4. VisaMegaMenu Component (if exists)

Same pattern - update to use email API.

## Mandatory Fields

Add red asterisk to these fields in ALL forms:

### HotelMegaMenu:
- Full Name *
- WhatsApp Number *
- Destination *
- Check-in Date *
- Check-out Date *

### FlightMegaMenu:
- Full Name *
- WhatsApp Number *
- From/To (or Multi-city routes) *
- Departure Date * (for non-multi-city)
- Cabin Class *
- Passengers *

### MeetAssistMegaMenu:
- Full Name *
- WhatsApp Number *
- Airport *
- Flight Number *
- Flight Date *
- Flight Time *

## Email Service Setup

The API uses Web3Forms (free service). To set it up:

1. Go to https://web3forms.com
2. Sign up and get your access key
3. Add to `.env.local`:
   ```
   WEB3FORMS_ACCESS_KEY=your_key_here
   ```

### Alternative: Use Resend (Recommended for Production)

1. Install: `npm install resend`
2. Get API key from https://resend.com
3. Update `/app/api/send-booking/route.ts`:

```typescript
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

// Replace fetch call with:
await resend.emails.send({
  from: 'bookings@houseianabooking.com',
  to: 'info@houseianabooking.com',
  subject: `New ${data.type} Booking Request`,
  html: emailContent,
});
```

## Testing Checklist

- [ ] All mandatory fields show red asterisk (*)
- [ ] Forms don't submit when mandatory fields are empty
- [ ] Browser shows validation errors for empty required fields
- [ ] Success message appears after submission
- [ ] Success message closes after 5 seconds or click
- [ ] Form resets after successful submission
- [ ] Email arrives at info@houseianabooking.com
- [ ] Email contains all form data
- [ ] WhatsApp integration still works
- [ ] Both English and Arabic work correctly

## Quick Implementation Steps

1. Create `.env.local` file with Web3Forms key
2. Update all 4 mega menu components
3. Test each form
4. Deploy to Vercel
5. Add environment variable in Vercel dashboard

Done! 🎉
