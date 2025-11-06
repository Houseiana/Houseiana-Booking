'use client';

import { useState } from 'react';
import { Calendar, Search } from 'lucide-react';
import { RoomGuestPicker } from './RoomGuestPicker';
import { CitySelector } from './CitySelector';
import { useRouter } from 'next/navigation';

interface HotelMegaMenuProps {
  locale: 'en' | 'ar';
  onClose?: () => void;
}

export function HotelMegaMenu({ locale, onClose }: HotelMegaMenuProps) {
  const router = useRouter();
  const [name, setName] = useState('');
  const [countryCode, setCountryCode] = useState('+974');
  const [whatsapp, setWhatsapp] = useState('');
  const [destination, setDestination] = useState('');
  const [hotelType, setHotelType] = useState('');
  const [location, setLocation] = useState('');
  const [amenities, setAmenities] = useState<string[]>([]);
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [rooms, setRooms] = useState([{ adults: 2, children: 0 }]);

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
    hotelType: locale === 'ar' ? 'نوع الفندق' : 'Hotel Type',
    location: locale === 'ar' ? 'الموقع' : 'Location',
    amenities: locale === 'ar' ? 'المرافق' : 'Amenities',
    amenitiesOptional: locale === 'ar' ? '(اختياري)' : '(Optional)',
    checkIn: locale === 'ar' ? 'تسجيل الوصول' : 'Check-in',
    checkOut: locale === 'ar' ? 'تسجيل المغادرة' : 'Check-out',
    roomsGuests: locale === 'ar' ? 'الغرف والضيوف' : 'Rooms & Guests',
    searchHotels: locale === 'ar' ? 'البحث عن الفنادق' : 'Search Hotels',
  };

  const locations = [
    { value: '', label: locale === 'ar' ? 'أي موقع' : 'Any Location', emoji: '' },
    { value: 'downtown', label: locale === 'ar' ? 'وسط المدينة' : 'Downtown', emoji: '🏙️' },
    { value: 'airport', label: locale === 'ar' ? 'بالقرب من المطار' : 'Near Airport', emoji: '✈️' },
    { value: 'metro', label: locale === 'ar' ? 'بجانب محطة المترو' : 'Next to Metro Hub', emoji: '🚇' },
    { value: 'foodStreet', label: locale === 'ar' ? 'مقابل شارع الطعام' : 'Across from Food Street', emoji: '🍽️' },
    { value: 'historic', label: locale === 'ar' ? 'الحي التاريخي' : 'Historic Quarter', emoji: '🏛️' },
    { value: 'nationalPark', label: locale === 'ar' ? 'بوابة المتنزه الوطني' : 'National Park Gateway', emoji: '🌳' },
    { value: 'cruisePort', label: locale === 'ar' ? 'قريب من ميناء الرحلات البحرية' : 'Close to Cruise Port', emoji: '⛴️' },
  ];

  const amenitiesList = [
    { value: 'breakfast', label: locale === 'ar' ? 'إفطار مجاني' : 'Free Breakfast', emoji: '🍳' },
    { value: 'petFriendly', label: locale === 'ar' ? 'صديق للحيوانات' : 'Pet-Friendly', emoji: '🐾' },
    { value: 'smokeFree', label: locale === 'ar' ? 'خالٍ من التدخين' : 'Smoke-Free', emoji: '🚭' },
    { value: 'pool', label: locale === 'ar' ? 'مسبح' : 'Pool', emoji: '🏊' },
    { value: 'evCharging', label: locale === 'ar' ? 'شحن السيارات الكهربائية' : 'EV Charging', emoji: '🔌' },
    { value: 'airportShuttle', label: locale === 'ar' ? 'خدمة نقل المطار' : 'Airport Shuttle', emoji: '🚐' },
    { value: 'wifi', label: locale === 'ar' ? 'واي فاي عالي السرعة' : 'High-Speed WiFi', emoji: '📶' },
    { value: 'golfCourse', label: locale === 'ar' ? 'ملعب جولف' : 'Golf Course', emoji: '⛳' },
    { value: 'privateBeach', label: locale === 'ar' ? 'شاطئ خاص' : 'Private Beach', emoji: '🏖️' },
  ];

  const toggleAmenity = (value: string) => {
    setAmenities((prev) =>
      prev.includes(value) ? prev.filter((a) => a !== value) : [...prev, value]
    );
  };

  const hotelTypes = [
    { value: '', label: locale === 'ar' ? 'أي نوع' : 'Any Type', emoji: '' },
    { value: 'business', label: locale === 'ar' ? 'سفر الأعمال' : 'Business Travel', emoji: '🏢' },
    { value: 'beach', label: locale === 'ar' ? 'منتجع شاطئي' : 'Beach Resort', emoji: '🏖️' },
    { value: 'boutique', label: locale === 'ar' ? 'فندق فني بوتيك' : 'Boutique Art Hotel', emoji: '🎨' },
    { value: 'budget', label: locale === 'ar' ? 'إقامة اقتصادية' : 'Budget Smart Stays', emoji: '🧳' },
    { value: 'ski', label: locale === 'ar' ? 'منتجع تزلج' : 'Ski-In/Ski-Out Lodge', emoji: '🎿' },
    { value: 'historic', label: locale === 'ar' ? 'فندق تاريخي' : 'Historic Landmark Hotel', emoji: '🏰' },
    { value: 'airport', label: locale === 'ar' ? 'فندق المطار' : 'Airport Transit Hotel', emoji: '✈️' },
    { value: 'luxury', label: locale === 'ar' ? 'منتجع فاخر' : 'Luxury Resort', emoji: '🍹' },
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

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Navigate to hotels page with search params
    const fullWhatsapp = `${countryCode}${whatsapp}`;
    const params = new URLSearchParams({
      name,
      whatsapp: fullWhatsapp,
      destination,
      ...(hotelType && { hotelType }),
      ...(location && { location }),
      ...(amenities.length > 0 && { amenities: amenities.join(',') }),
      checkIn,
      checkOut,
      rooms: JSON.stringify(rooms),
    });
    router.push(`/${locale}/hotels?${params.toString()}`);
    onClose?.();
  };

  return (
    <div className="w-full max-w-4xl rounded-2xl bg-gradient-to-br from-white to-gray-50 p-8 shadow-2xl border border-gray-100">
      <form onSubmit={handleSearch} className="space-y-6">
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
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
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
              onChange={(e) => setWhatsapp(e.target.value)}
              placeholder="30424433"
              className="flex-1 px-4 py-3.5 rounded-xl border-2 border-gray-200 focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all duration-200 bg-white shadow-sm hover:shadow-md placeholder:text-gray-400"
              required
            />
          </div>
        </div>

        {/* Destination */}
        <div className="relative group">
            <label className="mb-2 block text-sm font-semibold text-gray-700 flex items-center gap-2">
              <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-primary/10 text-primary text-xs font-bold">3</span>
              {t.destination}
            </label>
            <CitySelector
              value={destination}
              onChange={setDestination}
              placeholder={t.destinationPlaceholder}
              locale={locale}
              required
            />
          </div>

          {/* Hotel Type */}
          <div className="relative group">
            <label className="mb-2 block text-sm font-semibold text-gray-700 flex items-center gap-2">
              <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-primary/10 text-primary text-xs font-bold">4</span>
              {t.hotelType}
            </label>
            <select
              value={hotelType}
              onChange={(e) => setHotelType(e.target.value)}
              className="w-full px-4 py-3.5 rounded-xl border-2 border-gray-200 focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all duration-200 bg-white shadow-sm hover:shadow-md cursor-pointer appearance-none bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20fill%3D%22none%22%20viewBox%3D%220%200%2020%2020%22%3E%3Cpath%20stroke%3D%22%236b7280%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%221.5%22%20d%3D%22M6%208l4%204%204-4%22%2F%3E%3C%2Fsvg%3E')] bg-[length:1.5em] bg-[right_0.5rem_center] bg-no-repeat pr-10"
            >
              {hotelTypes.map((type) => (
                <option key={type.value} value={type.value}>
                  {type.emoji} {type.label}
                </option>
              ))}
            </select>
          </div>

          {/* Location */}
          <div className="relative group">
            <label className="mb-2 block text-sm font-semibold text-gray-700 flex items-center gap-2">
              <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-primary/10 text-primary text-xs font-bold">5</span>
              {t.location}
            </label>
            <select
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="w-full px-4 py-3.5 rounded-xl border-2 border-gray-200 focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all duration-200 bg-white shadow-sm hover:shadow-md cursor-pointer appearance-none bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20fill%3D%22none%22%20viewBox%3D%220%200%2020%2020%22%3E%3Cpath%20stroke%3D%22%236b7280%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%221.5%22%20d%3D%22M6%208l4%204%204-4%22%2F%3E%3C%2Fsvg%3E')] bg-[length:1.5em] bg-[right_0.5rem_center] bg-no-repeat pr-10"
            >
              {locations.map((loc) => (
                <option key={loc.value} value={loc.value}>
                  {loc.emoji} {loc.label}
                </option>
              ))}
            </select>
          </div>

          {/* Amenities */}
          <div className="relative group">
            <label className="mb-2 block text-sm font-semibold text-gray-700 flex items-center gap-2">
              <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-primary/10 text-primary text-xs font-bold">6</span>
              {t.amenities}
              <span className="text-gray-500 text-xs ml-1">{t.amenitiesOptional}</span>
            </label>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
              {amenitiesList.map((amenity) => (
                <button
                  key={amenity.value}
                  type="button"
                  onClick={() => toggleAmenity(amenity.value)}
                  className={`flex items-center gap-2 px-3 py-2.5 rounded-lg border-2 text-sm font-medium transition-all duration-200 ${
                    amenities.includes(amenity.value)
                      ? 'border-primary bg-gradient-to-r from-primary/10 to-primary/5 text-primary ring-2 ring-primary/20'
                      : 'border-gray-200 text-gray-700 hover:border-gray-300 bg-white hover:shadow-sm'
                  }`}
                >
                  <span className="text-lg">{amenity.emoji}</span>
                  <span className="text-xs">{amenity.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Check-in and Check-out */}
          <div className="grid gap-4 md:grid-cols-2">
            <div className="relative group">
              <label className="mb-2 flex items-center gap-2 text-sm font-semibold text-gray-700">
                <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-primary/10 text-primary text-xs font-bold">7</span>
                <Calendar size={16} className="text-primary" />
                {t.checkIn}
              </label>
              <input
                type="date"
                value={checkIn}
                onChange={(e) => setCheckIn(e.target.value)}
                min={today}
                className="w-full px-4 py-3.5 rounded-xl border-2 border-gray-200 focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all duration-200 bg-white shadow-sm hover:shadow-md"
                required
              />
            </div>
            <div className="relative group">
              <label className="mb-2 flex items-center gap-2 text-sm font-semibold text-gray-700">
                <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-primary/10 text-primary text-xs font-bold">8</span>
                <Calendar size={16} className="text-primary" />
                {t.checkOut}
              </label>
              <input
                type="date"
                value={checkOut}
                onChange={(e) => setCheckOut(e.target.value)}
                min={minCheckOut}
                className="w-full px-4 py-3.5 rounded-xl border-2 border-gray-200 focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all duration-200 bg-white shadow-sm hover:shadow-md"
                required
              />
            </div>
          </div>

          {/* Rooms & Guests Picker */}
          <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-5 border border-primary/10">
            <label className="mb-3 block text-sm font-semibold text-gray-700 flex items-center gap-2">
              <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-primary/10 text-primary text-xs font-bold">9</span>
              {t.roomsGuests}
            </label>
            <RoomGuestPicker value={rooms} onChange={setRooms} locale={locale} />
          </div>

        {/* Search Button */}
        <button
          type="submit"
          className="btn-primary flex w-full items-center justify-center gap-3 py-4 text-lg font-bold shadow-xl hover:shadow-2xl transform hover:scale-[1.02] transition-all duration-200"
        >
          <Search size={22} />
          {t.searchHotels}
        </button>
      </form>
    </div>
  );
}
