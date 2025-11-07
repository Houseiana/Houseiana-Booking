'use client';

import { useState } from 'react';
import { Calendar } from 'lucide-react';
import { RoomGuestPicker } from './RoomGuestPicker';
import { CitySelector } from './CitySelector';
import { SuccessMessage } from './SuccessMessage';

interface HotelMegaMenuProps {
  locale: 'en' | 'ar';
  onClose?: () => void;
}

export function HotelMegaMenu({ locale, onClose }: HotelMegaMenuProps) {
  const [name, setName] = useState('');
  const [countryCode, setCountryCode] = useState('+974');
  const [whatsapp, setWhatsapp] = useState('');
  const [destination, setDestination] = useState('');
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [rooms, setRooms] = useState([{ adults: 2, children: 0 }]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  // Handle name input - only allow letters and spaces
  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    // Allow only letters (English and Arabic) and spaces
    const regex = /^[a-zA-Z\u0600-\u06FF\s]*$/;
    if (regex.test(value)) {
      setName(value);
    }
  };

  // Handle WhatsApp input - only allow numbers
  const handleWhatsAppChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    // Allow only numbers
    const regex = /^[0-9]*$/;
    if (regex.test(value)) {
      setWhatsapp(value);
    }
  };

  // Get today's date in YYYY-MM-DD format
  const today = new Date().toISOString().split('T')[0];

  // Get minimum checkout date (day after check-in)
  const minCheckOut = checkIn
    ? new Date(new Date(checkIn).getTime() + 86400000).toISOString().split('T')[0]
    : today;

  const t = {
    hotelSearch: locale === 'ar' ? 'البحث عن فندق' : 'Hotel Search',
    fullName: locale === 'ar' ? 'الاسم الكامل' : 'Full Name',
    whatsapp: locale === 'ar' ? 'رقم واتساب' : 'WhatsApp Number',
    destination: locale === 'ar' ? 'الوجهة' : 'Destination',
    destinationPlaceholder: locale === 'ar' ? 'مدينة، فندق، أو معلم' : 'City, hotel, or landmark',
    checkIn: locale === 'ar' ? 'تسجيل الوصول' : 'Check-in',
    checkOut: locale === 'ar' ? 'تسجيل المغادرة' : 'Check-out',
    roomsGuests: locale === 'ar' ? 'الغرف والضيوف' : 'Rooms & Guests',
    submitRequest: locale === 'ar' ? 'إرسال الطلب' : 'Submit Request',
    submitting: locale === 'ar' ? 'جاري الإرسال...' : 'Submitting...',
  };


  const countryCodes = [
    { code: '+974', country: 'Qatar', flag: '🇶🇦' },
    { code: '+971', country: 'UAE', flag: '🇦🇪' },
    { code: '+966', country: 'Saudi Arabia', flag: '🇸🇦' },
    { code: '+965', country: 'Kuwait', flag: '🇰🇼' },
    { code: '+968', country: 'Oman', flag: '🇴🇲' },
    { code: '+973', country: 'Bahrain', flag: '🇧🇭' },
    { code: '+1', country: 'USA/Canada', flag: '🇺🇸' },
    { code: '+44', country: 'UK', flag: '🇬🇧' },
    { code: '+91', country: 'India', flag: '🇮🇳' },
    { code: '+92', country: 'Pakistan', flag: '🇵🇰' },
    { code: '+20', country: 'Egypt', flag: '🇪🇬' },
    { code: '+962', country: 'Jordan', flag: '🇯🇴' },
    { code: '+961', country: 'Lebanon', flag: '🇱🇧' },
    { code: '+90', country: 'Turkey', flag: '🇹🇷' },
    { code: '+49', country: 'Germany', flag: '🇩🇪' },
    { code: '+33', country: 'France', flag: '🇫🇷' },
    { code: '+39', country: 'Italy', flag: '🇮🇹' },
    { code: '+34', country: 'Spain', flag: '🇪🇸' },
  ];

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
        setCheckIn('');
        setCheckOut('');
        setRooms([{ adults: 2, children: 0 }]);
      } else {
        alert(locale === 'ar' ? 'فشل في إرسال الطلب. يرجى المحاولة مرة أخرى.' : 'Failed to submit. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert(locale === 'ar' ? 'فشل في إرسال الطلب. يرجى المحاولة مرة أخرى.' : 'Failed to submit. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full max-w-4xl rounded-2xl bg-gradient-to-br from-white to-gray-50 p-4 sm:p-6 md:p-8 shadow-2xl border border-gray-100">
      <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
        <div className="mb-6 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-2">{t.hotelSearch}</h3>
          <p className="text-sm text-gray-600">
            {locale === 'ar' ? 'أخبرنا بتفاصيل رحلتك' : 'Tell us about your trip'}
          </p>
        </div>

        {/* Full Name */}
        <div className="relative group">
          <label className="mb-2 block text-sm font-semibold text-gray-700 flex items-center gap-2">
            <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-primary/10 text-primary text-xs font-bold">1</span>
            {t.fullName}
            <span className="text-red-600 ml-1">*</span>
          </label>
          <input
            type="text"
            value={name}
            onChange={handleNameChange}
            className="w-full px-4 py-3.5 min-h-[44px] text-base rounded-xl border-2 border-gray-200 focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all duration-200 bg-white shadow-sm hover:shadow-md placeholder:text-gray-400"
            placeholder={locale === 'ar' ? 'أدخل اسمك الكامل' : 'Enter your full name'}
            required
          />
        </div>

        {/* WhatsApp Number */}
        <div className="relative group">
          <label className="mb-2 block text-sm font-semibold text-gray-700 flex items-center gap-2">
            <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-primary/10 text-primary text-xs font-bold">2</span>
            {t.whatsapp}
            <span className="text-red-600 ml-1">*</span>
          </label>
          <div className="flex gap-2">
            <select
              value={countryCode}
              onChange={(e) => setCountryCode(e.target.value)}
              className="w-24 sm:w-32 px-2 sm:px-3 py-3.5 min-h-[44px] text-base rounded-xl border-2 border-gray-200 focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all duration-200 bg-white shadow-sm hover:shadow-md cursor-pointer appearance-none bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20fill%3D%22none%22%20viewBox%3D%220%200%2020%2020%22%3E%3Cpath%20stroke%3D%22%236b7280%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%221.5%22%20d%3D%22M6%208l4%204%204-4%22%2F%3E%3C%2Fsvg%3E')] bg-[length:1.5em] bg-[right_0.2rem_center] sm:bg-[right_0.3rem_center] bg-no-repeat pr-6 sm:pr-8"
            >
              {countryCodes.map((country) => (
                <option key={country.code} value={country.code}>
                  {country.flag} {country.code}
                </option>
              ))}
            </select>
            <input
              type="tel"
              value={whatsapp}
              onChange={handleWhatsAppChange}
              placeholder="30424433"
              className="flex-1 px-4 py-3.5 min-h-[44px] text-base rounded-xl border-2 border-gray-200 focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all duration-200 bg-white shadow-sm hover:shadow-md placeholder:text-gray-400"
              required
            />
          </div>
        </div>

        {/* Destination */}
        <div className="relative group">
            <label className="mb-2 block text-sm font-semibold text-gray-700 flex items-center gap-2">
              <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-primary/10 text-primary text-xs font-bold">3</span>
              {t.destination}
              <span className="text-red-600 ml-1">*</span>
            </label>
            <CitySelector
              value={destination}
              onChange={setDestination}
              placeholder={t.destinationPlaceholder}
              locale={locale}
              required
            />
          </div>

          {/* Check-in and Check-out */}
          <div className="grid gap-4 md:grid-cols-2">
            <div className="relative group">
              <label className="mb-2 flex items-center gap-2 text-sm font-semibold text-gray-700">
                <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-primary/10 text-primary text-xs font-bold">4</span>
                <Calendar size={16} className="text-primary" />
                {t.checkIn}
                <span className="text-red-600 ml-1">*</span>
              </label>
              <input
                type="date"
                value={checkIn}
                onChange={(e) => setCheckIn(e.target.value)}
                min={today}
                className="w-full px-4 py-3.5 min-h-[44px] text-base rounded-xl border-2 border-gray-200 focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all duration-200 bg-white shadow-sm hover:shadow-md [&::-webkit-calendar-picker-indicator]:cursor-pointer"
                required
              />
            </div>
            <div className="relative group">
              <label className="mb-2 flex items-center gap-2 text-sm font-semibold text-gray-700">
                <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-primary/10 text-primary text-xs font-bold">5</span>
                <Calendar size={16} className="text-primary" />
                {t.checkOut}
                <span className="text-red-600 ml-1">*</span>
              </label>
              <input
                type="date"
                value={checkOut}
                onChange={(e) => setCheckOut(e.target.value)}
                min={minCheckOut}
                className="w-full px-4 py-3.5 min-h-[44px] text-base rounded-xl border-2 border-gray-200 focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all duration-200 bg-white shadow-sm hover:shadow-md [&::-webkit-calendar-picker-indicator]:cursor-pointer"
                required
              />
            </div>
          </div>

          {/* Rooms & Guests Picker */}
          <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-5 border border-primary/10">
            <label className="mb-3 block text-sm font-semibold text-gray-700 flex items-center gap-2">
              <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-primary/10 text-primary text-xs font-bold">6</span>
              {t.roomsGuests}
            </label>
            <RoomGuestPicker value={rooms} onChange={setRooms} locale={locale} />
          </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="btn-primary flex w-full items-center justify-center gap-3 py-4 min-h-[48px] text-base sm:text-lg font-bold shadow-xl hover:shadow-2xl transform hover:scale-[1.02] transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? t.submitting : t.submitRequest}
        </button>
      </form>

      {/* Success Message */}
      {showSuccess && (
        <SuccessMessage
          locale={locale}
          onClose={() => {
            setShowSuccess(false);
            onClose?.();
          }}
        />
      )}
    </div>
  );
}
