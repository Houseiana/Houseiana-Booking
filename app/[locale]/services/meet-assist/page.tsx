'use client';

import { Locale } from '@/lib/i18n/config';
import { UserCheck, Shield, Clock, Check, Sparkles, HandHeart } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function MeetAssistPage({ params }: { params: { locale: Locale } }) {
  const isArabic = params.locale === 'ar';

  const features = [
    {
      icon: UserCheck,
      title: isArabic ? 'خدمة شخصية' : 'Personal Service',
      desc: isArabic ? 'مساعد خاص لمرافقتك' : 'Personal assistant to escort you',
    },
    {
      icon: Shield,
      title: isArabic ? 'آمن ومريح' : 'Safe & Comfortable',
      desc: isArabic ? 'تجربة سلسة وآمنة' : 'Smooth and secure experience',
    },
    {
      icon: Clock,
      title: isArabic ? 'توفير للوقت' : 'Time Saving',
      desc: isArabic ? 'تجنب الانتظار الطويل' : 'Avoid long waiting times',
    },
    {
      icon: HandHeart,
      title: isArabic ? 'خدمة VIP' : 'VIP Service',
      desc: isArabic ? 'معاملة راقية ومميزة' : 'Premium and distinguished treatment',
    },
  ];

  const serviceTypes = [
    {
      name: isArabic ? 'خدمة الوصول' : 'Arrival Service',
      desc: isArabic ? 'استقبال ومساعدة عند الوصول' : 'Meet and assist upon arrival',
      image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=600&h=400&fit=crop',
    },
    {
      name: isArabic ? 'خدمة المغادرة' : 'Departure Service',
      desc: isArabic ? 'مرافقة وتسهيل إجراءات السفر' : 'Escort and facilitate travel procedures',
      image: 'https://images.unsplash.com/photo-1464037866556-6812c9d1c72e?w=600&h=400&fit=crop',
    },
    {
      name: isArabic ? 'خدمة الترانزيت' : 'Transit Service',
      desc: isArabic ? 'مساعدة في الانتقال بين الرحلات' : 'Assistance in connecting flights',
      image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=600&h=400&fit=crop',
    },
  ];

  const benefits = [
    isArabic ? 'استقبال شخصي في المطار' : 'Personal airport reception',
    isArabic ? 'مساعدة في إجراءات الجوازات والجمارك' : 'Assistance with passport and customs procedures',
    isArabic ? 'مرافقة حتى بوابة المغادرة أو خارج المطار' : 'Escort to departure gate or outside airport',
    isArabic ? 'مساعدة في نقل الأمتعة' : 'Luggage handling assistance',
    isArabic ? 'خدمة متوفرة على مدار الساعة' : 'Service available 24/7',
    isArabic ? 'موظفون محترفون ومتعددو اللغات' : 'Professional multilingual staff',
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary-dark to-secondary py-24 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-96 h-96 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-cyan-300 rounded-full blur-3xl" />
        </div>

        <div className="container-custom relative z-10">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/20 backdrop-blur-sm px-6 py-3">
              <UserCheck className="h-5 w-5" />
              <span className="font-semibold">{isArabic ? 'خدمة الاستقبال والمساعدة' : 'Meet & Assist Service'}</span>
            </div>

            <h1 className="mb-6 text-5xl font-bold leading-tight md:text-6xl lg:text-7xl">
              {isArabic ? 'خدمة الاستقبال والمساعدة في المطار' : 'Airport Meet & Assist Service'}
            </h1>

            <p className="mb-10 text-xl text-cyan-50 leading-relaxed md:text-2xl">
              {isArabic
                ? 'استمتع بتجربة سفر سلسة ومريحة مع خدمة الاستقبال والمساعدة الشخصية في المطار'
                : 'Enjoy a smooth and comfortable travel experience with personal airport meet and assist service'}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href={`/${params.locale}/#meet-assist`}
                className="group inline-flex items-center justify-center gap-3 rounded-xl bg-white px-8 py-4 text-lg font-semibold text-primary shadow-xl hover:shadow-2xl transition-all transform hover:scale-105"
              >
                <span>{isArabic ? 'احجز الخدمة الآن' : 'Book Service Now'}</span>
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
                <span>{isArabic ? 'استفسر الآن' : 'Inquire Now'}</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <div key={index} className="group text-center rounded-2xl p-6 transition-all hover:bg-gradient-to-br hover:from-primary/5 hover:to-secondary/5">
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

      {/* Service Types */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-4xl font-bold text-gray-900">
              {isArabic ? 'أنواع الخدمات' : 'Service Types'}
            </h2>
            <p className="text-lg text-gray-600">
              {isArabic
                ? 'اختر الخدمة المناسبة لاحتياجاتك'
                : 'Choose the service that suits your needs'}
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {serviceTypes.map((service, index) => (
              <div key={index} className="group overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all">
                <div className="relative h-48">
                  <Image src={service.image} alt={service.name} fill className="object-cover transition-transform duration-300 group-hover:scale-110" />
                </div>
                <div className="p-6">
                  <h3 className="mb-2 text-xl font-bold text-gray-900">{service.name}</h3>
                  <p className="text-gray-600">{service.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div>
              <h2 className="mb-6 text-4xl font-bold text-gray-900">
                {isArabic ? 'ما المميز في خدمتنا؟' : 'What Makes Our Service Special?'}
              </h2>
              <p className="mb-8 text-lg text-gray-600 leading-relaxed">
                {isArabic
                  ? 'نوفر لك تجربة استثنائية في المطار مع فريق محترف ومدرب على أعلى مستوى'
                  : 'We provide you with an exceptional airport experience with a professional and highly trained team'}
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

            <div className="relative">
              <div className="relative h-[500px] overflow-hidden rounded-3xl shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1556388158-158ea5ccacbd?w=800&h=1000&fit=crop"
                  alt="Meet & Assist Service"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 rounded-2xl bg-white p-6 shadow-xl">
                <div className="text-4xl font-bold text-primary">24/7</div>
                <div className="text-gray-600">{isArabic ? 'خدمة متاحة' : 'Service Available'}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-gradient-to-br from-primary via-primary-dark to-secondary text-white">
        <div className="container-custom text-center">
          <h2 className="mb-6 text-4xl font-bold md:text-5xl">
            {isArabic ? 'جاهز لحجز خدمة الاستقبال؟' : 'Ready to Book Meet & Assist?'}
          </h2>
          <p className="mb-10 text-xl text-cyan-50 mx-auto max-w-2xl">
            {isArabic
              ? 'دعنا نجعل تجربتك في المطار أكثر راحة وسلاسة'
              : 'Let us make your airport experience more comfortable and smooth'}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={`/${params.locale}/#meet-assist`}
              className="group inline-flex items-center justify-center gap-3 rounded-xl bg-white px-10 py-5 text-lg font-semibold text-primary shadow-xl hover:shadow-2xl transition-all transform hover:scale-105"
            >
              <UserCheck className="h-6 w-6" />
              <span>{isArabic ? 'احجز الآن' : 'Book Now'}</span>
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
