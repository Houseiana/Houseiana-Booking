'use client';

import { Locale } from '@/lib/i18n/config';
import { Plane, Globe, DollarSign, Shield, Check, Clock, Sparkles } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function FlightsPage({ params }: { params: { locale: Locale } }) {
  const isArabic = params.locale === 'ar';

  const features = [
    {
      icon: DollarSign,
      title: isArabic ? 'أسعار تنافسية' : 'Competitive Prices',
      desc: isArabic ? 'أفضل الأسعار من جميع شركات الطيران' : 'Best prices from all airlines',
    },
    {
      icon: Globe,
      title: isArabic ? 'وجهات عالمية' : 'Global Destinations',
      desc: isArabic ? 'رحلات إلى أي مكان في العالم' : 'Flights to anywhere in the world',
    },
    {
      icon: Clock,
      title: isArabic ? 'حجز فوري' : 'Instant Booking',
      desc: isArabic ? 'تأكيد سريع وآمن' : 'Fast and secure confirmation',
    },
    {
      icon: Shield,
      title: isArabic ? 'دعم متواصل' : 'Continuous Support',
      desc: isArabic ? 'مساعدة على مدار الساعة' : '24/7 assistance',
    },
  ];

  const airlines = [
    {
      name: isArabic ? 'الخطوط الجوية القطرية' : 'Qatar Airways',
      image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&h=600&fit=crop',
      routes: '160+',
    },
    {
      name: isArabic ? 'طيران الإمارات' : 'Emirates',
      image: 'https://images.unsplash.com/photo-1464037866556-6812c9d1c72e?w=800&h=600&fit=crop',
      routes: '150+',
    },
    {
      name: isArabic ? 'الاتحاد للطيران' : 'Etihad Airways',
      image: 'https://images.unsplash.com/photo-1556388158-158ea5ccacbd?w=800&h=600&fit=crop',
      routes: '120+',
    },
    {
      name: isArabic ? 'الخطوط السعودية' : 'Saudi Arabian Airlines',
      image: 'https://images.unsplash.com/photo-1583947215259-38e31be8751f?w=800&h=600&fit=crop',
      routes: '100+',
    },
  ];

  const benefits = [
    isArabic ? 'مقارنة أسعار من مئات شركات الطيران' : 'Compare prices from hundreds of airlines',
    isArabic ? 'خيارات مرنة للحجز والإلغاء' : 'Flexible booking and cancellation options',
    isArabic ? 'مساعدة في اختيار أفضل الرحلات' : 'Assistance in choosing the best flights',
    isArabic ? 'دعم احترافي طوال رحلتك' : 'Professional support throughout your journey',
    isArabic ? 'حجز سريع وآمن' : 'Fast and secure booking',
    isArabic ? 'خدمة عملاء متميزة' : 'Exceptional customer service',
  ];

  const cabinClasses = [
    {
      name: isArabic ? 'الدرجة الاقتصادية' : 'Economy Class',
      price: isArabic ? 'من 1,200 ريال' : 'From QAR 1,200',
      features: [
        isArabic ? 'مقاعد مريحة' : 'Comfortable seats',
        isArabic ? 'وجبات مجانية' : 'Complimentary meals',
        isArabic ? 'ترفيه على متن الطائرة' : 'In-flight entertainment',
      ],
      image: 'https://images.unsplash.com/photo-1542296332-2e4473faf563?w=600&h=400&fit=crop',
    },
    {
      name: isArabic ? 'درجة رجال الأعمال' : 'Business Class',
      price: isArabic ? 'من 5,500 ريال' : 'From QAR 5,500',
      features: [
        isArabic ? 'مقاعد قابلة للاستلقاء' : 'Lie-flat seats',
        isArabic ? 'صالات VIP' : 'VIP lounges',
        isArabic ? 'أولوية الصعود' : 'Priority boarding',
      ],
      image: 'https://images.unsplash.com/photo-1559268950-2d7ceb2efa78?w=600&h=400&fit=crop',
    },
    {
      name: isArabic ? 'الدرجة الأولى' : 'First Class',
      price: isArabic ? 'من 12,000 ريال' : 'From QAR 12,000',
      features: [
        isArabic ? 'أجنحة خاصة' : 'Private suites',
        isArabic ? 'طعام فاخر' : 'Gourmet dining',
        isArabic ? 'خدمة مخصصة' : 'Personalized service',
      ],
      image: 'https://images.unsplash.com/photo-1606768666853-403c90a981ad?w=600&h=400&fit=crop',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary-dark to-secondary py-24 text-white overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-96 h-96 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-cyan-300 rounded-full blur-3xl" />
        </div>

        <div className="container-custom relative z-10">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/20 backdrop-blur-sm px-6 py-3">
              <Plane className="h-5 w-5" />
              <span className="font-semibold">{isArabic ? 'حجز الطيران' : 'Flight Booking'}</span>
            </div>

            <h1 className="mb-6 text-5xl font-bold leading-tight md:text-6xl lg:text-7xl">
              {isArabic ? 'اكتشف العالم معنا' : 'Discover the World With Us'}
            </h1>

            <p className="mb-10 text-xl text-cyan-50 leading-relaxed md:text-2xl">
              {isArabic
                ? 'احجز رحلاتك إلى أي وجهة حول العالم بأفضل الأسعار وأعلى مستوى من الخدمة'
                : 'Book your flights to any destination worldwide at the best prices and highest level of service'}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href={`/${params.locale}/#flights`}
                className="group inline-flex items-center justify-center gap-3 rounded-xl bg-white px-8 py-4 text-lg font-semibold text-primary shadow-xl hover:shadow-2xl transition-all transform hover:scale-105"
              >
                <span>{isArabic ? 'ابحث عن رحلات' : 'Search Flights'}</span>
                <Sparkles className="h-5 w-5 group-hover:rotate-12 transition-transform" />
              </Link>

              <Link
                href="https://wa.me/97430424433"
                target="_blank"
                className="inline-flex items-center justify-center gap-3 rounded-xl bg-green-500 px-8 py-4 text-lg font-semibold text-white shadow-xl hover:shadow-2xl hover:bg-green-600 transition-all"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                <span>{isArabic ? 'تحدث معنا' : 'Chat with Us'}</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group text-center rounded-2xl p-6 transition-all hover:bg-gradient-to-br hover:from-primary/5 hover:to-secondary/5"
              >
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-secondary text-white group-hover:scale-110 transition-transform">
                  <feature.icon className="h-8 w-8" />
                </div>
                <h3 className="mb-2 text-xl font-bold text-gray-900">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cabin Classes */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-4xl font-bold text-gray-900">
              {isArabic ? 'درجات السفر' : 'Cabin Classes'}
            </h2>
            <p className="text-lg text-gray-600">
              {isArabic
                ? 'اختر درجة السفر التي تناسب احتياجاتك وميزانيتك'
                : 'Choose the travel class that suits your needs and budget'}
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {cabinClasses.map((cabin, index) => (
              <div
                key={index}
                className="group overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all"
              >
                <div className="relative h-48">
                  <Image
                    src={cabin.image}
                    alt={cabin.name}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="mb-2 text-2xl font-bold text-gray-900">{cabin.name}</h3>
                  <p className="mb-4 text-xl font-semibold text-primary">{cabin.price}</p>
                  <div className="space-y-2">
                    {cabin.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-gray-700">
                        <Check className="h-5 w-5 text-green-500" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Airlines */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-4xl font-bold text-gray-900">
              {isArabic ? 'شركاء الطيران' : 'Partner Airlines'}
            </h2>
            <p className="text-lg text-gray-600">
              {isArabic
                ? 'نتعاون مع أفضل شركات الطيران في العالم'
                : 'We partner with the world\'s best airlines'}
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {airlines.map((airline, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all transform hover:scale-105"
              >
                <div className="relative h-56">
                  <Image
                    src={airline.image}
                    alt={airline.name}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="mb-2 text-xl font-bold">{airline.name}</h3>
                  <p className="text-cyan-200">{airline.routes} {isArabic ? 'وجهة' : 'Routes'}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="relative h-[500px] overflow-hidden rounded-3xl shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&h=1000&fit=crop"
                  alt="Flight"
                  fill
                  className="object-cover"
                />
              </div>
              {/* Floating Stats */}
              <div className="absolute -bottom-6 -right-6 rounded-2xl bg-white p-6 shadow-xl">
                <div className="text-4xl font-bold text-primary">500+</div>
                <div className="text-gray-600">{isArabic ? 'شركة طيران' : 'Airlines'}</div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <h2 className="mb-6 text-4xl font-bold text-gray-900">
                {isArabic ? 'لماذا تحجز معنا؟' : 'Why Book With Us?'}
              </h2>
              <p className="mb-8 text-lg text-gray-600 leading-relaxed">
                {isArabic
                  ? 'نوفر لك أفضل تجربة حجز طيران مع مقارنة شاملة للأسعار وخيارات مرنة ودعم متواصل'
                  : 'We provide you with the best flight booking experience with comprehensive price comparison, flexible options, and continuous support'}
              </p>

              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-green-500 text-white mt-1">
                      <Check className="h-4 w-4" />
                    </div>
                    <p className="text-gray-700 text-lg">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-gradient-to-br from-primary via-primary-dark to-secondary text-white">
        <div className="container-custom text-center">
          <h2 className="mb-6 text-4xl font-bold md:text-5xl">
            {isArabic ? 'جاهز لحجز رحلتك القادمة؟' : 'Ready to Book Your Next Flight?'}
          </h2>
          <p className="mb-10 text-xl text-cyan-50 mx-auto max-w-2xl">
            {isArabic
              ? 'ابدأ رحلتك اليوم واستمتع بأفضل الأسعار وأعلى مستوى من الخدمة'
              : 'Start your journey today and enjoy the best prices and highest level of service'}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={`/${params.locale}/#flights`}
              className="group inline-flex items-center justify-center gap-3 rounded-xl bg-white px-10 py-5 text-lg font-semibold text-primary shadow-xl hover:shadow-2xl transition-all transform hover:scale-105"
            >
              <Plane className="h-6 w-6" />
              <span>{isArabic ? 'ابحث عن رحلات الآن' : 'Search Flights Now'}</span>
            </Link>

            <Link
              href={`/${params.locale}/contact`}
              className="inline-flex items-center justify-center gap-3 rounded-xl border-2 border-white bg-transparent px-10 py-5 text-lg font-semibold text-white hover:bg-white hover:text-primary transition-all"
            >
              <span>{isArabic ? 'اتصل بنا' : 'Contact Us'}</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
