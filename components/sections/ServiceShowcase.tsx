'use client';

import Image from 'next/image';

interface ServiceShowcaseProps {
  locale: 'en' | 'ar';
}

export function ServiceShowcase({ locale }: ServiceShowcaseProps) {
  const services = [
    {
      title: locale === 'ar' ? 'حجوزات الفنادق الفاخرة' : 'Luxury Hotel Bookings',
      description: locale === 'ar'
        ? 'اكتشف أفضل الفنادق في العالم مع أسعار تنافسية وخدمة استثنائية'
        : 'Discover the world\'s finest hotels with competitive rates and exceptional service',
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=600&fit=crop',
      alt: locale === 'ar' ? 'فندق فاخر' : 'Luxury Hotel',
    },
    {
      title: locale === 'ar' ? 'رحلات طيران مريحة' : 'Comfortable Flight Bookings',
      description: locale === 'ar'
        ? 'احجز رحلات الطيران بأفضل الأسعار مع جميع شركات الطيران الرائدة'
        : 'Book flights at the best prices with all leading airlines',
      image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&h=600&fit=crop',
      alt: locale === 'ar' ? 'طائرة في السماء' : 'Airplane in Sky',
    },
    {
      title: locale === 'ar' ? 'خدمات الاستقبال والمساعدة' : 'Meet & Assist Services',
      description: locale === 'ar'
        ? 'تجربة مطار سلسة مع خدمات الاستقبال الشخصية والمساعدة VIP'
        : 'Seamless airport experience with personal meet and VIP assist services',
      image: 'https://images.unsplash.com/photo-1556388158-158ea5ccacbd?w=800&h=600&fit=crop',
      alt: locale === 'ar' ? 'خدمات المطار' : 'Airport Services',
    },
    {
      title: locale === 'ar' ? 'مساعدة في التأشيرات' : 'Visa Assistance',
      description: locale === 'ar'
        ? 'دعم شامل لطلبات التأشيرة لجميع الوجهات حول العالم'
        : 'Comprehensive visa application support for destinations worldwide',
      image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&h=600&fit=crop',
      alt: locale === 'ar' ? 'جواز سفر وتأشيرة' : 'Passport and Visa',
    },
  ];

  return (
    <section className="py-12 bg-gradient-to-b from-gray-50 to-white md:py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-serif font-bold text-gray-900 md:text-4xl">
            {locale === 'ar' ? 'خدماتنا المميزة' : 'Our Premium Services'}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {locale === 'ar'
              ? 'نقدم مجموعة شاملة من خدمات السفر لجعل رحلتك لا تُنسى'
              : 'We offer a comprehensive range of travel services to make your journey unforgettable'}
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02]"
            >
              {/* Image */}
              <div className="relative h-64 md:h-80 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-2xl font-bold mb-2 transition-transform duration-300 group-hover:translate-y-[-4px]">
                  {service.title}
                </h3>
                <p className="text-sm text-gray-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {service.description}
                </p>
              </div>

              {/* Decorative corner */}
              <div className="absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 border-white/30 rounded-tr-lg" />
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <p className="text-lg text-gray-700 mb-6">
            {locale === 'ar'
              ? 'جاهز لحجز رحلتك القادمة؟'
              : 'Ready to book your next trip?'}
          </p>
          <a
            href="#hero-section"
            className="inline-flex items-center justify-center gap-2 rounded-xl px-8 py-4 text-lg font-semibold transition-all duration-200 bg-primary text-white hover:bg-primary-dark shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            {locale === 'ar' ? 'ابدأ الحجز الآن' : 'Start Booking Now'}
          </a>
        </div>
      </div>
    </section>
  );
}
