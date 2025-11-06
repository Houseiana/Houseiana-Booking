'use client';

import { useState, useRef, useEffect } from 'react';
import { MapPin, Search } from 'lucide-react';

interface City {
  code: string;
  nameEn: string;
  nameAr: string;
  country: string;
  countryAr: string;
}

interface CitySelectorProps {
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  locale: 'en' | 'ar';
  required?: boolean;
}

// Comprehensive IATA cities database
const cities: City[] = [
  // Middle East
  { code: 'DOH', nameEn: 'Doha', nameAr: 'الدوحة', country: 'Qatar', countryAr: 'قطر' },
  { code: 'DXB', nameEn: 'Dubai', nameAr: 'دبي', country: 'UAE', countryAr: 'الإمارات' },
  { code: 'AUH', nameEn: 'Abu Dhabi', nameAr: 'أبو ظبي', country: 'UAE', countryAr: 'الإمارات' },
  { code: 'SHJ', nameEn: 'Sharjah', nameAr: 'الشارقة', country: 'UAE', countryAr: 'الإمارات' },
  { code: 'RUH', nameEn: 'Riyadh', nameAr: 'الرياض', country: 'Saudi Arabia', countryAr: 'السعودية' },
  { code: 'JED', nameEn: 'Jeddah', nameAr: 'جدة', country: 'Saudi Arabia', countryAr: 'السعودية' },
  { code: 'DMM', nameEn: 'Dammam', nameAr: 'الدمام', country: 'Saudi Arabia', countryAr: 'السعودية' },
  { code: 'MED', nameEn: 'Medina', nameAr: 'المدينة المنورة', country: 'Saudi Arabia', countryAr: 'السعودية' },
  { code: 'KWI', nameEn: 'Kuwait City', nameAr: 'الكويت', country: 'Kuwait', countryAr: 'الكويت' },
  { code: 'MCT', nameEn: 'Muscat', nameAr: 'مسقط', country: 'Oman', countryAr: 'عمان' },
  { code: 'BAH', nameEn: 'Bahrain', nameAr: 'البحرين', country: 'Bahrain', countryAr: 'البحرين' },
  { code: 'AMM', nameEn: 'Amman', nameAr: 'عمان', country: 'Jordan', countryAr: 'الأردن' },
  { code: 'BEY', nameEn: 'Beirut', nameAr: 'بيروت', country: 'Lebanon', countryAr: 'لبنان' },
  { code: 'CAI', nameEn: 'Cairo', nameAr: 'القاهرة', country: 'Egypt', countryAr: 'مصر' },
  { code: 'SSH', nameEn: 'Sharm El Sheikh', nameAr: 'شرم الشيخ', country: 'Egypt', countryAr: 'مصر' },
  { code: 'HRG', nameEn: 'Hurghada', nameAr: 'الغردقة', country: 'Egypt', countryAr: 'مصر' },
  { code: 'IST', nameEn: 'Istanbul', nameAr: 'إسطنبول', country: 'Turkey', countryAr: 'تركيا' },
  { code: 'SAW', nameEn: 'Istanbul Sabiha', nameAr: 'إسطنبول صبيحة', country: 'Turkey', countryAr: 'تركيا' },
  { code: 'AYT', nameEn: 'Antalya', nameAr: 'أنطاليا', country: 'Turkey', countryAr: 'تركيا' },

  // Europe
  { code: 'LHR', nameEn: 'London Heathrow', nameAr: 'لندن هيثرو', country: 'UK', countryAr: 'المملكة المتحدة' },
  { code: 'LGW', nameEn: 'London Gatwick', nameAr: 'لندن جاتويك', country: 'UK', countryAr: 'المملكة المتحدة' },
  { code: 'MAN', nameEn: 'Manchester', nameAr: 'مانشستر', country: 'UK', countryAr: 'المملكة المتحدة' },
  { code: 'CDG', nameEn: 'Paris Charles de Gaulle', nameAr: 'باريس شارل ديغول', country: 'France', countryAr: 'فرنسا' },
  { code: 'ORY', nameEn: 'Paris Orly', nameAr: 'باريس أورلي', country: 'France', countryAr: 'فرنسا' },
  { code: 'NCE', nameEn: 'Nice', nameAr: 'نيس', country: 'France', countryAr: 'فرنسا' },
  { code: 'FRA', nameEn: 'Frankfurt', nameAr: 'فرانكفورت', country: 'Germany', countryAr: 'ألمانيا' },
  { code: 'MUC', nameEn: 'Munich', nameAr: 'ميونخ', country: 'Germany', countryAr: 'ألمانيا' },
  { code: 'BER', nameEn: 'Berlin', nameAr: 'برلين', country: 'Germany', countryAr: 'ألمانيا' },
  { code: 'FCO', nameEn: 'Rome Fiumicino', nameAr: 'روما فيوميتشينو', country: 'Italy', countryAr: 'إيطاليا' },
  { code: 'MXP', nameEn: 'Milan Malpensa', nameAr: 'ميلانو مالبينسا', country: 'Italy', countryAr: 'إيطاليا' },
  { code: 'VCE', nameEn: 'Venice', nameAr: 'البندقية', country: 'Italy', countryAr: 'إيطاليا' },
  { code: 'MAD', nameEn: 'Madrid', nameAr: 'مدريد', country: 'Spain', countryAr: 'إسبانيا' },
  { code: 'BCN', nameEn: 'Barcelona', nameAr: 'برشلونة', country: 'Spain', countryAr: 'إسبانيا' },
  { code: 'AGP', nameEn: 'Malaga', nameAr: 'ملقة', country: 'Spain', countryAr: 'إسبانيا' },
  { code: 'LIS', nameEn: 'Lisbon', nameAr: 'لشبونة', country: 'Portugal', countryAr: 'البرتغال' },
  { code: 'AMS', nameEn: 'Amsterdam', nameAr: 'أمستردام', country: 'Netherlands', countryAr: 'هولندا' },
  { code: 'BRU', nameEn: 'Brussels', nameAr: 'بروكسل', country: 'Belgium', countryAr: 'بلجيكا' },
  { code: 'ZRH', nameEn: 'Zurich', nameAr: 'زيوريخ', country: 'Switzerland', countryAr: 'سويسرا' },
  { code: 'GVA', nameEn: 'Geneva', nameAr: 'جنيف', country: 'Switzerland', countryAr: 'سويسرا' },
  { code: 'VIE', nameEn: 'Vienna', nameAr: 'فيينا', country: 'Austria', countryAr: 'النمسا' },
  { code: 'PRG', nameEn: 'Prague', nameAr: 'براغ', country: 'Czech Republic', countryAr: 'التشيك' },
  { code: 'WAW', nameEn: 'Warsaw', nameAr: 'وارسو', country: 'Poland', countryAr: 'بولندا' },
  { code: 'ATH', nameEn: 'Athens', nameAr: 'أثينا', country: 'Greece', countryAr: 'اليونان' },

  // Asia
  { code: 'BKK', nameEn: 'Bangkok', nameAr: 'بانكوك', country: 'Thailand', countryAr: 'تايلاند' },
  { code: 'HKT', nameEn: 'Phuket', nameAr: 'بوكيت', country: 'Thailand', countryAr: 'تايلاند' },
  { code: 'SIN', nameEn: 'Singapore', nameAr: 'سنغافورة', country: 'Singapore', countryAr: 'سنغافورة' },
  { code: 'KUL', nameEn: 'Kuala Lumpur', nameAr: 'كوالالمبور', country: 'Malaysia', countryAr: 'ماليزيا' },
  { code: 'CGK', nameEn: 'Jakarta', nameAr: 'جاكرتا', country: 'Indonesia', countryAr: 'إندونيسيا' },
  { code: 'DPS', nameEn: 'Bali', nameAr: 'بالي', country: 'Indonesia', countryAr: 'إندونيسيا' },
  { code: 'MNL', nameEn: 'Manila', nameAr: 'مانيلا', country: 'Philippines', countryAr: 'الفلبين' },
  { code: 'HKG', nameEn: 'Hong Kong', nameAr: 'هونغ كونغ', country: 'Hong Kong', countryAr: 'هونغ كونغ' },
  { code: 'PVG', nameEn: 'Shanghai Pudong', nameAr: 'شنغهاي بودونغ', country: 'China', countryAr: 'الصين' },
  { code: 'PEK', nameEn: 'Beijing', nameAr: 'بكين', country: 'China', countryAr: 'الصين' },
  { code: 'CAN', nameEn: 'Guangzhou', nameAr: 'قوانغتشو', country: 'China', countryAr: 'الصين' },
  { code: 'NRT', nameEn: 'Tokyo Narita', nameAr: 'طوكيو ناريتا', country: 'Japan', countryAr: 'اليابان' },
  { code: 'HND', nameEn: 'Tokyo Haneda', nameAr: 'طوكيو هانيدا', country: 'Japan', countryAr: 'اليابان' },
  { code: 'KIX', nameEn: 'Osaka', nameAr: 'أوساكا', country: 'Japan', countryAr: 'اليابان' },
  { code: 'ICN', nameEn: 'Seoul Incheon', nameAr: 'سيول إنشون', country: 'South Korea', countryAr: 'كوريا الجنوبية' },
  { code: 'DEL', nameEn: 'New Delhi', nameAr: 'نيودلهي', country: 'India', countryAr: 'الهند' },
  { code: 'BOM', nameEn: 'Mumbai', nameAr: 'مومباي', country: 'India', countryAr: 'الهند' },
  { code: 'BLR', nameEn: 'Bangalore', nameAr: 'بنغالور', country: 'India', countryAr: 'الهند' },
  { code: 'ISB', nameEn: 'Islamabad', nameAr: 'إسلام أباد', country: 'Pakistan', countryAr: 'باكستان' },
  { code: 'KHI', nameEn: 'Karachi', nameAr: 'كراتشي', country: 'Pakistan', countryAr: 'باكستان' },
  { code: 'CMB', nameEn: 'Colombo', nameAr: 'كولومبو', country: 'Sri Lanka', countryAr: 'سريلانكا' },
  { code: 'KTM', nameEn: 'Kathmandu', nameAr: 'كاتماندو', country: 'Nepal', countryAr: 'نيبال' },

  // North America
  { code: 'JFK', nameEn: 'New York JFK', nameAr: 'نيويورك جون كينيدي', country: 'USA', countryAr: 'الولايات المتحدة' },
  { code: 'EWR', nameEn: 'New York Newark', nameAr: 'نيويورك نيوارك', country: 'USA', countryAr: 'الولايات المتحدة' },
  { code: 'LAX', nameEn: 'Los Angeles', nameAr: 'لوس أنجلوس', country: 'USA', countryAr: 'الولايات المتحدة' },
  { code: 'ORD', nameEn: 'Chicago', nameAr: 'شيكاغو', country: 'USA', countryAr: 'الولايات المتحدة' },
  { code: 'MIA', nameEn: 'Miami', nameAr: 'ميامي', country: 'USA', countryAr: 'الولايات المتحدة' },
  { code: 'SFO', nameEn: 'San Francisco', nameAr: 'سان فرانسيسكو', country: 'USA', countryAr: 'الولايات المتحدة' },
  { code: 'LAS', nameEn: 'Las Vegas', nameAr: 'لاس فيغاس', country: 'USA', countryAr: 'الولايات المتحدة' },
  { code: 'SEA', nameEn: 'Seattle', nameAr: 'سياتل', country: 'USA', countryAr: 'الولايات المتحدة' },
  { code: 'BOS', nameEn: 'Boston', nameAr: 'بوسطن', country: 'USA', countryAr: 'الولايات المتحدة' },
  { code: 'IAH', nameEn: 'Houston', nameAr: 'هيوستن', country: 'USA', countryAr: 'الولايات المتحدة' },
  { code: 'YYZ', nameEn: 'Toronto', nameAr: 'تورونتو', country: 'Canada', countryAr: 'كندا' },
  { code: 'YVR', nameEn: 'Vancouver', nameAr: 'فانكوفر', country: 'Canada', countryAr: 'كندا' },
  { code: 'YUL', nameEn: 'Montreal', nameAr: 'مونتريال', country: 'Canada', countryAr: 'كندا' },

  // Africa
  { code: 'CPT', nameEn: 'Cape Town', nameAr: 'كيب تاون', country: 'South Africa', countryAr: 'جنوب أفريقيا' },
  { code: 'JNB', nameEn: 'Johannesburg', nameAr: 'جوهانسبرغ', country: 'South Africa', countryAr: 'جنوب أفريقيا' },
  { code: 'NBO', nameEn: 'Nairobi', nameAr: 'نيروبي', country: 'Kenya', countryAr: 'كينيا' },
  { code: 'ADD', nameEn: 'Addis Ababa', nameAr: 'أديس أبابا', country: 'Ethiopia', countryAr: 'إثيوبيا' },
  { code: 'LOS', nameEn: 'Lagos', nameAr: 'لاغوس', country: 'Nigeria', countryAr: 'نيجيريا' },
  { code: 'ALG', nameEn: 'Algiers', nameAr: 'الجزائر', country: 'Algeria', countryAr: 'الجزائر' },
  { code: 'TUN', nameEn: 'Tunis', nameAr: 'تونس', country: 'Tunisia', countryAr: 'تونس' },
  { code: 'CMN', nameEn: 'Casablanca', nameAr: 'الدار البيضاء', country: 'Morocco', countryAr: 'المغرب' },
  { code: 'RAK', nameEn: 'Marrakech', nameAr: 'مراكش', country: 'Morocco', countryAr: 'المغرب' },
  { code: 'KRT', nameEn: 'Khartoum', nameAr: 'الخرطوم', country: 'Sudan', countryAr: 'السودان' },

  // Oceania
  { code: 'SYD', nameEn: 'Sydney', nameAr: 'سيدني', country: 'Australia', countryAr: 'أستراليا' },
  { code: 'MEL', nameEn: 'Melbourne', nameAr: 'ملبورن', country: 'Australia', countryAr: 'أستراليا' },
  { code: 'BNE', nameEn: 'Brisbane', nameAr: 'بريسبان', country: 'Australia', countryAr: 'أستراليا' },
  { code: 'PER', nameEn: 'Perth', nameAr: 'بيرث', country: 'Australia', countryAr: 'أستراليا' },
  { code: 'AKL', nameEn: 'Auckland', nameAr: 'أوكلاند', country: 'New Zealand', countryAr: 'نيوزيلندا' },

  // South America
  { code: 'GRU', nameEn: 'São Paulo', nameAr: 'ساو باولو', country: 'Brazil', countryAr: 'البرازيل' },
  { code: 'GIG', nameEn: 'Rio de Janeiro', nameAr: 'ريو دي جانيرو', country: 'Brazil', countryAr: 'البرازيل' },
  { code: 'EZE', nameEn: 'Buenos Aires', nameAr: 'بوينس آيرس', country: 'Argentina', countryAr: 'الأرجنتين' },
  { code: 'BOG', nameEn: 'Bogotá', nameAr: 'بوغوتا', country: 'Colombia', countryAr: 'كولومبيا' },
  { code: 'LIM', nameEn: 'Lima', nameAr: 'ليما', country: 'Peru', countryAr: 'بيرو' },
  { code: 'SCL', nameEn: 'Santiago', nameAr: 'سانتياغو', country: 'Chile', countryAr: 'تشيلي' },
  { code: 'MEX', nameEn: 'Mexico City', nameAr: 'مكسيكو سيتي', country: 'Mexico', countryAr: 'المكسيك' },
  { code: 'CUN', nameEn: 'Cancún', nameAr: 'كانكون', country: 'Mexico', countryAr: 'المكسيك' },

  // Additional Popular Destinations
  { code: 'MLE', nameEn: 'Maldives', nameAr: 'المالديف', country: 'Maldives', countryAr: 'المالديف' },
  { code: 'SEZ', nameEn: 'Seychelles', nameAr: 'سيشل', country: 'Seychelles', countryAr: 'سيشل' },
  { code: 'MRU', nameEn: 'Mauritius', nameAr: 'موريشيوس', country: 'Mauritius', countryAr: 'موريشيوس' },
  { code: 'TBS', nameEn: 'Tbilisi', nameAr: 'تبليسي', country: 'Georgia', countryAr: 'جورجيا' },
  { code: 'BAK', nameEn: 'Baku', nameAr: 'باكو', country: 'Azerbaijan', countryAr: 'أذربيجان' },
  { code: 'YVN', nameEn: 'Yerevan', nameAr: 'يريفان', country: 'Armenia', countryAr: 'أرمينيا' },
  { code: 'DUB', nameEn: 'Dublin', nameAr: 'دبلن', country: 'Ireland', countryAr: 'أيرلندا' },
  { code: 'EDI', nameEn: 'Edinburgh', nameAr: 'إدنبرة', country: 'UK', countryAr: 'المملكة المتحدة' },
  { code: 'OSL', nameEn: 'Oslo', nameAr: 'أوسلو', country: 'Norway', countryAr: 'النرويج' },
  { code: 'CPH', nameEn: 'Copenhagen', nameAr: 'كوبنهاغن', country: 'Denmark', countryAr: 'الدنمارك' },
  { code: 'ARN', nameEn: 'Stockholm', nameAr: 'ستوكهولم', country: 'Sweden', countryAr: 'السويد' },
  { code: 'HEL', nameEn: 'Helsinki', nameAr: 'هلسنكي', country: 'Finland', countryAr: 'فنلندا' },
  { code: 'REK', nameEn: 'Reykjavik', nameAr: 'ريكيافيك', country: 'Iceland', countryAr: 'أيسلندا' },
];

