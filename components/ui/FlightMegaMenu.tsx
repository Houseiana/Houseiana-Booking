'use client';

import { useState } from 'react';
import { Plane, Calendar, Users, Plus, Trash2, ArrowRight } from 'lucide-react';
import { AirportSelector } from './AirportSelector';
import { SuccessMessage } from './SuccessMessage';

interface FlightMegaMenuProps {
  locale: 'en' | 'ar';
  onClose?: () => void;
}

interface FlightLeg {
  from: string;
  to: string;
  date: string;
}

export function FlightMegaMenu({ locale, onClose }: FlightMegaMenuProps) {
  const [name, setName] = useState('');
  const [countryCode, setCountryCode] = useState('+974');
  const [whatsapp, setWhatsapp] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');
  const [departureDate, setDepartureDate] = useState('');
  const [returnDate, setReturnDate] = useState('');
  const [cabin, setCabin] = useState('economy');
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [flightType, setFlightType] = useState('roundTrip');
  const [multiCityLegs, setMultiCityLegs] = useState<FlightLeg[]>([
    { from: '', to: '', date: '' },
    { from: '', to: '', date: '' },
  ]);

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

  // Get minimum return date (day after departure)
  const minReturn = departureDate
    ? new Date(new Date(departureDate).getTime() + 86400000).toISOString().split('T')[0]
    : today;

  const t = {
    flightSearch: locale === 'ar' ? 'البحث عن رحلة' : 'Flight Search',
    fullName: locale === 'ar' ? 'الاسم الكامل' : 'Full Name',
    whatsapp: locale === 'ar' ? 'رقم واتساب' : 'WhatsApp Number',
    origin: locale === 'ar' ? 'من' : 'From',
    destination: locale === 'ar' ? 'إلى' : 'To',
    departureDate: locale === 'ar' ? 'تاريخ المغادرة' : 'Departure Date',
    returnDate: locale === 'ar' ? 'تاريخ العودة' : 'Return Date',
    cabin: locale === 'ar' ? 'الدرجة' : 'Cabin',
    passengers: locale === 'ar' ? 'الركاب' : 'Passengers',
    adults: locale === 'ar' ? 'البالغين' : 'Adults',
    childrenUnder12: locale === 'ar' ? 'الأطفال (أقل من 12)' : 'Children (under 12)',
    economy: locale === 'ar' ? 'اقتصادية' : 'Economy',
    premiumEconomy: locale === 'ar' ? 'اقتصادية مميزة' : 'Premium Economy',
    business: locale === 'ar' ? 'درجة الأعمال' : 'Business',
    first: locale === 'ar' ? 'الدرجة الأولى' : 'First Class',
    searchFlights: locale === 'ar' ? 'البحث عن الرحلات' : 'Search Flights',
    submitRequest: locale === 'ar' ? 'إرسال الطلب' : 'Submit Request',
    submitting: locale === 'ar' ? 'جاري الإرسال...' : 'Submitting...',
    flightType: locale === 'ar' ? 'نوع الرحلة' : 'Flight Type',
    addFlight: locale === 'ar' ? 'إضافة رحلة أخرى' : 'Add Another Flight',
    removeFlight: locale === 'ar' ? 'إزالة الرحلة' : 'Remove Flight',
    flight: locale === 'ar' ? 'رحلة' : 'Flight',
    date: locale === 'ar' ? 'التاريخ' : 'Date',
  };

  const flightTypes = [
    { value: 'oneWay', label: locale === 'ar' ? 'رحلة ذهاب فقط' : 'One-Way Trip', emoji: '✈️' },
    { value: 'roundTrip', label: locale === 'ar' ? 'رحلة ذهاب وعودة' : 'Round Trip', emoji: '🔄' },
    { value: 'flexDestination', label: locale === 'ar' ? 'وجهة مرنة' : 'Flexible Destination Travel', emoji: '🗺️' },
    { value: 'flexDate', label: locale === 'ar' ? 'تاريخ مرن' : 'Flexible Date Travel', emoji: '📅' },
    { value: 'multiDestination', label: locale === 'ar' ? 'متعدد الوجهات' : 'Multi-Destination Travel', emoji: '🌍' },
  ];


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


  const addMultiCityLeg = () => {
    if (multiCityLegs.length < 5) {
      setMultiCityLegs([...multiCityLegs, { from: '', to: '', date: '' }]);
    }
  };

  const removeMultiCityLeg = (index: number) => {
    if (multiCityLegs.length > 2) {
      setMultiCityLegs(multiCityLegs.filter((_, i) => i !== index));
    }
  };

  const updateMultiCityLeg = (index: number, field: keyof FlightLeg, value: string) => {
    const updatedLegs = [...multiCityLegs];
    updatedLegs[index][field] = value;
    setMultiCityLegs(updatedLegs);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate required fields
    if (!name || !whatsapp) {
      return;
    }

    // Validate based on flight type
    if (flightType === 'multiDestination') {
      const allLegsValid = multiCityLegs.every(leg => leg.from && leg.to && leg.date);
      if (!allLegsValid) return;
    } else {
      if (!origin || !destination || !departureDate) return;
    }

    setIsSubmitting(true);

    try {
      // Build route string
      let routeString = '';
      if (flightType === 'multiDestination') {
        routeString = multiCityLegs.map((leg, i) =>
          `${i + 1}. ${leg.from} → ${leg.to} (${leg.date})`
        ).join(', ');
      } else {
        routeString = `${origin} → ${destination}`;
      }

      const response = await fetch('/api/send-booking', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          type: 'flight',
          name,
          whatsapp: `${countryCode}${whatsapp}`,
          flightType: flightTypes.find(ft => ft.value === flightType)?.label || flightType,
          route: routeString,
          departureDate: flightType !== 'multiDestination' ? departureDate : undefined,
          returnDate: returnDate || undefined,
          cabin: cabin === 'economy' ? t.economy : cabin === 'premiumEconomy' ? t.premiumEconomy : cabin === 'business' ? t.business : t.first,
          adults,
          children,
        }),
      });

      if (response.ok) {
        setShowSuccess(true);
        // Reset form
        setName('');
        setWhatsapp('');
        setOrigin('');
        setDestination('');
        setDepartureDate('');
        setReturnDate('');
        setCabin('economy');
        setAdults(1);
        setChildren(0);
        setFlightType('roundTrip');
        setMultiCityLegs([
          { from: '', to: '', date: '' },
          { from: '', to: '', date: '' },
        ]);
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
    <div className="w-full max-w-5xl rounded-2xl bg-gradient-to-br from-white to-gray-50 p-4 sm:p-6 shadow-2xl border border-gray-100 max-h-[85vh] overflow-y-auto">
      <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
        <div className="mb-4 text-center">
          <h3 className="text-xl font-bold text-gray-900 mb-1">{t.flightSearch}</h3>
          <p className="text-xs text-gray-600">
            {locale === 'ar' ? 'أخبرنا بتفاصيل رحلتك' : 'Tell us about your trip'}
          </p>
        </div>

        {/* Full Name */}
        <div className="relative group">
          <label className="mb-1.5 block text-sm font-semibold text-gray-700 flex items-center gap-2">
            <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-primary/10 text-primary text-xs font-bold">1</span>
            {t.fullName}
            <span className="text-red-600 ml-1">*</span>
          </label>
          <input
            type="text"
            value={name}
            onChange={handleNameChange}
            className="w-full px-3 py-2.5 min-h-[44px] rounded-xl border-2 border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all duration-200 bg-white shadow-sm hover:shadow-md placeholder:text-gray-400 text-base"
            placeholder={locale === 'ar' ? 'أدخل اسمك الكامل' : 'Enter your full name'}
            required
          />
        </div>

        {/* WhatsApp Number */}
        <div className="relative group">
          <label className="mb-1.5 block text-sm font-semibold text-gray-700 flex items-center gap-2">
            <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-primary/10 text-primary text-xs font-bold">2</span>
            {t.whatsapp}
            <span className="text-red-600 ml-1">*</span>
          </label>
          <div className="flex gap-2">
            <select
              value={countryCode}
              onChange={(e) => setCountryCode(e.target.value)}
              className="w-24 sm:w-28 px-2 py-2.5 min-h-[44px] rounded-xl border-2 border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all duration-200 bg-white shadow-sm hover:shadow-md cursor-pointer appearance-none bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20fill%3D%22none%22%20viewBox%3D%220%200%2020%2020%22%3E%3Cpath%20stroke%3D%22%236b7280%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%221.5%22%20d%3D%22M6%208l4%204%204-4%22%2F%3E%3C%2Fsvg%3E')] bg-[length:1.2em] bg-[right_0.2rem_center] bg-no-repeat pr-6 text-base"
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
              className="flex-1 px-3 py-2.5 min-h-[44px] rounded-xl border-2 border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all duration-200 bg-white shadow-sm hover:shadow-md placeholder:text-gray-400 text-base"
              required
            />
          </div>
        </div>

        {/* Flight Type */}
        <div className="relative group">
          <label className="mb-1.5 block text-sm font-semibold text-gray-700 flex items-center gap-2">
            <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-primary/10 text-primary text-xs font-bold">3</span>
            {t.flightType}
          </label>
          <select
            value={flightType}
            onChange={(e) => setFlightType(e.target.value)}
            className="w-full px-3 py-2.5 rounded-xl border-2 border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all duration-200 bg-white shadow-sm hover:shadow-md cursor-pointer appearance-none bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20fill%3D%22none%22%20viewBox%3D%220%200%2020%2020%22%3E%3Cpath%20stroke%3D%22%236b7280%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%221.5%22%20d%3D%22M6%208l4%204%204-4%22%2F%3E%3C%2Fsvg%3E')] bg-[length:1.2em] bg-[right_0.4rem_center] bg-no-repeat pr-8 text-sm"
          >
            {flightTypes.map((type) => (
              <option key={type.value} value={type.value}>
                {type.emoji} {type.label}
              </option>
            ))}
          </select>
        </div>

        {/* Flight Routes */}
        {flightType === 'multiDestination' ? (
          <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-xl p-4 border border-primary/10 space-y-3">
            <label className="flex items-center gap-2 text-sm font-semibold text-gray-700">
              <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-primary/10 text-primary text-xs font-bold">4</span>
              <Plane size={14} className="text-primary" />
              {locale === 'ar' ? 'مسار الرحلات' : 'Flight Routes'}
            </label>

            {multiCityLegs.map((leg, index) => (
              <div key={index} className="bg-white rounded-lg p-3 shadow-sm border border-gray-200 space-y-2">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-semibold text-gray-700 flex items-center gap-1.5">
                    <span className="inline-flex items-center justify-center w-4 h-4 rounded-full bg-primary text-white text-[10px] font-bold">
                      {index + 1}
                    </span>
                    {t.flight} {index + 1}
                  </span>
                  {multiCityLegs.length > 2 && (
                    <button
                      type="button"
                      onClick={() => removeMultiCityLeg(index)}
                      className="text-red-500 hover:text-red-700 p-0.5 rounded hover:bg-red-50 transition-colors"
                      title={t.removeFlight}
                    >
                      <Trash2 size={14} />
                    </button>
                  )}
                </div>

                <div className="grid gap-2 grid-cols-1 sm:grid-cols-[1fr_auto_1fr]">
                  <div>
                    <label className="mb-1 flex items-center gap-1 text-[10px] font-semibold text-gray-600 uppercase">
                      <Plane size={10} className="text-primary" />
                      {t.origin}
                    </label>
                    <AirportSelector
                      value={leg.from}
                      onChange={(value) => updateMultiCityLeg(index, 'from', value)}
                      placeholder={t.origin}
                      required
                    />
                  </div>

                  <div className="hidden sm:flex items-end pb-2">
                    <ArrowRight size={16} className="text-primary" />
                  </div>

                  <div>
                    <label className="mb-1 flex items-center gap-1 text-[10px] font-semibold text-gray-600 uppercase">
                      <Plane size={10} className="rotate-90 text-primary" />
                      {t.destination}
                    </label>
                    <AirportSelector
                      value={leg.to}
                      onChange={(value) => updateMultiCityLeg(index, 'to', value)}
                      placeholder={t.destination}
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-1 flex items-center gap-1 text-[10px] font-semibold text-gray-600 uppercase">
                    <Calendar size={10} className="text-primary" />
                    {t.date}
                  </label>
                  <input
                    type="date"
                    value={leg.date}
                    onChange={(e) => updateMultiCityLeg(index, 'date', e.target.value)}
                    min={today}
                    className="w-full px-3 py-2 min-h-[44px] rounded-lg border-2 border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all duration-200 bg-white text-base [&::-webkit-calendar-picker-indicator]:cursor-pointer"
                    required
                  />
                </div>
              </div>
            ))}

            {multiCityLegs.length < 5 && (
              <button
                type="button"
                onClick={addMultiCityLeg}
                className="w-full flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg border-2 border-dashed border-primary/30 text-primary hover:bg-primary/5 hover:border-primary transition-all duration-200 font-medium text-sm"
              >
                <Plus size={16} />
                {t.addFlight}
              </button>
            )}
          </div>
        ) : (
          <>
            {/* Single/Round Trip Routes */}
            <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-xl p-4 border border-primary/10">
              <div className="grid gap-3 md:grid-cols-2">
                <div className="relative group">
                  <label className="mb-1.5 flex items-center gap-2 text-sm font-semibold text-gray-700">
                    <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-primary/10 text-primary text-xs font-bold">4</span>
                    <Plane size={14} className="text-primary" />
                    {t.origin}
                    <span className="text-red-600 ml-1">*</span>
                  </label>
                  <AirportSelector
                    value={origin}
                    onChange={setOrigin}
                    placeholder={t.origin}
                    required
                  />
                </div>

                <div className="relative group">
                  <label className="mb-1.5 flex items-center gap-2 text-sm font-semibold text-gray-700">
                    <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-primary/10 text-primary text-xs font-bold">5</span>
                    <Plane size={14} className="rotate-90 text-primary" />
                    {t.destination}
                    <span className="text-red-600 ml-1">*</span>
                  </label>
                  <AirportSelector
                    value={destination}
                    onChange={setDestination}
                    placeholder={t.destination}
                    required
                  />
                </div>
              </div>
            </div>
          </>
        )}

        {/* Departure and Return Dates (only for non-multi-city) */}
        {flightType !== 'multiDestination' && (
          <div className="grid gap-3 md:grid-cols-2">
            <div className="relative group">
              <label className="mb-1.5 flex items-center gap-2 text-sm font-semibold text-gray-700">
                <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-primary/10 text-primary text-xs font-bold">6</span>
                <Calendar size={14} className="text-primary" />
                {t.departureDate}
                <span className="text-red-600 ml-1">*</span>
              </label>
              <input
                type="date"
                value={departureDate}
                onChange={(e) => setDepartureDate(e.target.value)}
                min={today}
                className="w-full px-3 py-2.5 min-h-[44px] rounded-xl border-2 border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all duration-200 bg-white shadow-sm hover:shadow-md text-base [&::-webkit-calendar-picker-indicator]:cursor-pointer"
                required
              />
            </div>
            <div className="relative group">
              <label className="mb-1.5 flex items-center gap-2 text-sm font-semibold text-gray-700">
                <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-primary/10 text-primary text-xs font-bold">7</span>
                <Calendar size={14} className="text-primary" />
                {t.returnDate} <span className="text-red-600 ml-1">*</span>
              </label>
              <input
                type="date"
                value={returnDate}
                onChange={(e) => setReturnDate(e.target.value)}
                min={minReturn}
                className="w-full px-3 py-2.5 min-h-[44px] rounded-xl border-2 border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all duration-200 bg-white shadow-sm hover:shadow-md text-base [&::-webkit-calendar-picker-indicator]:cursor-pointer"
                required
              />
            </div>
          </div>
        )}

        {/* Cabin Class */}
        <div className="relative group">
          <label className="mb-1.5 block text-sm font-semibold text-gray-700 flex items-center gap-2">
            <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-primary/10 text-primary text-xs font-bold">8</span>
            {t.cabin}
          </label>
          <select
            value={cabin}
            onChange={(e) => setCabin(e.target.value)}
            className="w-full px-3 py-2.5 rounded-xl border-2 border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all duration-200 bg-white shadow-sm hover:shadow-md cursor-pointer appearance-none bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20fill%3D%22none%22%20viewBox%3D%220%200%2020%2020%22%3E%3Cpath%20stroke%3D%22%236b7280%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%221.5%22%20d%3D%22M6%208l4%204%204-4%22%2F%3E%3C%2Fsvg%3E')] bg-[length:1.2em] bg-[right_0.4rem_center] bg-no-repeat pr-8 text-sm"
          >
            <option value="economy">{t.economy}</option>
            <option value="premium-economy">{t.premiumEconomy}</option>
            <option value="business">{t.business}</option>
            <option value="first">{t.first}</option>
          </select>
        </div>

        {/* Passengers */}
        <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-xl p-4 border border-primary/10">
          <label className="mb-3 flex items-center gap-2 text-sm font-semibold text-gray-700">
            <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-primary/10 text-primary text-xs font-bold">9</span>
            <Users size={16} className="text-primary" />
            {t.passengers}
          </label>
          <div className="grid gap-3 md:grid-cols-2">
            <div className="relative group">
              <label className="mb-1.5 block text-[10px] font-semibold text-gray-600 uppercase tracking-wide">{t.adults}</label>
              <input
                type="number"
                value={adults}
                onChange={(e) => setAdults(Math.max(1, parseInt(e.target.value) || 1))}
                min="1"
                max="9"
                className="w-full px-3 py-2 rounded-xl border-2 border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all duration-200 bg-white shadow-sm hover:shadow-md text-center text-base font-semibold"
                required
              />
            </div>
            <div className="relative group">
              <label className="mb-1.5 block text-[10px] font-semibold text-gray-600 uppercase tracking-wide">{t.childrenUnder12}</label>
              <input
                type="number"
                value={children}
                onChange={(e) => setChildren(Math.max(0, parseInt(e.target.value) || 0))}
                min="0"
                max="9"
                className="w-full px-3 py-2 rounded-xl border-2 border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all duration-200 bg-white shadow-sm hover:shadow-md text-center text-base font-semibold"
              />
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="btn-primary flex w-full items-center justify-center gap-2 py-3 min-h-[48px] text-base font-bold shadow-lg hover:shadow-xl transform hover:scale-[1.01] transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
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
