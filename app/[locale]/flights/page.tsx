'use client';

import { Locale } from '@/lib/i18n/config';
import { Plane, Star, Check, Award, Shield, Clock, Sparkles, Globe, TrendingUp, Users } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function FlightsPage({ params }: { params: { locale: Locale } }) {
  const isArabic = params.locale === 'ar';

  const features = [
    {
      icon: TrendingUp,
      title: isArabic ? 'أسعار تنافسية' : 'Competitive Pricing',
      desc: isArabic ? 'أفضل الأسعار من جميع شركات الطيران' : 'Best rates from all major airlines',
    },
    {
      icon: Globe,
      title: isArabic ? 'وجهات عالمية' : 'Global Destinations',
      desc: isArabic ? 'رحلات إلى أي مكان في العالم' : 'Flights to any destination worldwide',
    },
    {
      icon: Clock,
      title: isArabic ? 'كونسيرج طيران 24/7' : '24/7 Flight Concierge',
      desc: isArabic ? 'دعم مخصص للرحلات' : 'Dedicated flight support',
    },
    {
      icon: Shield,
      title: isArabic ? 'حجز آمن' : 'Secure Booking',
      desc: isArabic ? 'معاملات محمية بالكامل' : 'Fully protected transactions',
    },
  ];

  const airlines = [
    {
      name: isArabic ? 'الخطوط الجوية القطرية' : 'Qatar Airways',
      image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&h=600&fit=crop&q=90',
      routes: '160+',
    },
    {
      name: isArabic ? 'طيران الإمارات' : 'Emirates',
      image: 'https://images.unsplash.com/photo-1464037866556-6812c9d1c72e?w=800&h=600&fit=crop&q=90',
      routes: '150+',
    },
    {
      name: isArabic ? 'الاتحاد للطيران' : 'Etihad Airways',
      image: 'https://images.unsplash.com/photo-1556388158-158ea5ccacbd?w=800&h=600&fit=crop&q=90',
      routes: '120+',
    },
    {
      name: isArabic ? 'الخطوط السعودية' : 'Saudi Arabian Airlines',
      image: 'https://images.unsplash.com/photo-1583947215259-38e31be8751f?w=800&h=600&fit=crop&q=90',
      routes: '100+',
    },
  ];

  const benefits = [
    isArabic ? 'مقارنة أسعار من مئات شركات الطيران' : 'Compare prices from hundreds of airlines',
    isArabic ? 'خيارات مرنة للحجز والإلغاء' : 'Flexible booking and cancellation options',
    isArabic ? 'مساعدة في اختيار أفضل الرحلات' : 'Assistance in selecting the best flights',
    isArabic ? 'دعم كونسيرج شخصي طوال رحلتك' : 'Personal concierge support throughout your journey',
    isArabic ? 'حجز سريع وآمن' : 'Fast and secure booking',
    isArabic ? 'إدارة مسارات الرحلات المعقدة' : 'Management of complex flight itineraries',
  ];

  const cabinClasses = [
    {
      name: isArabic ? 'الدرجة الاقتصادية' : 'Economy Class',
      price: isArabic ? 'من 1,200 ريال' : 'From QAR 1,200',
      features: [
        isArabic ? 'مقاعد مريحة' : 'Comfortable seating',
        isArabic ? 'وجبات مجانية' : 'Complimentary meals',
        isArabic ? 'ترفيه على متن الطائرة' : 'In-flight entertainment',
      ],
      image: 'https://images.unsplash.com/photo-1542296332-2e4473faf563?w=600&h=400&fit=crop&q=90',
    },
    {
      name: isArabic ? 'درجة رجال الأعمال' : 'Business Class',
      price: isArabic ? 'من 5,500 ريال' : 'From QAR 5,500',
      features: [
        isArabic ? 'مقاعد قابلة للاستلقاء' : 'Lie-flat seats',
        isArabic ? 'صالات VIP' : 'VIP lounge access',
        isArabic ? 'أولوية الصعود' : 'Priority boarding',
      ],
      image: 'https://images.unsplash.com/photo-1559268950-2d7ceb2efa78?w=600&h=400&fit=crop&q=90',
    },
    {
      name: isArabic ? 'الدرجة الأولى' : 'First Class',
      price: isArabic ? 'من 12,000 ريال' : 'From QAR 12,000',
      features: [
        isArabic ? 'أجنحة خاصة' : 'Private suites',
        isArabic ? 'طعام فاخر' : 'Gourmet dining',
        isArabic ? 'خدمة مخصصة' : 'Personalized service',
      ],
      image: 'https://images.unsplash.com/photo-1606768666853-403c90a981ad?w=600&h=400&fit=crop&q=90',
    },
  ];

  return (
    <div className="min-h-screen bg-pearl">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-midnight via-midnight-800 to-midnight-900 py-24 text-white overflow-hidden">
        {/* Luxury Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-[30rem] h-[30rem] bg-gold/8 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="mx-auto max-w-4xl text-center">
            {/* Luxury Badge */}
            <div className="mb-6 inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-gold/20 to-gold/10 backdrop-blur-sm px-6 py-3 border border-gold/30 shadow-gold">
              <Plane className="h-5 w-5 text-gold-300" />
              <span className="font-semibold text-pearl tracking-wide uppercase text-sm">
                {isArabic ? 'حجوزات الطيران الفاخرة' : 'Luxury Flight Bookings'}
              </span>
            </div>

            <h1 className="mb-6 text-5xl font-display font-bold leading-tight md:text-6xl lg:text-7xl">
              <span className="block mb-2">
                {isArabic ? 'اكتشف العالم' : 'Discover the World'}
              </span>
              <span className="block bg-gradient-to-r from-gold-200 via-gold to-gold-400 bg-clip-text text-transparent">
                {isArabic ? 'بأناقة وراحة' : 'With Elegance & Comfort'}
              </span>
            </h1>

            <p className="mb-10 text-xl text-pearl-200/90 leading-relaxed md:text-2xl max-w-3xl mx-auto">
              {isArabic
                ? 'كونسيرج الطيران المخصص لدينا ينسق رحلات سلسة إلى أي وجهة حول العالم. من رحلات الأعمال الفعالة إلى الرحلات الفاخرة من الدرجة الأولى، نضمن أن كل تفصيل من رحلتك يتم تنفيذه بشكل لا تشوبه شائبة.'
                : 'Our dedicated flight concierge curates seamless journeys to any destination worldwide. From efficient business trips to luxurious first-class experiences, we ensure every detail of your travel is flawlessly executed.'}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href={`/${params.locale}/#flights`}
                className="group inline-flex items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-gold-400 to-gold-600 px-8 py-4 text-lg font-bold text-white shadow-gold hover:shadow-glow transition-all transform hover:scale-105"
              >
                <span>{isArabic ? 'ابحث عن رحلات' : 'Search Flights'}</span>
                <Sparkles className="h-5 w-5 group-hover:rotate-12 transition-transform" />
              </Link>

              <Link
                href="https://wa.me/97430424433"
                target="_blank"
                className="inline-flex items-center justify-center gap-3 rounded-xl bg-green-500 px-8 py-4 text-lg font-bold text-white shadow-xl hover:shadow-2xl hover:bg-green-600 transition-all"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                <span>{isArabic ? 'تحدث إلى كونسيرج' : 'Speak to Concierge'}</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Content Section - Why Choose Houseiana for Flights */}
      <section className="section bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-midnight mb-6 text-center">
              {isArabic ? 'لماذا تختار هوسيانا لحجوزات الطيران؟' : 'Why Choose Houseiana for Flight Bookings?'}
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
              <p className="text-lg">
                {isArabic
                  ? 'في هوسيانا بوكينغ، نحول حجز الطيران من عملية محبطة إلى تجربة سلسة. منذ عام 2024، قدم كونسيرج الطيران المتخصص لدينا خبرة لا مثيل لها في إدارة مسارات الرحلات المعقدة، وتأمين أفضل الأسعار، والتعامل مع التغييرات في اللحظة الأخيرة مع الاحترافية والتقدير.'
                  : 'At Houseiana Booking, we transform flight reservations from a frustrating process into a seamless experience. Since 2024, our specialized flight concierge has provided unmatched expertise in managing complex itineraries, securing competitive rates, and handling last-minute changes with professionalism and discretion.'}
              </p>
              <p className="text-lg">
                {isArabic
                  ? 'نوفر الوصول إلى مئات شركات الطيران في جميع أنحاء العالم، مما يضمن مقارنة شاملة للأسعار عبر جميع الدرجات - من الاقتصادية الفعالة إلى الدرجة الأولى الفاخرة. يفهم خبراؤنا أن حجز الطيران لا يتعلق فقط بالوصول من النقطة أ إلى ب؛ بل يتعلق بتحسين الراحة والوقت والتكلفة مع الحفاظ على أعلى معايير الخدمة.'
                  : 'We provide access to hundreds of airlines worldwide, ensuring comprehensive fare comparison across all cabin classes—from efficient economy to luxurious first-class. Our experts understand that flight booking isn\'t just about getting from point A to point B; it\'s about optimizing comfort, timing, and cost while maintaining the highest service standards.'}
              </p>
              <p className="text-lg">
                {isArabic
                  ? 'ما يميز هوسيانا هو إدارتنا الاستباقية لمسارات الرحلات. نتعامل مع التوقفات المعقدة والتذاكر متعددة المدن ومتطلبات السفر الخاصة بدقة. سواء كنت بحاجة إلى رحلة عمل في اللحظة الأخيرة إلى لندن، أو رحلة عائلية متصلة إلى ثلاث قارات، أو حجز من الدرجة الأولى لشهر عسل، فإن كونسيرج الطيران لدينا يضمن أن كل قطاع من رحلتك منسق بشكل لا تشوبه شائبة.'
                  : 'What distinguishes Houseiana is our anticipatory management of flight itineraries. We handle complex stopovers, multi-city tickets, and special travel requirements with precision. Whether you need a last-minute business flight to London, a family connection across three continents, or a first-class honeymoon booking, our flight concierge ensures every segment of your journey is flawlessly coordinated.'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section bg-gradient-to-br from-pearl to-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-midnight mb-4">
              {isArabic ? 'مزايا حجز الطيران الفاخر' : 'Luxury Flight Booking Advantages'}
            </h2>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group text-center rounded-2xl p-8 bg-white border border-gray-100 hover:border-gold/30 shadow-soft hover:shadow-luxury transition-all duration-500"
              >
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-gold/20 to-gold/10 border border-gold/20 text-gold-600 group-hover:scale-110 transition-transform duration-500">
                  <feature.icon className="h-8 w-8" />
                </div>
                <h3 className="mb-3 text-xl font-display font-bold text-midnight">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cabin Classes */}
      <section className="section bg-white">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-midnight mb-4">
              {isArabic ? 'درجات السفر' : 'Cabin Classes'}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {isArabic
                ? 'اختر درجة السفر التي تناسب احتياجاتك وميزانيتك'
                : 'Choose the travel class that suits your needs and budget'}
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
            {cabinClasses.map((cabin, index) => (
              <div
                key={index}
                className="group overflow-hidden rounded-2xl bg-gradient-to-br from-pearl to-gray-50 border border-gray-100 hover:border-gold/30 shadow-soft hover:shadow-luxury transition-all duration-500"
              >
                <div className="relative h-48">
                  <Image
                    src={cabin.image}
                    alt={cabin.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="mb-2 text-2xl font-display font-bold text-midnight">{cabin.name}</h3>
                  <p className="mb-4 text-xl font-semibold text-gold-600">{cabin.price}</p>
                  <div className="space-y-2">
                    {cabin.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-gray-700">
                        <Check className="h-5 w-5 text-gold" />
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
      <section className="section bg-gradient-to-br from-pearl to-gray-50">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-4xl md:text-5xl font-display font-bold text-midnight">
              {isArabic ? 'شركاء الطيران المفضلون' : 'Preferred Airline Partners'}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {isArabic
                ? 'نتعاون مع أفضل شركات الطيران في العالم لنوفر لك خيارات متميزة'
                : 'We partner with the world\'s finest airlines to provide you with premium options'}
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto">
            {airlines.map((airline, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl shadow-luxury hover:shadow-glow transition-all transform hover:scale-105 duration-500"
              >
                <div className="relative h-56">
                  <Image
                    src={airline.image}
                    alt={airline.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-midnight/90 via-midnight/50 to-transparent" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="mb-2 text-xl font-display font-bold">{airline.name}</h3>
                  <p className="text-gold-200 font-semibold">{airline.routes} {isArabic ? 'وجهة' : 'Routes'}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section bg-white">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 lg:grid-cols-2 items-center max-w-7xl mx-auto">
            <div className="relative order-2 lg:order-1">
              <div className="relative h-[500px] overflow-hidden rounded-3xl shadow-luxury">
                <Image
                  src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&h=1000&fit=crop&q=90"
                  alt="Luxury Flight"
                  fill
                  className="object-cover"
                />
              </div>
              {/* Floating Stats */}
              <div className="absolute -bottom-6 -right-6 rounded-2xl bg-white p-6 shadow-luxury border border-gold/20">
                <div className="text-4xl font-display font-bold text-midnight">500+</div>
                <div className="text-gray-600 font-semibold">{isArabic ? 'شركة طيران' : 'Airlines'}</div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <h2 className="mb-6 text-4xl md:text-5xl font-display font-bold text-midnight">
                {isArabic ? 'تجربة كونسيرج الطيران' : 'The Flight Concierge Experience'}
              </h2>
              <p className="mb-8 text-lg text-gray-700 leading-relaxed">
                {isArabic
                  ? 'نوفر لك أفضل تجربة حجز طيران فاخرة مع مقارنة شاملة للأسعار وخيارات مرنة ودعم متواصل'
                  : 'We provide the ultimate luxury flight booking experience with comprehensive price comparison, flexible options, and continuous support'}
              </p>

              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-gold text-white mt-1">
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
      <section className="section bg-gradient-to-br from-midnight via-midnight-800 to-midnight-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-[30rem] h-[30rem] bg-gold/8 rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="mb-6 text-4xl md:text-5xl font-display font-bold">
            {isArabic ? 'جاهز لحجز رحلتك القادمة؟' : 'Ready to Book Your Next Flight?'}
          </h2>
          <p className="mb-10 text-xl text-pearl-200/90 mx-auto max-w-2xl">
            {isArabic
              ? 'دع كونسيرجنا المخصص يجد لك أفضل خيارات الطيران'
              : 'Let our dedicated concierge find the best flight options for you'}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={`/${params.locale}/#flights`}
              className="group inline-flex items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-gold-400 to-gold-600 px-10 py-5 text-lg font-bold text-white shadow-gold hover:shadow-glow transition-all transform hover:scale-105"
            >
              <Plane className="h-6 w-6" />
              <span>{isArabic ? 'ابحث عن رحلات الآن' : 'Search Flights Now'}</span>
            </Link>

            <Link
              href={`/${params.locale}/contact`}
              className="inline-flex items-center justify-center gap-3 rounded-xl border-2 border-gold bg-transparent px-10 py-5 text-lg font-bold text-white hover:bg-gold/10 transition-all backdrop-blur-sm"
            >
              <span>{isArabic ? 'اتصل بالكونسيرج' : 'Contact Concierge'}</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
