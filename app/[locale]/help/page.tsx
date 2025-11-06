'use client';

import { Locale } from '@/lib/i18n/config';
import { MessageCircle, Mail, Phone, Clock, Book, HelpCircle, FileText } from 'lucide-react';
import Link from 'next/link';

export default function HelpCenterPage({ params }: { params: { locale: Locale } }) {
  const isArabic = params.locale === 'ar';

  const helpTopics = [
    {
      icon: Book,
      title: isArabic ? 'الأسئلة الشائعة' : 'Frequently Asked Questions',
      description: isArabic
        ? 'ابحث عن إجابات سريعة للأسئلة الشائعة'
        : 'Find quick answers to common questions',
      link: `/${params.locale}/faq`,
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      icon: FileText,
      title: isArabic ? 'سياسة الحجز' : 'Booking Policy',
      description: isArabic
        ? 'تعرف على سياسات الحجز والإلغاء'
        : 'Learn about our booking and cancellation policies',
      link: `/${params.locale}/terms`,
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      icon: HelpCircle,
      title: isArabic ? 'المساعدة في الحجز' : 'Booking Assistance',
      description: isArabic
        ? 'احصل على مساعدة خطوة بخطوة في الحجز'
        : 'Get step-by-step booking assistance',
      link: `/${params.locale}/contact`,
      gradient: 'from-green-500 to-emerald-500',
    },
  ];

  const contactMethods = [
    {
      icon: MessageCircle,
      title: isArabic ? 'واتساب' : 'WhatsApp',
      description: '+974 30424433',
      detail: isArabic ? 'متاح 24/7' : 'Available 24/7',
      link: 'https://wa.me/97430424433',
      gradient: 'from-green-500 to-emerald-500',
    },
    {
      icon: Mail,
      title: isArabic ? 'البريد الإلكتروني' : 'Email',
      description: 'info@houseianabooking.com',
      detail: isArabic ? 'الرد خلال 24 ساعة' : 'Response within 24 hours',
      link: 'mailto:info@houseianabooking.com',
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      icon: Clock,
      title: isArabic ? 'ساعات العمل' : 'Business Hours',
      description: isArabic ? 'الأحد - الخميس' : 'Sunday - Thursday',
      detail: isArabic ? '9:00 ص - 6:00 م' : '9:00 AM - 6:00 PM',
      link: '#',
      gradient: 'from-orange-500 to-red-500',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary-dark to-secondary py-20 text-white">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-72 h-72 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-cyan-300 rounded-full blur-3xl" />
        </div>

        <div className="container-custom relative z-10">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-4xl font-bold md:text-5xl lg:text-6xl">
              {isArabic ? 'مركز المساعدة' : 'Help Center'}
            </h1>
            <p className="text-lg md:text-xl text-cyan-50 leading-relaxed">
              {isArabic
                ? 'نحن هنا لمساعدتك على مدار الساعة طوال أيام الأسبوع'
                : "We're here to help you 24/7"}
            </p>
          </div>
        </div>
      </section>

      {/* Help Topics */}
      <section className="py-16 -mt-12 relative z-20">
        <div className="container-custom">
          <div className="grid gap-6 md:grid-cols-3">
            {helpTopics.map((topic, index) => (
              <Link
                key={index}
                href={topic.link}
                className="group relative overflow-hidden rounded-2xl bg-white p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${topic.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />

                <div className="relative">
                  <div className={`mb-6 inline-flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-br ${topic.gradient} text-white shadow-md group-hover:shadow-lg transition-shadow`}>
                    <topic.icon className="h-8 w-8" />
                  </div>

                  <h3 className="mb-3 text-xl font-bold text-gray-900">{topic.title}</h3>
                  <p className="text-gray-600 mb-4">{topic.description}</p>
                  <p className="text-sm font-semibold text-primary">
                    {isArabic ? 'اعرف المزيد' : 'Learn more'} →
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {isArabic ? 'اتصل بنا' : 'Get in Touch'}
            </h2>
            <p className="text-lg text-gray-600">
              {isArabic
                ? 'اختر الطريقة الأنسب للتواصل معنا'
                : 'Choose the most convenient way to reach us'}
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3 max-w-5xl mx-auto">
            {contactMethods.map((method, index) => (
              <a
                key={index}
                href={method.link}
                className="group relative overflow-hidden rounded-2xl bg-white p-6 shadow-md hover:shadow-xl transition-all duration-300"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${method.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />

                <div className="relative text-center">
                  <div className={`mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br ${method.gradient} text-white shadow-md`}>
                    <method.icon className="h-7 w-7" />
                  </div>

                  <h3 className="mb-2 text-lg font-bold text-gray-900">{method.title}</h3>
                  <p className="text-sm font-medium text-gray-600 mb-1">{method.description}</p>
                  <p className="text-xs text-gray-500">{method.detail}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Tips */}
      <section className="py-16">
        <div className="container-custom">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              {isArabic ? 'نصائح سريعة' : 'Quick Tips'}
            </h2>

            <div className="grid gap-6 md:grid-cols-2">
              {[
                {
                  title: isArabic ? 'احجز مبكراً' : 'Book Early',
                  tip: isArabic
                    ? 'احجز في وقت مبكر للحصول على أفضل الأسعار والتوفر'
                    : 'Book early for the best prices and availability',
                },
                {
                  title: isArabic ? 'تحقق من متطلبات التأشيرة' : 'Check Visa Requirements',
                  tip: isArabic
                    ? 'تأكد من التحقق من متطلبات التأشيرة قبل السفر'
                    : 'Make sure to verify visa requirements before travel',
                },
                {
                  title: isArabic ? 'احتفظ بمستندات السفر' : 'Keep Travel Documents',
                  tip: isArabic
                    ? 'احتفظ بنسخ رقمية من جميع مستندات السفر'
                    : 'Keep digital copies of all travel documents',
                },
                {
                  title: isArabic ? 'التأمين على السفر' : 'Travel Insurance',
                  tip: isArabic
                    ? 'نوصي بشراء تأمين السفر للحماية الإضافية'
                    : 'We recommend purchasing travel insurance for added protection',
                },
              ].map((item, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
                  <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-primary" />
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{item.tip}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
