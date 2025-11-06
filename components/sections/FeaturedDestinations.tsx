'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/Button';
import { MapPin } from 'lucide-react';

interface Destination {
  id: string;
  name: string;
  country: string;
  image: string;
  priceFrom: number;
  currency: string;
}

interface FeaturedDestinationsProps {
  title?: string;
  destinations?: Destination[];
  locale?: string;
}

export function FeaturedDestinations({
  title = 'Popular Destinations',
  destinations,
  locale = 'en',
}: FeaturedDestinationsProps) {
  const defaultDestinations: Destination[] = [
    {
      id: '1',
      name: 'Istanbul',
      country: 'Turkey',
      image: 'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=800&h=600&fit=crop',
      priceFrom: 350,
      currency: 'QAR',
    },
    {
      id: '2',
      name: 'Doha',
      country: 'Qatar',
      image: 'https://images.unsplash.com/photo-1539037116277-4db20889f2d4?w=800&h=600&fit=crop',
      priceFrom: 420,
      currency: 'QAR',
    },
    {
      id: '3',
      name: 'Jeddah',
      country: 'Saudi Arabia',
      image: 'https://images.unsplash.com/photo-1591604021695-0c69b7c05981?w=800&h=600&fit=crop',
      priceFrom: 380,
      currency: 'QAR',
    },
    {
      id: '4',
      name: 'Dubai',
      country: 'UAE',
      image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&h=600&fit=crop',
      priceFrom: 450,
      currency: 'QAR',
    },
    {
      id: '5',
      name: 'Paris',
      country: 'France',
      image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&h=600&fit=crop',
      priceFrom: 890,
      currency: 'QAR',
    },
    {
      id: '6',
      name: 'London',
      country: 'UK',
      image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800&h=600&fit=crop',
      priceFrom: 950,
      currency: 'QAR',
    },
  ];

  const items = destinations || defaultDestinations;

  return (
    <section className="py-12 bg-white md:py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-serif font-bold text-gray-900 md:text-4xl">
            {title}
          </h2>
          <p className="text-gray-600">
            Discover amazing hotels in the world&apos;s most exciting cities
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {items.map((destination) => (
            <div
              key={destination.id}
              className="group relative overflow-hidden rounded-2xl bg-white shadow-soft transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={destination.image}
                  alt={`${destination.name}, ${destination.country}`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <div className="mb-2 flex items-center gap-1 text-sm">
                    <MapPin className="h-4 w-4" />
                    <span>{destination.country}</span>
                  </div>
                  <h3 className="mb-2 text-2xl font-serif font-bold">{destination.name}</h3>
                </div>
              </div>

              <div className="p-4 bg-white flex justify-between items-center">
                <div className="flex items-baseline gap-1">
                  <span className="text-sm text-gray-600">From</span>
                  <span className="text-2xl font-bold text-primary">{destination.priceFrom}</span>
                  <span className="text-sm text-gray-600">{destination.currency}</span>
                </div>
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={() => {
                    window.location.href = `/${locale}/hotels?destination=${destination.name}`;
                  }}
                >
                  Explore
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}