export function CitySelector({ value, onChange, placeholder, locale, required = false }: CitySelectorProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Filter cities based on search term
  const filteredCities = cities.filter((city) => {
    const search = searchTerm.toLowerCase();
    return (
      city.code.toLowerCase().includes(search) ||
      city.nameEn.toLowerCase().includes(search) ||
      city.nameAr.includes(search) ||
      city.country.toLowerCase().includes(search) ||
      city.countryAr.includes(search)
    );
  });

  const handleCitySelect = (city: City) => {
    const displayValue = locale === 'ar'
      ? `${city.nameAr} (${city.code}) - ${city.countryAr}`
      : `${city.nameEn} (${city.code}) - ${city.country}`;
    onChange(displayValue);
    setSearchTerm(displayValue);
    setIsOpen(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setSearchTerm(val);
    onChange(val);
    setIsOpen(true);
  };

  // Get display value for selected city
  useEffect(() => {
    if (value) {
      setSearchTerm(value);
    }
  }, [value]);

  return (
    <div className="relative" ref={dropdownRef}>
      <div className="relative">
        <input
          type="text"
          value={searchTerm}
          onChange={handleInputChange}
          onFocus={() => setIsOpen(true)}
          placeholder={placeholder}
          className="input w-full pl-10 pr-4"
          required={required}
          autoComplete="off"
        />
        <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-primary" />
        <Search className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
      </div>

      {/* Dropdown */}
      {isOpen && (
        <div className="absolute z-50 mt-2 w-full rounded-xl bg-white shadow-2xl border border-gray-200 max-h-80 overflow-y-auto">
          {filteredCities.length > 0 ? (
            <div className="p-2">
              {filteredCities.map((city) => (
                <button
                  key={city.code}
                  type="button"
                  onClick={() => handleCitySelect(city)}
                  className="w-full px-4 py-3 text-left hover:bg-primary/10 rounded-lg transition-colors duration-200 flex items-center justify-between group"
                >
                  <div className="flex flex-col">
                    <span className="font-semibold text-gray-900 group-hover:text-primary">
                      {locale === 'ar' ? city.nameAr : city.nameEn}
                    </span>
                    <span className="text-sm text-gray-600">
                      {locale === 'ar' ? city.countryAr : city.country}
                    </span>
                  </div>
                  <span className="text-xs font-mono text-primary bg-primary/10 px-2 py-1 rounded">
                    {city.code}
                  </span>
                </button>
              ))}
            </div>
          ) : (
            <div className="p-4 text-center text-gray-500">
              {locale === 'ar' ? 'لا توجد مدن مطابقة' : 'No cities found'}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
