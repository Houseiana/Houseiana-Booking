'use client';

import { Locale } from '@/lib/i18n/config';
import { getTranslations } from '@/lib/i18n/translations';
import { Button } from '@/components/ui/Button';
import { CheckCircle2 } from 'lucide-react';

export default function LoungePage({ params }: { params: { locale: Locale } }) {
  const translations = getTranslations(params.locale);
  const t = translations.lounge;

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-primary py-16 text-white">
        <div className="container-custom text-center">
          <h1 className="mb-4 text-4xl font-bold md:text-5xl">{t.title}</h1>
          <p className="mx-auto max-w-2xl text-lg opacity-90">{t.subtitle}</p>
        </div>
      </section>

      {/* Amenities */}
      <section className="section bg-white">
        <div className="container-custom">
          <h2 className="mb-8 text-center text-3xl font-bold">{t.amenitiesTitle}</h2>
          <div className="mx-auto max-w-3xl">
            <div className="grid gap-4 md:grid-cols-2">
              {t.amenities.map((amenity, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="h-6 w-6 flex-shrink-0 text-green-500" />
                  <span className="text-gray-700">{amenity}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="mx-auto max-w-2xl rounded-2xl bg-white p-8 shadow-soft">
            <h2 className="mb-6 text-2xl font-bold text-center">
              {params.locale === 'ar' ? 'احجز صالة VIP' : 'Book VIP Lounge Access'}
            </h2>

            <form className="space-y-4">
              <div>
                <label className="mb-2 block text-sm font-medium">
                  {t.selectAirport}
                </label>
                <select className="input">
                  <option value="">Select Airport & Lounge</option>
                  <optgroup label="GCC Airports">
                    <option value="DOH-AL-MAHA">DOH - Hamad International Airport - Al Maha Lounge</option>
                    <option value="DOH-AL-MOURJAN">DOH - Hamad International Airport - Al Mourjan Lounge</option>
                    <option value="DXB-EMIRATES">DXB - Dubai International Airport - Emirates Lounge</option>
                    <option value="DXB-MARHABA">DXB - Dubai International Airport - Marhaba Lounge</option>
                    <option value="AUH-ETIHAD">AUH - Abu Dhabi International Airport - Etihad Lounge</option>
                    <option value="JED-ALFURSAN">JED - King Abdulaziz Airport, Jeddah - AlFursan Lounge</option>
                    <option value="RUH-ALFURSAN">RUH - King Khalid Airport, Riyadh - AlFursan Lounge</option>
                    <option value="KWI-ALWAHA">KWI - Kuwait International Airport - Al Waha Lounge</option>
                    <option value="BAH-FALCON">BAH - Bahrain International Airport - Falcon Gold Lounge</option>
                  </optgroup>
                  <optgroup label="Middle East">
                    <option value="IST-TURKISH">IST - Istanbul Airport - Turkish Airlines Lounge</option>
                    <option value="SAW-PRIMECLASS">SAW - Sabiha Gökçen Airport - PrimeClass Lounge</option>
                    <option value="CAI-AHLAN">CAI - Cairo International Airport - Ahlan Lounge</option>
                    <option value="AMM-CROWN">AMM - Queen Alia Airport - Crown Lounge</option>
                  </optgroup>
                  <optgroup label="Europe">
                    <option value="LHR-PLAZA">LHR - London Heathrow - Plaza Premium Lounge</option>
                    <option value="CDG-STAR">CDG - Paris Charles de Gaulle - Star Alliance Lounge</option>
                    <option value="FRA-LUFTHANSA">FRA - Frankfurt Airport - Lufthansa Lounge</option>
                    <option value="AMS-KLM">AMS - Amsterdam Schiphol - KLM Crown Lounge</option>
                  </optgroup>
                  <optgroup label="Asia">
                    <option value="BKK-MIRACLE">BKK - Suvarnabhumi Airport - Miracle Lounge</option>
                    <option value="SIN-SATS">SIN - Singapore Changi - SATS Premier Lounge</option>
                    <option value="KUL-PLAZA">KUL - Kuala Lumpur International - Plaza Premium Lounge</option>
                    <option value="HKG-PLAZA">HKG - Hong Kong International - Plaza Premium Lounge</option>
                  </optgroup>
                  <optgroup label="North America">
                    <option value="JFK-DELTA">JFK - New York Kennedy - Delta Sky Club</option>
                    <option value="LAX-UNITED">LAX - Los Angeles International - United Club</option>
                    <option value="ORD-ADMIRALS">ORD - Chicago O&apos;Hare - Admirals Club</option>
                  </optgroup>
                </select>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-medium">
                    {params.locale === 'ar' ? 'التاريخ' : 'Date'}
                  </label>
                  <input type="date" className="input" />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium">
                    {t.timeWindow}
                  </label>
                  <select className="input">
                    <option>2 Hours</option>
                    <option>3 Hours</option>
                    <option>4 Hours</option>
                    <option>6 Hours</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium">
                  {params.locale === 'ar' ? 'عدد الضيوف' : 'Number of Guests'}
                </label>
                <input type="number" min="1" defaultValue="1" className="input" />
              </div>

              <div className="rounded-lg bg-primary-light p-4">
                <div className="flex items-center justify-between">
                  <span className="font-medium text-gray-700">
                    {params.locale === 'ar' ? 'السعر الإجمالي' : 'Total Price'}
                  </span>
                  <span className="text-2xl font-bold text-primary">
                    150 <span className="text-sm">QAR</span>
                  </span>
                </div>
                <p className="mt-1 text-sm text-gray-600">
                  {params.locale === 'ar' ? 'للشخص الواحد' : 'per person'}
                </p>
              </div>

              <Button variant="primary" size="lg" className="w-full">
                {params.locale === 'ar' ? 'احجز الآن' : 'Book Now'}
              </Button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
