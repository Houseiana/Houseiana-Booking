'use client';

import { Locale } from '@/lib/i18n/config';
import { getTranslations } from '@/lib/i18n/translations';
import { HotelCard } from '@/components/ui/HotelCard';
import { SearchTabs } from '@/components/ui/SearchTabs';

export default function HotelsPage({ params }: { params: { locale: Locale } }) {
  const translations = getTranslations(params.locale);

  // Sample hotel data
  const sampleHotels = [
    {
      id: '1',
      name: 'Grand Seaview Istanbul Hotel',
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=600&fit=crop',
      location: 'Istanbul, Turkey',
      stars: 5,
      price: 420,
      currency: 'QAR',
      freeCancel: true,
      rating: 4.8,
      reviewCount: 342,
    },
    {
      id: '2',
      name: 'Luxury Doha Business Hotel',
      image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800&h=600&fit=crop',
      location: 'Doha, Qatar',
      stars: 5,
      price: 550,
      currency: 'QAR',
      freeCancel: true,
      rating: 4.9,
      reviewCount: 528,
    },
    {
      id: '3',
      name: 'Coastal Resort Jeddah',
      image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&h=600&fit=crop',
      location: 'Jeddah, Saudi Arabia',
      stars: 4,
      price: 380,
      currency: 'QAR',
      freeCancel: false,
      rating: 4.6,
      reviewCount: 213,
    },
    {
      id: '4',
      name: 'Downtown Dubai Premium',
      image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800&h=600&fit=crop',
      location: 'Dubai, UAE',
      stars: 5,
      price: 650,
      currency: 'QAR',
      freeCancel: true,
      rating: 4.7,
      reviewCount: 489,
    },
    {
      id: '5',
      name: 'Paris City Center Hotel',
      image: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800&h=600&fit=crop',
      location: 'Paris, France',
      stars: 4,
      price: 890,
      currency: 'QAR',
      freeCancel: true,
      rating: 4.5,
      reviewCount: 672,
    },
    {
      id: '6',
      name: 'London Westminster Suites',
      image: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=800&h=600&fit=crop',
      location: 'London, UK',
      stars: 5,
      price: 950,
      currency: 'QAR',
      freeCancel: true,
      rating: 4.8,
      reviewCount: 791,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Search Section */}
      <section className="bg-white py-8 shadow-sm">
        <div className="container-custom">
          <SearchTabs translations={translations.search} locale={params.locale} />
        </div>
      </section>

      {/* Results Section */}
      <section className="section">
        <div className="container-custom">
          <div className="mb-8 flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                {params.locale === 'ar' ? 'الفنادق المتاحة' : 'Available Hotels'}
              </h1>
              <p className="mt-2 text-gray-600">
                {params.locale === 'ar'
                  ? `${sampleHotels.length} فندق متاح`
                  : `${sampleHotels.length} hotels found`}
              </p>
            </div>

            {/* Filters Button */}
            <button className="btn btn-secondary">
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
                />
              </svg>
              <span>{params.locale === 'ar' ? 'فلاتر' : 'Filters'}</span>
            </button>
          </div>

          {/* Hotel Grid */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {sampleHotels.map((hotel) => (
              <HotelCard
                key={hotel.id}
                {...hotel}
                translations={{
                  from: translations.common.from,
                  perNight: translations.common.perNight,
                  viewDetails: translations.common.viewDetails,
                  freeCancel: translations.common.freeCancel,
                }}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
