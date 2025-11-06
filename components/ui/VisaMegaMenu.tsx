'use client';

import { useState } from 'react';
import { MapPin } from 'lucide-react';
import { SuccessMessage } from './SuccessMessage';

interface VisaMegaMenuProps {
  locale: 'en' | 'ar';
  onClose?: () => void;
}

export function VisaMegaMenu({ locale, onClose }: VisaMegaMenuProps) {
  const [name, setName] = useState('');
  const [countryCode, setCountryCode] = useState('+974');
  const [whatsapp, setWhatsapp] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [destinationCountry, setDestinationCountry] = useState('');
  const [message, setMessage] = useState('');

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

  const t = {
    visaSearch: locale === 'ar' ? 'طلب التأشيرة' : 'Visa Application',
    fullName: locale === 'ar' ? 'الاسم الكامل' : 'Full Name',
    whatsapp: locale === 'ar' ? 'رقم واتساب' : 'WhatsApp Number',
    destinationCountry: locale === 'ar' ? 'الدولة المقصد' : 'Destination Country',
    message: locale === 'ar' ? 'رسالتك (التفاصيل)' : 'Your Message (Details)',
    messagePlaceholder: locale === 'ar' ? 'أخبرنا عن متطلبات التأشيرة الخاصة بك...' : 'Tell us about your visa requirements...',
    submitRequest: locale === 'ar' ? 'إرسال الطلب' : 'Submit Request',
    submitting: locale === 'ar' ? 'جاري الإرسال...' : 'Submitting...',
    selectCountry: locale === 'ar' ? 'اختر الدولة' : 'Select Country',
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate required fields
    if (!name || !whatsapp || !destinationCountry || !message) {
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/send-booking', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          type: 'visa',
          name,
          whatsapp: `${countryCode}${whatsapp}`,
          country: destinationCountry,
          message,
        }),
      });

      if (response.ok) {
        setShowSuccess(true);
        // Reset form
        setName('');
        setWhatsapp('');
        setDestinationCountry('');
        setMessage('');
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

        {/* Destination Country */}
        <div className="relative group">
          <label className="mb-2 flex items-center gap-2 text-sm font-semibold text-gray-700">
            <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-primary/10 text-primary text-xs font-bold">3</span>
            <MapPin size={16} className="text-primary" />
            {t.destinationCountry}
            <span className="text-red-600 ml-1">*</span>
          </label>
          <select
            value={destinationCountry}
            onChange={(e) => setDestinationCountry(e.target.value)}
            className="w-full px-4 py-3.5 rounded-xl border-2 border-gray-200 focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all duration-200 bg-white shadow-sm hover:shadow-md cursor-pointer appearance-none bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20fill%3D%22none%22%20viewBox%3D%220%200%2020%2020%22%3E%3Cpath%20stroke%3D%22%236b7280%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%221.5%22%20d%3D%22M6%208l4%204%204-4%22%2F%3E%3C%2Fsvg%3E')] bg-[length:1.5em] bg-[right_0.5rem_center] bg-no-repeat pr-10"
            required
          >
            <option value="">{t.selectCountry}</option>
            {popularCountries.map((country) => (
              <option key={country.code} value={country.name}>
                {country.name}
              </option>
            ))}
          </select>
        </div>

        {/* Message */}
        <div className="relative group">
          <label className="mb-2 block text-sm font-semibold text-gray-700 flex items-center gap-2">
            <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-primary/10 text-primary text-xs font-bold">4</span>
            {t.message}
            <span className="text-red-600 ml-1">*</span>
          </label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={5}
            className="w-full px-4 py-3.5 rounded-xl border-2 border-gray-200 focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all duration-200 bg-white shadow-sm hover:shadow-md placeholder:text-gray-400 resize-none"
            placeholder={t.messagePlaceholder}
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
