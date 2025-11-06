'use client';

import { Locale } from '@/lib/i18n/config';
import { Button } from '@/components/ui/Button';
import { Mail, Phone, MapPin, MessageCircle } from 'lucide-react';

export default function ContactPage({ params }: { params: { locale: Locale } }) {
  const isArabic = params.locale === 'ar';

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-primary py-16 text-white">
        <div className="container-custom text-center">
          <h1 className="mb-4 text-4xl font-bold md:text-5xl">
            {isArabic ? 'تواصل معنا' : 'Contact Us'}
          </h1>
          <p className="mx-auto max-w-2xl text-lg opacity-90">
            {isArabic
              ? 'نحن هنا لمساعدتك على مدار الساعة طوال أيام الأسبوع'
              : "We're here to help you 24/7"}
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: Phone,
                title: isArabic ? 'الهاتف' : 'Phone',
                info: '+974 30424433',
                link: 'tel:+97430424433',
              },
              {
                icon: MessageCircle,
                title: isArabic ? 'واتساب' : 'WhatsApp',
                info: '+974 30424433',
                link: 'https://wa.me/97430424433',
              },
              {
                icon: Mail,
                title: isArabic ? 'البريد الإلكتروني' : 'Email',
                info: 'info@houseiana.com',
                link: 'mailto:info@houseiana.com',
              },
              {
                icon: MapPin,
                title: isArabic ? 'العنوان' : 'Address',
                info: isArabic ? 'الدوحة، قطر' : 'Doha, Qatar',
                link: '#',
              },
            ].map((contact, index) => (
              <a
                key={index}
                href={contact.link}
                className="card text-center transition-all hover:shadow-lg"
              >
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary-light">
                  <contact.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="mb-2 font-semibold">{contact.title}</h3>
                <p className="text-gray-600">{contact.info}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="mx-auto max-w-2xl rounded-2xl bg-white p-8 shadow-soft">
            <h2 className="mb-6 text-2xl font-bold text-center">
              {isArabic ? 'أرسل لنا رسالة' : 'Send Us a Message'}
            </h2>

            <form className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-medium">
                    {isArabic ? 'الاسم الأول' : 'First Name'}
                  </label>
                  <input type="text" className="input" required />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium">
                    {isArabic ? 'اسم العائلة' : 'Last Name'}
                  </label>
                  <input type="text" className="input" required />
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-medium">
                    {isArabic ? 'البريد الإلكتروني' : 'Email'}
                  </label>
                  <input type="email" className="input" required />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium">
                    {isArabic ? 'رقم الهاتف' : 'Phone Number'}
                  </label>
                  <input type="tel" className="input" />
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium">
                  {isArabic ? 'الموضوع' : 'Subject'}
                </label>
                <select className="input" required>
                  <option value="">
                    {isArabic ? 'اختر موضوعاً' : 'Select a subject'}
                  </option>
                  <option>{isArabic ? 'استفسار عن حجز' : 'Booking Inquiry'}</option>
                  <option>{isArabic ? 'دعم فني' : 'Technical Support'}</option>
                  <option>{isArabic ? 'ملاحظات' : 'Feedback'}</option>
                  <option>{isArabic ? 'أخرى' : 'Other'}</option>
                </select>
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium">
                  {isArabic ? 'الرسالة' : 'Message'}
                </label>
                <textarea
                  rows={5}
                  className="input resize-none"
                  placeholder={isArabic ? 'اكتب رسالتك هنا...' : 'Write your message here...'}
                  required
                />
              </div>

              <Button variant="primary" size="lg" className="w-full" type="submit">
                {isArabic ? 'إرسال الرسالة' : 'Send Message'}
              </Button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
