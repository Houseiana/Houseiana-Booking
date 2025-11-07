'use client';

import { Locale } from '@/lib/i18n/config';
import { Hotel, Star, Check, Award, Shield, Clock, Sparkles, MapPin, Users, Building2 } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function HotelsPage({ params }: { params: { locale: Locale } }) {
  const isArabic = params.locale === 'ar';

  const features = [
    {
      icon: Star,
      title: isArabic ? 'أفضل الأسعار مضمونة' : 'Best Price Guarantee',
      desc: isArabic ? 'نضمن لك الأسعار الأكثر تنافسية أو نطابق الفرق' : 'We guarantee the most competitive rates or match the difference',
    },
    {
      icon: Shield,
      title: isArabic ? 'حجز آمن 100%' : '100% Secure Booking',
      desc: isArabic ? 'معاملات مشفرة ومحمية بالكامل' : 'Fully encrypted and protected transactions',
    },
    {
      icon: Clock,
      title: isArabic ? 'كونسيرج 24/7' : '24/7 Concierge',
      desc: isArabic ? 'دعم مخصص متاح دائماً لك' : 'Dedicated support always available for you',
    },
    {
      icon: Award,
      title: isArabic ? 'خدمة فاخرة' : 'Luxury Service',
      desc: isArabic ? 'إقامات منسقة في أرقى الفنادق' : 'Curated stays at the finest hotels',
    },
  ];

  const destinations = [
    {
      name: isArabic ? 'دبي، الإمارات' : 'Dubai, UAE',
      image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&h=600&fit=crop&q=90',
      hotels: '500+',
    },
    {
      name: isArabic ? 'إسطنبول، تركيا' : 'Istanbul, Turkey',
      image: 'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=800&h=600&fit=crop&q=90',
      hotels: '300+',
    },
    {
      name: isArabic ? 'باريس، فرنسا' : 'Paris, France',
      image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&h=600&fit=crop&q=90',
      hotels: '400+',
    },
    {
      name: isArabic ? 'لندن، بريطانيا' : 'London, UK',
      image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800&h=600&fit=crop&q=90',
      hotels: '350+',
    },
  ];

  const benefits = [
    isArabic ? 'إلغاء مجاني على معظم الحجوزات' : 'Free cancellation on most bookings',
    isArabic ? 'لا توجد رسوم خفية' : 'No hidden fees',
    isArabic ? 'تأكيد فوري للحجز' : 'Instant booking confirmation',
    isArabic ? 'أكثر من 500,000 فندق حول العالم' : 'Over 500,000 hotels worldwide',
    isArabic ? 'كونسيرج شخصي على مدار الساعة' : '24/7 personal concierge',
    isArabic ? 'خدمة حجز احترافية فاخرة' : 'Professional luxury booking service',
  ];

  const hotelCategories = [
    {
      icon: Building2,
      name: isArabic ? 'فنادق فاخرة 5 نجوم' : '5-Star Luxury Hotels',
      desc: isArabic ? 'إقامة استثنائية في أرقى المنشآت' : 'Exceptional stays at the finest properties',
    },
    {
      icon: Award,
      name: isArabic ? 'منتجعات بوتيك' : 'Boutique Resorts',
      desc: isArabic ? 'تجارب فريدة ومخصصة' : 'Unique and personalized experiences',
    },
    {
      icon: Users,
      name: isArabic ? 'فنادق الأعمال' : 'Business Hotels',
      desc: isArabic ? 'مرافق حديثة للمسافرين المحترفين' : 'Modern facilities for professional travelers',
    },
    {
      icon: MapPin,
      name: isArabic ? 'وجهات المنتجعات' : 'Resort Destinations',
      desc: isArabic ? 'ملاذات شاطئية وجبلية فاخرة' : 'Luxurious beach and mountain retreats',
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
              <Hotel className="h-5 w-5 text-gold-300" />
              <span className="font-semibold text-pearl tracking-wide uppercase text-sm">
                {isArabic ? 'حجوزات الفنادق الفاخرة' : 'Luxury Hotel Bookings'}
              </span>
            </div>

            <h1 className="mb-6 text-5xl font-display font-bold leading-tight md:text-6xl lg:text-7xl">
              <span className="block mb-2">
                {isArabic ? 'اكتشف الإقامات الفاخرة' : 'Discover Luxury Stays'}
              </span>
              <span className="block bg-gradient-to-r from-gold-200 via-gold to-gold-400 bg-clip-text text-transparent">
                {isArabic ? 'حول العالم' : 'Around the World'}
              </span>
            </h1>

            <p className="mb-10 text-xl text-pearl-200/90 leading-relaxed md:text-2xl max-w-3xl mx-auto">
              {isArabic
                ? 'كونسيرج الفنادق المخصص لدينا ينسق إقامات استثنائية في أكثر من 500,000 فندق في جميع أنحاء العالم. من الفنادق الفاخرة ذات الخمس نجوم إلى المنتجعات البوتيك الحصرية، نضمن لك أن كل إقامة مصممة خصيصاً لمعاييرك الدقيقة.'
                : 'Our dedicated hotel concierge curates exceptional stays across 500,000+ hotels worldwide. From five-star luxury properties to exclusive boutique resorts, we ensure every accommodation is tailored to your precise standards.'}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href={`/${params.locale}/#hotels`}
                className="group inline-flex items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-gold-400 to-gold-600 px-8 py-4 text-lg font-bold text-white shadow-gold hover:shadow-glow transition-all transform hover:scale-105"
              >
                <span>{isArabic ? 'ابحث عن فنادق' : 'Search Hotels'}</span>
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

      {/* SEO Content Section - Why Choose Houseiana for Hotels */}
      <section className="section bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-midnight mb-6 text-center">
              {isArabic ? 'لماذا تختار هوسيانا لحجوزات الفنادق؟' : 'Why Choose Houseiana for Hotel Bookings?'}
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
              <p className="text-lg">
                {isArabic
                  ? 'في هوسيانا بوكينغ، نعيد تعريف حجز الفنادق من خلال نهج كونسيرج شخصي يتجاوز منصات الحجز التقليدية عبر الإنترنت. منذ عام 2024، كنا نخدم المسافرين المميزين الذين يطالبون بأكثر من مجرد غرفة - فهم يبحثون عن تجارب منسقة وخدمة استباقية وتنفيذ لا تشوبه شائبة.'
                  : 'At Houseiana Booking, we redefine hotel reservations through a personalized concierge approach that transcends traditional online booking platforms. Since 2024, we have been serving discerning travelers who demand more than just a room—they seek curated experiences, anticipatory service, and flawless execution.'}
              </p>
              <p className="text-lg">
                {isArabic
                  ? 'يوفر كونسيرج الفنادق المتخصص لدينا إمكانية الوصول إلى شبكة عالمية تضم أكثر من 500,000 فندق، تتراوح من العلامات التجارية الفاخرة المرموقة إلى المنتجعات البوتيك المخفية. نحن نعمل حصرياً مع الشركاء الذين يشاركوننا التزامنا بالتميز والسرية والاهتمام الشخصي بالتفاصيل.'
                  : 'Our specialized hotel concierge provides access to a global network of 500,000+ properties, ranging from prestigious luxury brands to hidden boutique gems. We work exclusively with partners who share our commitment to excellence, discretion, and personalized attention to detail.'}
              </p>
              <p className="text-lg">
                {isArabic
                  ? 'ما يميز هوسيانا هو نهجنا الاستباقي. لا نقوم فقط بحجز الغرف - بل نصمم الإقامات. يأخذ خبراؤنا في الاعتبار تفضيلات سفرك، وتاريخ الحجز، والاحتياجات الخاصة لتأمين الإقامات المثالية التي تتجاوز التوقعات. سواء كنت بحاجة إلى جناح مواجه للمحيط في دبي، أو غرفة بنتهاوس للأعمال في لندن، أو فيلا منتجع عائلية في جزر المالديف، فإننا نضمن أن كل تفصيل يتوافق مع معاييرك.'
                  : 'What distinguishes Houseiana is our anticipatory approach. We don\'t simply book rooms—we curate stays. Our experts consider your travel preferences, booking history, and special requirements to secure perfect accommodations that exceed expectations. Whether you need an ocean-facing suite in Dubai, a business penthouse in London, or a family resort villa in the Maldives, we ensure every detail aligns with your standards.'}
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
              {isArabic ? 'مزايا حجز الفنادق الفاخرة' : 'Luxury Hotel Booking Advantages'}
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

      {/* Hotel Categories */}
      <section className="section bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-midnight mb-4">
              {isArabic ? 'فئات الفنادق المتاحة' : 'Available Hotel Categories'}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {isArabic
                ? 'من الفنادق الفاخرة إلى المنتجعات البوتيك، نقدم كل أنواع الإقامة'
                : 'From luxury hotels to boutique resorts, we offer every type of accommodation'}
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto">
            {hotelCategories.map((category, index) => (
              <div
                key={index}
                className="group rounded-2xl p-6 bg-gradient-to-br from-pearl to-gray-50 border border-gray-100 hover:border-gold/30 shadow-soft hover:shadow-luxury transition-all duration-500"
              >
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-gold/20 to-gold/10 border border-gold/20 text-gold-600 group-hover:scale-110 transition-transform duration-500">
                  <category.icon className="h-7 w-7" />
                </div>
                <h3 className="mb-2 text-lg font-display font-bold text-midnight">{category.name}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{category.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Destinations */}
      <section className="section bg-gradient-to-br from-pearl to-gray-50">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-4xl md:text-5xl font-display font-bold text-midnight">
              {isArabic ? 'وجهات فندقية شهيرة' : 'Popular Hotel Destinations'}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {isArabic
                ? 'اكتشف أفضل الفنادق الفاخرة في أشهر المدن حول العالم'
                : 'Discover the finest luxury hotels in the most sought-after cities worldwide'}
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto">
            {destinations.map((dest, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl shadow-luxury hover:shadow-glow transition-all transform hover:scale-105 duration-500"
              >
                <div className="relative h-64">
                  <Image
                    src={dest.image}
                    alt={dest.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-midnight/90 via-midnight/50 to-transparent" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="mb-2 text-2xl font-display font-bold">{dest.name}</h3>
                  <p className="text-gold-200 font-semibold">{dest.hotels} {isArabic ? 'فندق فاخر' : 'Luxury Hotels'}</p>
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
            <div>
              <h2 className="mb-6 text-4xl md:text-5xl font-display font-bold text-midnight">
                {isArabic ? 'تجربة الكونسيرج الفندقي' : 'The Hotel Concierge Experience'}
              </h2>
              <p className="mb-8 text-lg text-gray-700 leading-relaxed">
                {isArabic
                  ? 'نوفر لك أفضل تجربة حجز فنادق فاخرة مع خدمة كونسيرج شخصية ومخصصة تضمن أن كل إقامة تتجاوز توقعاتك.'
                  : 'We provide the ultimate luxury hotel booking experience with personalized concierge service that ensures every stay exceeds your expectations.'}
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

            <div className="relative">
              <div className="relative h-[500px] overflow-hidden rounded-3xl shadow-luxury">
                <Image
                  src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=1000&fit=crop&q=90"
                  alt="Luxury Hotel"
                  fill
                  className="object-cover"
                />
              </div>
              {/* Floating Stats */}
              <div className="absolute -bottom-6 -left-6 rounded-2xl bg-white p-6 shadow-luxury border border-gold/20">
                <div className="text-4xl font-display font-bold text-midnight">500K+</div>
                <div className="text-gray-600 font-semibold">{isArabic ? 'فندق متاح' : 'Hotels Available'}</div>
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
            {isArabic ? 'جاهز لحجز إقامتك الفاخرة؟' : 'Ready to Book Your Luxury Stay?'}
          </h2>
          <p className="mb-10 text-xl text-pearl-200/90 mx-auto max-w-2xl">
            {isArabic
              ? 'دع كونسيرجنا المخصص يعثر على الفندق المثالي لك'
              : 'Let our dedicated concierge find the perfect hotel for you'}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={`/${params.locale}/#hotels`}
              className="group inline-flex items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-gold-400 to-gold-600 px-10 py-5 text-lg font-bold text-white shadow-gold hover:shadow-glow transition-all transform hover:scale-105"
            >
              <Hotel className="h-6 w-6" />
              <span>{isArabic ? 'ابحث عن فندق الآن' : 'Search Hotels Now'}</span>
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
