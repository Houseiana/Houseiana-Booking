'use client';

import { useState } from 'react';
import { Plane, Calendar, Clock, Users } from 'lucide-react';
import { AirportSelector } from './AirportSelector';
import { SuccessMessage } from './SuccessMessage';

interface MeetAssistMegaMenuProps {
  locale: 'en' | 'ar';
  onClose?: () => void;
}

export function MeetAssistMegaMenu({ locale, onClose }: MeetAssistMegaMenuProps) {
  const [name, setName] = useState('');
  const [countryCode, setCountryCode] = useState('+974');
  const [whatsapp, setWhatsapp] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [airport, setAirport] = useState('');
  const [serviceType, setServiceType] = useState('arrival');
  const [flightNumber, setFlightNumber] = useState('');
  const [flightDate, setFlightDate] = useState('');
  const [flightTime, setFlightTime] = useState('');
  const [travelers, setTravelers] = useState(1);

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

  const t = {
    serviceSearch: locale === 'ar' ? 'حجز خدمة الاستقبال' : 'Meet & Assist Booking',
    fullName: locale === 'ar' ? 'الاسم الكامل' : 'Full Name',
    whatsapp: locale === 'ar' ? 'رقم واتساب' : 'WhatsApp Number',
    airport: locale === 'ar' ? 'المطار' : 'Airport',
    serviceType: locale === 'ar' ? 'نوع الخدمة' : 'Service Type',
    arrival: locale === 'ar' ? 'وصول' : 'Arrival',
    departure: locale === 'ar' ? 'مغادرة' : 'Departure',
    flightNumber: locale === 'ar' ? 'رقم الرحلة' : 'Flight Number',
    flightDate: locale === 'ar' ? 'تاريخ الرحلة' : 'Flight Date',
    flightTime: locale === 'ar' ? 'وقت الرحلة' : 'Flight Time',
    travelers: locale === 'ar' ? 'عدد المسافرين' : 'Number of Travelers',
    searchService: locale === 'ar' ? 'حجز الخدمة' : 'Book Service',
    submitRequest: locale === 'ar' ? 'إرسال الطلب' : 'Submit Request',
    submitting: locale === 'ar' ? 'جاري الإرسال...' : 'Submitting...',
    flightPlaceholder: locale === 'ar' ? 'مثال: QR123' : 'e.g. QR123',
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

    // Validate required fields
    if (!name || !whatsapp || !airport || !flightNumber || !flightDate || !flightTime) {
      return;
    }

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
          serviceType: serviceType === 'arrival' ? t.arrival : t.departure,
          flightNumber,
          flightDate,
          flightTime,
          travelers,
        }),
      });

      if (response.ok) {
        setShowSuccess(true);
        // Reset form
        setName('');
        setWhatsapp('');
        setAirport('');
        setServiceType('arrival');
        setFlightNumber('');
        setFlightDate('');
        setFlightTime('');
        setTravelers(1);
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
    <div className="w-full max-w-4xl rounded-2xl bg-gradient-to-br from-white to-gray-50 p-8 shadow-2xl border border-gray-100">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="mb-6 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-2">{t.serviceSearch}</h3>
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
            className="w-full px-4 py-3.5 rounded-xl border-2 border-gray-200 focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all duration-200 bg-white shadow-sm hover:shadow-md placeholder:text-gray-400"
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
              className="w-32 px-3 py-3.5 rounded-xl border-2 border-gray-200 focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all duration-200 bg-white shadow-sm hover:shadow-md cursor-pointer appearance-none bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20fill%3D%22none%22%20viewBox%3D%220%200%2020%2020%22%3E%3Cpath%20stroke%3D%22%236b7280%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%221.5%22%20d%3D%22M6%208l4%204%204-4%22%2F%3E%3C%2Fsvg%3E')] bg-[length:1.5em] bg-[right_0.3rem_center] bg-no-repeat pr-8"
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
              className="flex-1 px-4 py-3.5 rounded-xl border-2 border-gray-200 focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all duration-200 bg-white shadow-sm hover:shadow-md placeholder:text-gray-400"
              required
            />
          </div>
        </div>

        {/* Airport */}
        <div className="relative group">
          <label className="mb-2 flex items-center gap-2 text-sm font-semibold text-gray-700">
            <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-primary/10 text-primary text-xs font-bold">3</span>
            <Plane size={16} className="text-primary" />
            {t.airport}
            <span className="text-red-600 ml-1">*</span>
          </label>
          <AirportSelector
            value={airport}
            onChange={setAirport}
            placeholder={t.airport}
            required
          />
        </div>

        {/* Service Type */}
        <div>
          <label className="mb-3 block text-sm font-semibold text-gray-700 flex items-center gap-2">
            <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-primary/10 text-primary text-xs font-bold">4</span>
            {t.serviceType}
          </label>
          <div className="grid grid-cols-2 gap-3">
            <button
              type="button"
              onClick={() => setServiceType('arrival')}
              className={`rounded-xl border-2 py-4 px-4 font-semibold transition-all duration-200 shadow-sm hover:shadow-md ${
                serviceType === 'arrival'
                  ? 'border-primary bg-gradient-to-r from-primary/10 to-primary/5 text-primary ring-2 ring-primary/20'
                  : 'border-gray-200 text-gray-600 hover:border-gray-300 bg-white'
              }`}
            >
              {t.arrival}
            </button>
            <button
              type="button"
              onClick={() => setServiceType('departure')}
              className={`rounded-xl border-2 py-4 px-4 font-semibold transition-all duration-200 shadow-sm hover:shadow-md ${
                serviceType === 'departure'
                  ? 'border-primary bg-gradient-to-r from-primary/10 to-primary/5 text-primary ring-2 ring-primary/20'
                  : 'border-gray-200 text-gray-600 hover:border-gray-300 bg-white'
              }`}
            >
              {t.departure}
            </button>
          </div>
        </div>

        {/* Flight Number */}
        <div className="relative group">
          <label className="mb-2 block text-sm font-semibold text-gray-700 flex items-center gap-2">
            <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-primary/10 text-primary text-xs font-bold">5</span>
            {t.flightNumber}
            <span className="text-red-600 ml-1">*</span>
          </label>
          <input
            type="text"
            value={flightNumber}
            onChange={(e) => setFlightNumber(e.target.value)}
            placeholder={t.flightPlaceholder}
            className="w-full px-4 py-3.5 rounded-xl border-2 border-gray-200 focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all duration-200 bg-white shadow-sm hover:shadow-md placeholder:text-gray-400"
            required
          />
        </div>

        {/* Flight Date and Time */}
        <div className="grid gap-4 md:grid-cols-2">
          <div className="relative group">
            <label className="mb-2 flex items-center gap-2 text-sm font-semibold text-gray-700">
              <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-primary/10 text-primary text-xs font-bold">6</span>
              <Calendar size={16} className="text-primary" />
              {t.flightDate}
              <span className="text-red-600 ml-1">*</span>
            </label>
            <input
              type="date"
              value={flightDate}
              onChange={(e) => setFlightDate(e.target.value)}
              min={today}
              className="w-full px-4 py-3.5 rounded-xl border-2 border-gray-200 focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all duration-200 bg-white shadow-sm hover:shadow-md"
              required
            />
          </div>
          <div className="relative group">
            <label className="mb-2 flex items-center gap-2 text-sm font-semibold text-gray-700">
              <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-primary/10 text-primary text-xs font-bold">7</span>
              <Clock size={16} className="text-primary" />
              {t.flightTime}
              <span className="text-red-600 ml-1">*</span>
            </label>
            <input
              type="time"
              value={flightTime}
              onChange={(e) => setFlightTime(e.target.value)}
              className="w-full px-4 py-3.5 rounded-xl border-2 border-gray-200 focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all duration-200 bg-white shadow-sm hover:shadow-md"
              required
            />
          </div>
        </div>

        {/* Number of Travelers */}
        <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-5 border border-primary/10">
          <label className="mb-4 flex items-center gap-2 text-sm font-semibold text-gray-700">
            <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-primary/10 text-primary text-xs font-bold">8</span>
            <Users size={18} className="text-primary" />
            {t.travelers}
          </label>
          <input
            type="number"
            value={travelers}
            onChange={(e) => setTravelers(Math.max(1, parseInt(e.target.value) || 1))}
            min="1"
            max="10"
            className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all duration-200 bg-white shadow-sm hover:shadow-md text-center text-lg font-semibold"
            required
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="btn-primary flex w-full items-center justify-center gap-3 py-4 text-lg font-bold shadow-xl hover:shadow-2xl transform hover:scale-[1.02] transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
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
