'use client';

import { Locale } from '@/lib/i18n/config';
import { getTranslations } from '@/lib/i18n/translations';
import { HeroSection } from '@/components/sections/HeroSection';
import { ServiceShowcase } from '@/components/sections/ServiceShowcase';
import { WhyUsSection } from '@/components/sections/WhyUsSection';
import { StructuredData } from '@/components/seo/StructuredData';
import { Award, Users, Globe, Lock, Shield, TrendingUp, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

export default function HomePage({ params }: { params: { locale: Locale } }) {
  const translations = getTranslations(params.locale);
  const isArabic = params.locale === 'ar';

  return (
    <>
      {/* SEO: JSON-LD Structured Data */}
      <StructuredData locale={params.locale} />

      <HeroSection translations={translations} locale={params.locale} />

      {/* Trust Bar - Premium Guarantees */}
      <section className="relative bg-white border-y border-gray-100 py-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-gold/5 via-transparent to-gold/5" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              {
                icon: Shield,
                title: isArabic ? 'معاملات آمنة 100%' : '100% Secure Transactions',
                subtitle: isArabic ? 'مشفرة ومحمية' : 'Encrypted & Protected'
              },
              {
                icon: TrendingUp,
                title: isArabic ? 'ضمان أفضل الأسعار' : 'Best Price Guarantee',
                subtitle: isArabic ? 'أو نطابق الفرق' : 'Or We Match the Difference'
              },
              {
                icon: CheckCircle2,
                title: isArabic ? 'دعم كونسيرج 24/7' : '24/7 Concierge Support',
                subtitle: isArabic ? 'فريق خبراء متاح دائماً' : 'Expert Team Always Available'
              },
              {
                icon: Globe,
                title: isArabic ? '50+ وجهة' : '50+ Destinations',
                subtitle: isArabic ? 'شبكة عالمية' : 'Global Network'
              }
            ].map((item, index) => (
              <div key={index} className="flex flex-col items-center text-center gap-3 p-4 rounded-xl hover:bg-gold/5 transition-all duration-300">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-gold/20 to-gold/10 border border-gold/20">
                  <item.icon className="h-6 w-6 text-gold-600" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-midnight mb-1">{item.title}</h3>
                  <p className="text-xs text-gray-600">{item.subtitle}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ServiceShowcase locale={params.locale} />

      {/* Brand Identity - Our Unwavering Commitments */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-pearl to-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-midnight mb-4">
              {isArabic ? 'التزاماتنا الثابتة' : 'Our Unwavering Commitments'}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {isArabic
                ? 'نحن نعيد تعريف السفر الفاخر من خلال التميز والخدمة الاستباقية'
                : 'We redefine luxury travel through excellence and anticipatory service'}
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto">
            {[
              {
                icon: Award,
                title: isArabic ? 'التميز، مُقدَّم' : 'Excellence, Delivered',
                desc: isArabic
                  ? 'نحافظ على أعلى المعايير في كل برنامج رحلة وشريك وحل نقدمه'
                  : 'We uphold the highest standards in every itinerary, partner, and solution we present',
              },
              {
                icon: Users,
                title: isArabic ? 'خدمة استباقية' : 'Anticipatory Service',
                desc: isArabic
                  ? 'رضاك هو تركيزنا الوحيد. نتوقع الاحتياجات ونحل التحديات بشكل استباقي'
                  : 'Your satisfaction is our singular focus. We anticipate needs and proactively resolve challenges',
              },
              {
                icon: Globe,
                title: isArabic ? 'الوصول العالمي' : 'Global Access',
                desc: isArabic
                  ? 'نربطك بالوجهات الأكثر رغبة وسرية في العالم'
                  : 'Connecting you with the world\'s most desired and discreet destinations',
              },
              {
                icon: Lock,
                title: isArabic ? 'السرية الشخصية' : 'Personalized Discretion',
                desc: isArabic
                  ? 'تتم إدارة كل علاقة عميل باهتمام مطلق وسرية'
                  : 'Every client relationship is managed with absolute attention and confidentiality',
              },
            ].map((value, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl p-8 shadow-soft hover:shadow-luxury transition-all duration-500 border border-gray-100 hover:border-gold/30"
              >
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-gold/20 to-gold/10 border border-gold/20 group-hover:scale-110 transition-transform duration-500">
                  <value.icon className="h-8 w-8 text-gold-600" />
                </div>
                <h3 className="mb-3 text-xl font-display font-bold text-midnight">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <WhyUsSection translations={translations} />

      {/* How It Works Section - Luxury Concierge Process */}
      <section className="py-16 md:py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 right-10 w-96 h-96 bg-gold/3 rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl md:text-5xl font-display font-bold text-midnight">
              {isArabic ? 'تجربة الكونسيرج الفاخرة' : 'The Luxury Concierge Experience'}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {isArabic
                ? 'نحول أحلام سفرك إلى واقع في ثلاث خطوات سهلة'
                : 'We transform your travel dreams into reality in three effortless steps'}
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3 max-w-5xl mx-auto">
            {[
              {
                step: '1',
                title: isArabic ? 'شارك رؤيتك' : 'Share Your Vision',
                description:
                  isArabic
                    ? 'أخبرنا بتفضيلات سفرك - سيتولى كونسيرجك المخصص الباقي'
                    : 'Tell us your travel preferences — your dedicated concierge handles the rest',
              },
              {
                step: '2',
                title: isArabic ? 'نحن نخصص' : 'We Curate',
                description:
                  isArabic
                    ? 'نصمم برنامج رحلة مخصص من الفنادق الفاخرة والخبرات الحصرية'
                    : 'We design a bespoke itinerary from luxury hotels and exclusive experiences',
              },
              {
                step: '3',
                title: isArabic ? 'أنت تسافر بلا جهد' : 'You Travel Effortlessly',
                description:
                  isArabic
                    ? 'استمتع برحلة سلسة مع دعم على مدار الساعة وتنفيذ لا تشوبه شائبة'
                    : 'Enjoy a seamless journey with 24/7 support and flawless execution',
              },
            ].map((item) => (
              <div key={item.step} className="text-center group">
                <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-gold/20 to-gold/10 border-2 border-gold/30 text-3xl font-display font-bold text-gold-600 group-hover:scale-110 transition-transform duration-500 shadow-soft group-hover:shadow-gold">
                  {item.step}
                </div>
                <h3 className="mb-3 text-2xl font-display font-bold text-midnight">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Luxury Focused */}
      <section className="relative py-20 md:py-28 bg-gradient-to-br from-midnight via-midnight-800 to-midnight-900 text-white overflow-hidden">
        {/* Luxury Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-[30rem] h-[30rem] bg-gold/8 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="mb-6 text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight">
              <span className="block mb-2">
                {isArabic ? 'هل أنت مستعد لرفع مستوى' : 'Ready to Elevate'}
              </span>
              <span className="block bg-gradient-to-r from-gold-200 via-gold to-gold-400 bg-clip-text text-transparent">
                {isArabic ? 'تجربة سفرك؟' : 'Your Travel Experience?'}
              </span>
            </h2>
            <p className="mb-10 text-xl md:text-2xl text-pearl-200/90 font-light leading-relaxed max-w-2xl mx-auto">
              {isArabic
                ? 'انضم إلى المسافرين المميزين الذين يثقون في كونسيرجنا لرحلات لا تُنسى'
                : 'Join discerning travelers who trust our concierge for unforgettable journeys'}
            </p>
            <div className="flex flex-col items-center justify-center gap-5 sm:flex-row">
              <Link
                href={`/${params.locale}#hero-section`}
                className="group inline-flex items-center justify-center gap-3 rounded-xl px-10 py-5 text-lg font-bold transition-all duration-300 bg-gradient-to-r from-gold-400 to-gold-600 text-white hover:from-gold-500 hover:to-gold-700 shadow-gold hover:shadow-glow transform hover:scale-105"
              >
                {isArabic ? 'ابدأ رحلتك' : 'Start Your Journey'}
                <svg className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <Link
                href={`/${params.locale}/about`}
                className="inline-flex items-center justify-center gap-3 rounded-xl px-10 py-5 text-lg font-medium transition-all duration-300 text-white hover:bg-white/10 border-2 border-gold/50 hover:border-gold backdrop-blur-sm"
              >
                {isArabic ? 'تعرف علينا' : 'Discover Our Story'}
              </Link>
            </div>

            {/* Social Proof */}
            <div className="mt-12 pt-12 border-t border-white/10">
              <p className="text-sm text-pearl-200/70 mb-4 uppercase tracking-wider">
                {isArabic ? 'موثوق به من قبل' : 'Trusted by'}
              </p>
              <div className="flex flex-wrap items-center justify-center gap-8 text-pearl-200/60">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-gold-400" />
                  <span className="text-sm font-medium">{isArabic ? '500+ شريك فندقي' : '500+ Hotel Partners'}</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-gold-400" />
                  <span className="text-sm font-medium">{isArabic ? '50+ وجهة' : '50+ Destinations'}</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-gold-400" />
                  <span className="text-sm font-medium">{isArabic ? 'دعم 24/7' : '24/7 Support'}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}