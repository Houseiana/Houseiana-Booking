'use client';

import { Locale } from '@/lib/i18n/config';
import { getTranslations } from '@/lib/i18n/translations';
import { Button } from '@/components/ui/Button';
import { Plane, Clock, CheckCircle2 } from 'lucide-react';

export default function FlightsPage({ params }: { params: { locale: Locale } }) {
  const translations = getTranslations(params.locale);
  const t = translations.flights;

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-primary py-16 text-white">
        <div className="container-custom text-center">
          <Plane className="mx-auto mb-4 h-16 w-16" />
          <h1 className="mb-4 text-4xl font-bold md:text-5xl">{t.title}</h1>
          <p className="mx-auto max-w-2xl text-lg opacity-90">{t.subtitle}</p>
        </div>
      </section>

      {/* Benefits */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="mx-auto max-w-4xl">
            <div className="mb-12 grid gap-6 md:grid-cols-3">
              {[
                {
                  icon: CheckCircle2,
                  title: params.locale === 'ar' ? 'أفضل الأسعار' : 'Best Prices',
                  desc: params.locale === 'ar' ? 'أسعار تنافسية من شركات الطيران الرائدة' : 'Competitive rates from leading airlines',
                },
                {
                  icon: Clock,
                  title: params.locale === 'ar' ? 'استجابة سريعة' : 'Quick Response',
                  desc: params.locale === 'ar' ? 'احصل على الخيارات في غضون 30 دقيقة' : 'Get options within 30 minutes',
                },
                {
                  icon: Plane,
                  title: params.locale === 'ar' ? 'جميع الوجهات' : 'All Destinations',
                  desc: params.locale === 'ar' ? 'رحلات إلى أي وجهة حول العالم' : 'Flights to any destination worldwide',
                },
              ].map((benefit, index) => (
                <div key={index} className="text-center">
                  <benefit.icon className="mx-auto mb-3 h-12 w-12 text-primary" />
                  <h3 className="mb-2 font-semibold">{benefit.title}</h3>
                  <p className="text-sm text-gray-600">{benefit.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Flight Request Form */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl rounded-2xl bg-white p-8 shadow-soft">
            <h2 className="mb-6 text-2xl font-bold text-center">
              {params.locale === 'ar' ? 'طلب حجز رحلة' : 'Flight Booking Request'}
            </h2>

            <p className="mb-6 text-center text-gray-600">{t.responseTime}</p>

            <form className="space-y-6">
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-medium">
                    {t.origin}
                  </label>
                  <input
                    type="text"
                    placeholder="From"
                    className="input"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium">
                    {t.destination}
                  </label>
                  <input
                    type="text"
                    placeholder="To"
                    className="input"
                  />
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-medium">
                    {t.departDate}
                  </label>
                  <input type="date" className="input" />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium">
                    {t.returnDate} <span className="text-gray-400">(Optional)</span>
                  </label>
                  <input type="date" className="input" />
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-medium">
                    {t.passengers}
                  </label>
                  <input
                    type="number"
                    min="1"
                    defaultValue="1"
                    className="input"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium">
                    {t.cabin}
                  </label>
                  <select className="input">
                    <option>Economy</option>
                    <option>Premium Economy</option>
                    <option>Business</option>
                    <option>First Class</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium">
                  {params.locale === 'ar' ? 'الاسم الكامل' : 'Full Name'}
                </label>
                <input
                  type="text"
                  className="input"
                />
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-medium">
                    {params.locale === 'ar' ? 'البريد الإلكتروني' : 'Email'}
                  </label>
                  <input
                    type="email"
                    className="input"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium">
                    {params.locale === 'ar' ? 'رقم الهاتف (واتساب)' : 'Phone (WhatsApp)'}
                  </label>
                  <input
                    type="tel"
                    className="input"
                  />
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium">
                  {params.locale === 'ar' ? 'ملاحظات إضافية' : 'Additional Notes'} <span className="text-gray-400">(Optional)</span>
                </label>
                <textarea
                  rows={3}
                  className="input resize-none"
                  placeholder={params.locale === 'ar' ? 'أي متطلبات خاصة...' : 'Any special requirements...'}
                />
              </div>

              <Button variant="primary" size="lg" className="w-full" type="submit">
                {t.submit}
              </Button>

              <p className="text-center text-xs text-gray-500">
                {params.locale === 'ar'
                  ? 'سنتواصل معك عبر الواتساب أو البريد الإلكتروني خلال 30 دقيقة'
                  : "We'll contact you via WhatsApp or Email within 30 minutes"}
              </p>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
