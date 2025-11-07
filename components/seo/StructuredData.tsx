'use client';

interface StructuredDataProps {
  locale: 'en' | 'ar';
}

export function StructuredData({ locale }: StructuredDataProps) {
  const isArabic = locale === 'ar';

  // Organization Schema
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'TravelAgency',
    '@id': 'https://houseianabooking.com/#organization',
    name: 'Houseiana Booking',
    alternateName: isArabic ? 'حجوزات هوسيانا' : 'Houseiana Travel Concierge',
    url: 'https://houseianabooking.com',
    logo: 'https://houseianabooking.com/logo.png',
    description: isArabic
      ? 'خدمة كونسيرج سفر فاخرة توفر حجوزات فنادق راقية، رحلات طيران، خدمات VIP في المطارات، ومساعدة في التأشيرات عبر دول الخليج وما بعدها'
      : 'Luxury travel concierge service providing premium hotel bookings, flight reservations, VIP airport services, and visa assistance across the GCC and beyond',
    image: 'https://houseianabooking.com/og-image.jpg',
    telephone: '+97430424433',
    email: 'info@houseianabooking.com',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'QA',
      addressLocality: 'Doha',
      addressRegion: 'Qatar',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 25.2854,
      longitude: 51.5310,
    },
    areaServed: [
      { '@type': 'Country', name: 'Qatar' },
      { '@type': 'Country', name: 'United Arab Emirates' },
      { '@type': 'Country', name: 'Saudi Arabia' },
      { '@type': 'Country', name: 'Kuwait' },
      { '@type': 'Country', name: 'Oman' },
      { '@type': 'Country', name: 'Bahrain' },
    ],
    priceRange: '$$$',
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '00:00',
      closes: '23:59',
    },
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: '+97430424433',
        contactType: 'Customer Service',
        availableLanguage: ['English', 'Arabic'],
        areaServed: ['QA', 'AE', 'SA', 'KW', 'OM', 'BH'],
      },
    ],
    sameAs: [
      // Add your social media profiles here
      // 'https://facebook.com/houseianabooking',
      // 'https://instagram.com/houseianabooking',
      // 'https://linkedin.com/company/houseianabooking',
    ],
  };

  // Service Schemas
  const hotelBookingService = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': 'https://houseianabooking.com/#hotel-booking-service',
    serviceType: isArabic ? 'حجز الفنادق الفاخرة' : 'Luxury Hotel Booking',
    provider: { '@id': 'https://houseianabooking.com/#organization' },
    name: isArabic ? 'خدمة حجز الفنادق الفاخرة' : 'Premium Hotel Booking Service',
    description: isArabic
      ? 'خدمة حجز فنادق شخصية توفر إمكانية الوصول إلى أرقى الفنادق والمنتجعات الفاخرة في جميع أنحاء العالم مع أسعار حصرية وترقيات مجانية'
      : 'Personalized hotel booking service providing access to the finest luxury hotels and resorts worldwide with exclusive rates and complimentary upgrades',
    areaServed: { '@type': 'Place', name: 'Worldwide' },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: isArabic ? 'عروض الفنادق' : 'Hotel Offers',
      itemListElement: [
        {
          '@type': 'OfferCatalog',
          name: isArabic ? 'فنادق 5 نجوم' : '5-Star Hotels',
        },
        {
          '@type': 'OfferCatalog',
          name: isArabic ? 'منتجعات فاخرة' : 'Luxury Resorts',
        },
        {
          '@type': 'OfferCatalog',
          name: isArabic ? 'فنادق بوتيك' : 'Boutique Hotels',
        },
      ],
    },
  };

  const flightBookingService = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': 'https://houseianabooking.com/#flight-booking-service',
    serviceType: isArabic ? 'حجز رحلات الطيران' : 'Flight Booking',
    provider: { '@id': 'https://houseianabooking.com/#organization' },
    name: isArabic ? 'خدمة حجز رحلات الطيران' : 'Flight Booking Service',
    description: isArabic
      ? 'حجز رحلات طيران احترافية لجميع الدرجات بما في ذلك درجة الأعمال والدرجة الأولى مع أسعار تنافسية وخيارات مرنة'
      : 'Professional flight booking for all classes including business and first class with competitive rates and flexible options',
    areaServed: { '@type': 'Place', name: 'Worldwide' },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: isArabic ? 'عروض الرحلات' : 'Flight Offers',
      itemListElement: [
        {
          '@type': 'OfferCatalog',
          name: isArabic ? 'رحلات درجة الأعمال' : 'Business Class Flights',
        },
        {
          '@type': 'OfferCatalog',
          name: isArabic ? 'رحلات الدرجة الأولى' : 'First Class Flights',
        },
        {
          '@type': 'OfferCatalog',
          name: isArabic ? 'رحلات متعددة الوجهات' : 'Multi-Destination Travel',
        },
      ],
    },
  };

  const meetAssistService = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': 'https://houseianabooking.com/#meet-assist-service',
    serviceType: isArabic ? 'خدمة الاستقبال والمساعدة في المطار' : 'Airport Meet & Assist Service',
    provider: { '@id': 'https://houseianabooking.com/#organization' },
    name: isArabic ? 'خدمة VIP للاستقبال والمساعدة في المطار' : 'VIP Airport Meet & Assist Service',
    description: isArabic
      ? 'خدمة استقبال ومساعدة شخصية في المطار مع مساعدة في إجراءات الهجرة والجمارك ومرافقة إلى صالة VIP أو بوابة المغادرة'
      : 'Personal airport reception and assistance service with immigration and customs support and escort to VIP lounge or departure gate',
    areaServed: [
      { '@type': 'Airport', name: 'Hamad International Airport' },
      { '@type': 'Airport', name: 'Dubai International Airport' },
      { '@type': 'Place', name: 'Major International Airports' },
    ],
  };

  const visaService = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': 'https://houseianabooking.com/#visa-service',
    serviceType: isArabic ? 'خدمات التأشيرات' : 'Visa Assistance Services',
    provider: { '@id': 'https://houseianabooking.com/#organization' },
    name: isArabic ? 'خدمة المساعدة في التأشيرات' : 'Visa Assistance Service',
    description: isArabic
      ? 'مساعدة احترافية في طلبات التأشيرات لجميع الوجهات مع إرشادات خطوة بخطوة ودعم في التوثيق'
      : 'Professional visa application assistance for all destinations with step-by-step guidance and documentation support',
    areaServed: { '@type': 'Place', name: 'Worldwide' },
  };

  const loungeService = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': 'https://houseianabooking.com/#lounge-service',
    serviceType: isArabic ? 'الوصول إلى صالات VIP' : 'VIP Lounge Access',
    provider: { '@id': 'https://houseianabooking.com/#organization' },
    name: isArabic ? 'خدمة الوصول إلى صالات VIP في المطارات' : 'Airport VIP Lounge Access Service',
    description: isArabic
      ? 'وصول حصري إلى صالات VIP الفاخرة في المطارات في جميع أنحاء العالم مع وسائل راحة متميزة ومأكولات ومشروبات مجانية'
      : 'Exclusive access to luxury VIP airport lounges worldwide with premium amenities and complimentary food and beverages',
    areaServed: { '@type': 'Place', name: 'Major International Airports' },
  };

  // Website Schema
  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': 'https://houseianabooking.com/#website',
    url: 'https://houseianabooking.com',
    name: 'Houseiana Booking',
    description: isArabic
      ? 'خدمة كونسيرج سفر فاخرة للفنادق الراقية والرحلات الجوية وخدمات المطار VIP'
      : 'Luxury travel concierge for premium hotels, flights, and VIP airport services',
    publisher: { '@id': 'https://houseianabooking.com/#organization' },
    inLanguage: [locale],
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://houseianabooking.com/?q={search_term_string}',
      },
      'query-input': 'required name=search_term_string',
    },
  };

  // Breadcrumb Schema (for homepage)
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: isArabic ? 'الرئيسية' : 'Home',
        item: `https://houseianabooking.com/${locale}`,
      },
    ],
  };

  // Combine all schemas
  const allSchemas = [
    organizationSchema,
    hotelBookingService,
    flightBookingService,
    meetAssistService,
    visaService,
    loungeService,
    websiteSchema,
    breadcrumbSchema,
  ];

  return (
    <>
      {allSchemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
}
