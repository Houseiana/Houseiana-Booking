'use client';

import { Locale } from '@/lib/i18n/config';
import { getTranslations } from '@/lib/i18n/translations';
import { Button } from '@/components/ui/Button';
import { FileText, Clock, Shield, CheckCircle } from 'lucide-react';

export default function VisaPage({ params }: { params: { locale: Locale } }) {
  const translations = getTranslations(params.locale);
  const t = translations.visa;

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-primary py-16 text-white">
        <div className="container-custom text-center">
          <FileText className="mx-auto mb-4 h-16 w-16" />
          <h1 className="mb-4 text-4xl font-bold md:text-5xl">{t.title}</h1>
          <p className="mx-auto max-w-2xl text-lg opacity-90">{t.subtitle}</p>
        </div>
      </section>

      {/* Benefits */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="grid gap-8 md:grid-cols-4">
            {[
              {
                icon: FileText,
                title: params.locale === 'ar' ? 'إرشادات الخبراء' : 'Expert Guidance',
                desc: params.locale === 'ar' ? 'مساعدة احترافية في التطبيق' : 'Professional application help',
              },
              {
                icon: Clock,
                title: params.locale === 'ar' ? 'معالجة سريعة' : 'Fast Processing',
                desc: params.locale === 'ar' ? 'معالجة سريعة للطلبات' : 'Quick application processing',
              },
              {
                icon: Shield,
                title: params.locale === 'ar' ? 'آمن ومأمون' : 'Safe & Secure',
                desc: params.locale === 'ar' ? 'معالجة آمنة للمستندات' : 'Secure document handling',
              },
              {
                icon: CheckCircle,
                title: params.locale === 'ar' ? 'معدل نجاح عالي' : 'High Success Rate',
                desc: params.locale === 'ar' ? 'معدل موافقة ممتاز' : 'Excellent approval rate',
              },
            ].map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary-light">
                  <benefit.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="mb-2 font-semibold">{benefit.title}</h3>
                <p className="text-sm text-gray-600">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visa Application Form */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl rounded-2xl bg-white p-8 shadow-soft">
            <h2 className="mb-6 text-2xl font-bold text-center">
              {params.locale === 'ar' ? 'طلب تأشيرة' : 'Visa Application'}
            </h2>

            <form className="space-y-6">
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-medium">
                    {t.selectCountry}
                  </label>
                  <select className="input">
                    <option>United States</option>
                    <option>United Kingdom</option>
                    <option>Schengen Countries</option>
                    <option>Canada</option>
                    <option>Australia</option>
                    <option>Turkey</option>
                    <option>UAE</option>
                    <option>Saudi Arabia</option>
                  </select>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium">
                    {t.selectNationality}
                  </label>
                  <select className="input">
                    <option>Qatar</option>
                    <option>Saudi Arabia</option>
                    <option>UAE</option>
                    <option>Kuwait</option>
                    <option>Bahrain</option>
                    <option>Oman</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium">
                  {params.locale === 'ar' ? 'نوع التأشيرة' : 'Visa Type'}
                </label>
                <select className="input">
                  <option>Tourist/Visit Visa</option>
                  <option>Business Visa</option>
                  <option>Transit Visa</option>
                  <option>Work Visa</option>
                  <option>Student Visa</option>
                  <option>Family Visit Visa</option>
                </select>
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium">
                  {params.locale === 'ar' ? 'الاسم الكامل' : 'Full Name'}
                </label>
                <input type="text" className="input" />
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-medium">
                    {params.locale === 'ar' ? 'البريد الإلكتروني' : 'Email'}
                  </label>
                  <input type="email" className="input" />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium">
                    {params.locale === 'ar' ? 'رقم الهاتف' : 'Phone Number'}
                  </label>
                  <input type="tel" className="input" />
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium">
                  {params.locale === 'ar' ? 'تاريخ السفر المخطط' : 'Planned Travel Date'}
                </label>
                <input type="date" className="input" />
              </div>

              <div className="rounded-lg border-2 border-dashed border-gray-300 p-6 text-center">
                <FileText className="mx-auto mb-2 h-12 w-12 text-gray-400" />
                <p className="mb-2 text-sm font-medium text-gray-700">
                  {params.locale === 'ar' ? 'تحميل المستندات' : 'Upload Documents'}
                </p>
                <p className="mb-4 text-xs text-gray-500">
                  {params.locale === 'ar'
                    ? 'جواز السفر، الصور، المستندات الداعمة'
                    : 'Passport, Photos, Supporting Documents'}
                </p>
                <input type="file" multiple className="hidden" id="file-upload" />
                <label htmlFor="file-upload" className="btn btn-secondary cursor-pointer">
                  {params.locale === 'ar' ? 'اختر الملفات' : 'Choose Files'}
                </label>
              </div>

              <div className="rounded-lg bg-blue-50 p-4">
                <h4 className="mb-2 font-semibold text-primary">{t.processingTime}</h4>
                <p className="text-sm text-gray-700">
                  {params.locale === 'ar'
                    ? 'عادة 7-14 يوم عمل (حسب الدولة ونوع التأشيرة)'
                    : 'Typically 7-14 business days (depends on country and visa type)'}
                </p>
              </div>

              <Button variant="primary" size="lg" className="w-full" type="submit">
                {t.startApplication}
              </Button>

              <p className="text-center text-xs text-gray-500">
                {params.locale === 'ar'
                  ? 'سيتواصل معك فريقنا لتأكيد التفاصيل والمتطلبات'
                  : "Our team will contact you to confirm details and requirements"}
              </p>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
