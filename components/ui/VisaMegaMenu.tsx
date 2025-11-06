'use client';

import { useState } from 'react';
import { MapPin, Users, Zap, Search } from 'lucide-react';
import { useRouter } from 'next/navigation';

interface VisaMegaMenuProps {
  locale: 'en' | 'ar';
  onClose?: () => void;
}

export function VisaMegaMenu({ locale, onClose }: VisaMegaMenuProps) {
  const router = useRouter();
  const [name, setName] = useState('');
  const [countryCode, setCountryCode] = useState('+974');
  const [whatsapp, setWhatsapp] = useState('');
  const [destinationCountry, setDestinationCountry] = useState('');
  const [nationality, setNationality] = useState('');
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [processingSpeed, setProcessingSpeed] = useState('standard');

  const t = {
    visaSearch: locale === 'ar' ? 'طلب التأشيرة' : 'Visa Application',
    fullName: locale === 'ar' ? 'الاسم الكامل' : 'Full Name',
    whatsapp: locale === 'ar' ? 'رقم واتساب' : 'WhatsApp Number',
    destinationCountry: locale === 'ar' ? 'الدولة المقصد' : 'Destination Country',
    nationality: locale === 'ar' ? 'الجنسية' : 'Nationality',
    applicants: locale === 'ar' ? 'المتقدمين' : 'Applicants',
    adults: locale === 'ar' ? 'البالغين' : 'Adults',
    childrenUnder12: locale === 'ar' ? 'الأطفال (أقل من 12)' : 'Children (under 12)',
    processingSpeed: locale === 'ar' ? 'سرعة المعالجة' : 'Processing Speed',
    standard: locale === 'ar' ? 'عادي (5-7 أيام)' : 'Standard (5-7 days)',
    expedited: locale === 'ar' ? 'سريع (2-3 أيام)' : 'Expedited (2-3 days)',
    urgent: locale === 'ar' ? 'عاجل (24 ساعة)' : 'Urgent (24 hours)',
    checkVisa: locale === 'ar' ? 'التحقق من متطلبات التأشيرة' : 'Check Visa Requirements',
    selectCountry: locale === 'ar' ? 'اختر الدولة' : 'Select Country',
    selectNationality: locale === 'ar' ? 'اختر الجنسية' : 'Select Nationality',
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

  const popularCountries = [
    { code: 'US', name: locale === 'ar' ? 'الولايات المتحدة' : 'United States' },
    { code: 'GB', name: locale === 'ar' ? 'المملكة المتحدة' : 'United Kingdom' },
    { code: 'CA', name: locale === 'ar' ? 'كندا' : 'Canada' },
    { code: 'AU', name: locale === 'ar' ? 'أستراليا' : 'Australia' },
    { code: 'DE', name: locale === 'ar' ? 'ألمانيا' : 'Germany' },
    { code: 'FR', name: locale === 'ar' ? 'فرنسا' : 'France' },
    { code: 'IT', name: locale === 'ar' ? 'إيطاليا' : 'Italy' },
    { code: 'ES', name: locale === 'ar' ? 'إسبانيا' : 'Spain' },
    { code: 'AE', name: locale === 'ar' ? 'الإمارات' : 'UAE' },
    { code: 'SA', name: locale === 'ar' ? 'السعودية' : 'Saudi Arabia' },
    { code: 'QA', name: locale === 'ar' ? 'قطر' : 'Qatar' },
    { code: 'TR', name: locale === 'ar' ? 'تركيا' : 'Turkey' },
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Navigate to visa page with search params
    const fullWhatsapp = `${countryCode}${whatsapp}`;
    const params = new URLSearchParams({
      name,
      whatsapp: fullWhatsapp,
      destination: destinationCountry,
      nationality,
      adults: adults.toString(),
      children: children.toString(),
      processing: processingSpeed,
    });
    router.push(`/${locale}/visa?${params.toString()}`);
    onClose?.();
  };

  return (
    <div className="w-full max-w-4xl rounded-2xl bg-gradient-to-br from-white to-gray-50 p-8 shadow-2xl border border-gray-100">
      <form onSubmit={handleSearch} className="space-y-6">
        <div className="mb-6 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-2">{t.visaSearch}</h3>
          <p className="text-sm text-gray-600">
            {locale === 'ar' ? 'دعنا نساعدك في طلب التأشيرة' : 'Let us help you with your visa'}
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

        {/* Destination Country */}
        <div className="relative group">
          <label className="mb-2 flex items-center gap-2 text-sm font-semibold text-gray-700">
            <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-primary/10 text-primary text-xs font-bold">3</span>
            <MapPin size={16} className="text-primary" />
            {t.destinationCountry}
          </label>
          <select
            value={destinationCountry}
            onChange={(e) => setDestinationCountry(e.target.value)}
            className="w-full px-4 py-3.5 rounded-xl border-2 border-gray-200 focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all duration-200 bg-white shadow-sm hover:shadow-md cursor-pointer appearance-none bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20fill%3D%22none%22%20viewBox%3D%220%200%2020%2020%22%3E%3Cpath%20stroke%3D%22%236b7280%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%221.5%22%20d%3D%22M6%208l4%204%204-4%22%2F%3E%3C%2Fsvg%3E')] bg-[length:1.5em] bg-[right_0.5rem_center] bg-no-repeat pr-10"
            required
          >
            <option value="">{t.selectCountry}</option>
            {popularCountries.map((country) => (
              <option key={country.code} value={country.code}>
                {country.name}
              </option>
            ))}
          </select>
        </div>

        {/* Nationality */}
        <div className="relative group">
          <label className="mb-2 flex items-center gap-2 text-sm font-semibold text-gray-700">
            <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-primary/10 text-primary text-xs font-bold">4</span>
            <MapPin size={16} className="text-primary" />
            {t.nationality}
          </label>
          <select
            value={nationality}
            onChange={(e) => setNationality(e.target.value)}
            className="w-full px-4 py-3.5 rounded-xl border-2 border-gray-200 focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all duration-200 bg-white shadow-sm hover:shadow-md cursor-pointer appearance-none bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20fill%3D%22none%22%20viewBox%3D%220%200%2020%2020%22%3E%3Cpath%20stroke%3D%22%236b7280%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%221.5%22%20d%3D%22M6%208l4%204%204-4%22%2F%3E%3C%2Fsvg%3E')] bg-[length:1.5em] bg-[right_0.5rem_center] bg-no-repeat pr-10"
            required
          >
            <option value="">{t.selectNationality}</option>
            {popularCountries.map((country) => (
              <option key={country.code} value={country.code}>
                {country.name}
              </option>
            ))}
          </select>
        </div>

        {/* Applicants */}
        <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-5 border border-primary/10">
          <label className="mb-4 flex items-center gap-2 text-sm font-semibold text-gray-700">
            <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-primary/10 text-primary text-xs font-bold">5</span>
            <Users size={18} className="text-primary" />
            {t.applicants}
          </label>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="relative group">
              <label className="mb-2 block text-xs font-semibold text-gray-600 uppercase tracking-wide">{t.adults}</label>
              <input
                type="number"
                value={adults}
                onChange={(e) => setAdults(Math.max(1, parseInt(e.target.value) || 1))}
                min="1"
                max="10"
                className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all duration-200 bg-white shadow-sm hover:shadow-md text-center text-lg font-semibold"
                required
              />
            </div>
            <div className="relative group">
              <label className="mb-2 block text-xs font-semibold text-gray-600 uppercase tracking-wide">{t.childrenUnder12}</label>
              <input
                type="number"
                value={children}
                onChange={(e) => setChildren(Math.max(0, parseInt(e.target.value) || 0))}
                min="0"
                max="10"
                className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all duration-200 bg-white shadow-sm hover:shadow-md text-center text-lg font-semibold"
              />
            </div>
          </div>
        </div>

        {/* Processing Speed */}
        <div>
          <label className="mb-4 flex items-center gap-2 text-sm font-semibold text-gray-700">
            <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-primary/10 text-primary text-xs font-bold">6</span>
            <Zap size={18} className="text-primary" />
            {t.processingSpeed}
          </label>
          <div className="space-y-3">
            <label className={`flex cursor-pointer items-center gap-4 rounded-xl border-2 p-4 transition-all duration-200 shadow-sm hover:shadow-md ${
              processingSpeed === 'standard'
                ? 'border-primary bg-gradient-to-r from-primary/10 to-primary/5 ring-2 ring-primary/20'
                : 'border-gray-200 hover:border-gray-300 bg-white'
            }`}>
              <input
                type="radio"
                name="processing"
                value="standard"
                checked={processingSpeed === 'standard'}
                onChange={(e) => setProcessingSpeed(e.target.value)}
                className="h-5 w-5 text-primary focus:ring-2 focus:ring-primary"
              />
              <span className="font-semibold flex-1">{t.standard}</span>
              {processingSpeed === 'standard' && (
                <svg className="h-5 w-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              )}
            </label>
            <label className={`flex cursor-pointer items-center gap-4 rounded-xl border-2 p-4 transition-all duration-200 shadow-sm hover:shadow-md ${
              processingSpeed === 'expedited'
                ? 'border-primary bg-gradient-to-r from-primary/10 to-primary/5 ring-2 ring-primary/20'
                : 'border-gray-200 hover:border-gray-300 bg-white'
            }`}>
              <input
                type="radio"
                name="processing"
                value="expedited"
                checked={processingSpeed === 'expedited'}
                onChange={(e) => setProcessingSpeed(e.target.value)}
                className="h-5 w-5 text-primary focus:ring-2 focus:ring-primary"
              />
              <span className="font-semibold flex-1">{t.expedited}</span>
              {processingSpeed === 'expedited' && (
                <svg className="h-5 w-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              )}
            </label>
            <label className={`flex cursor-pointer items-center gap-4 rounded-xl border-2 p-4 transition-all duration-200 shadow-sm hover:shadow-md ${
              processingSpeed === 'urgent'
                ? 'border-primary bg-gradient-to-r from-primary/10 to-primary/5 ring-2 ring-primary/20'
                : 'border-gray-200 hover:border-gray-300 bg-white'
            }`}>
              <input
                type="radio"
                name="processing"
                value="urgent"
                checked={processingSpeed === 'urgent'}
                onChange={(e) => setProcessingSpeed(e.target.value)}
                className="h-5 w-5 text-primary focus:ring-2 focus:ring-primary"
              />
              <span className="font-semibold flex-1">{t.urgent}</span>
              {processingSpeed === 'urgent' && (
                <svg className="h-5 w-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              )}
            </label>
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="btn-primary flex w-full items-center justify-center gap-3 py-4 text-lg font-bold shadow-xl hover:shadow-2xl transform hover:scale-[1.02] transition-all duration-200"
        >
          <Search size={22} />
          {t.checkVisa}
        </button>
      </form>
    </div>
  );
}
