'use client';

import { Locale } from '@/lib/i18n/config';
import { getTranslations } from '@/lib/i18n/translations';
import { Button } from '@/components/ui/Button';
import { AirportSelector } from '@/components/ui/AirportSelector';
import { CheckCircle2, Plane, Users, Luggage } from 'lucide-react';

export default function MeetAssistPage({ params }: { params: { locale: Locale } }) {
  const translations = getTranslations(params.locale);
  const t = translations.meetAssist;

  const services = [
    {
      icon: Plane,
      title: t.arrival,
      description:
        params.locale === 'ar'
          ? 'مساعدة شخصية من لحظة هبوطك'
          : 'Personal assistance from the moment you land',
    },
    {
      icon: Users,
      title: t.departure,
      description:
        params.locale === 'ar'
          ? 'مرافقة سلسة خلال إجراءات المغادرة'
          : 'Smooth escort through departure procedures',
    },
    {
      icon: Luggage,
      title: t.transfer,
      description:
        params.locale === 'ar'
          ? 'دعم شامل للرحلات الترانزيت'
          : 'Comprehensive support for transit journeys',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-primary py-16 text-white">
        <div className="container-custom text-center">
          <h1 className="mb-4 text-4xl font-bold md:text-5xl">{t.title}</h1>
          <p className="mx-auto max-w-2xl text-lg opacity-90">{t.subtitle}</p>
        </div>
      </section>

      {/* Services */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="grid gap-8 md:grid-cols-3">
            {services.map((service, index) => (
              <div key={index} className="card text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary-light">
                  <service.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="mb-2 text-xl font-semibold">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <h2 className="mb-8 text-center text-3xl font-bold">{t.whatsIncluded}</h2>
          <div className="mx-auto max-w-2xl">
            <ul className="space-y-4">
              {t.included.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-6 w-6 flex-shrink-0 text-green-500" />
                  <span className="text-lg text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="mx-auto max-w-2xl rounded-2xl bg-gray-50 p-8">
            <h2 className="mb-6 text-2xl font-bold text-center">
              {params.locale === 'ar' ? 'احجز خدمة الاستقبال' : 'Book Meet & Assist'}
            </h2>

            <form className="space-y-4">
              <div>
                <label className="mb-2 block text-sm font-medium">
                  {t.selectAirport}
                </label>
                <AirportSelector
                  placeholder={t.selectAirport}
                  name="airport"
                  required
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium">
                  {t.selectService}
                </label>
                <select className="input" required>
                  <option value="">{params.locale === 'ar' ? 'اختر نوع الخدمة' : 'Select Service Type'}</option>
                  <option value="arrival">{t.arrival}</option>
                  <option value="departure">{t.departure}</option>
                  <option value="transfer">{t.transfer}</option>
                </select>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-medium">
                    {params.locale === 'ar' ? 'رقم الرحلة' : 'Flight Number'}
                  </label>
                  <input
                    type="text"
                    className="input"
                    placeholder={params.locale === 'ar' ? 'مثال: QR123' : 'e.g. QR123'}
                    required
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium">
                    {params.locale === 'ar' ? 'اتجاه الرحلة' : 'Flight Direction'}
                  </label>
                  <select className="input" required>
                    <option value="">{params.locale === 'ar' ? 'اختر' : 'Select'}</option>
                    <option value="arrival">{params.locale === 'ar' ? 'وصول' : 'Arrival'}</option>
                    <option value="departure">{params.locale === 'ar' ? 'مغادرة' : 'Departure'}</option>
                  </select>
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-medium">
                    {params.locale === 'ar' ? 'التاريخ' : 'Flight Date'}
                  </label>
                  <input type="date" className="input" required />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium">
                    {params.locale === 'ar' ? 'الوقت المتوقع' : 'Expected Time'}
                  </label>
                  <input type="time" className="input" required />
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium">
                  {params.locale === 'ar' ? 'عدد المسافرين' : 'Number of Travelers'}
                </label>
                <input
                  type="number"
                  min="1"
                  max="10"
                  defaultValue="1"
                  className="input"
                  required
                />
              </div>

              <Button variant="primary" size="lg" className="w-full">
                {params.locale === 'ar' ? 'احجز الآن - من 180 ريال قطري' : 'Book Now - From 180 QAR'}
              </Button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
