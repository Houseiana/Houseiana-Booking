'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/Button';
import { Tag } from 'lucide-react';

interface Offer {
  id: string;
  title: string;
  description: string;
  image: string;
  discount: string;
}

interface SpecialOffersProps {
  title?: string;
  offers?: Offer[];
  locale?: string;
}

export function SpecialOffers({
  title = 'Special Offers',
  offers,
  locale = 'en',
}: SpecialOffersProps) {
  const defaultOffers: Offer[] = [
    {
      id: '1',
      title: 'Honeymoon Package',
      description: 'Enjoy a romantic getaway with our special honeymoon package.',
      image: 'https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?w=800&h=600&fit=crop',
      discount: '20% OFF',
    },
    {
      id: '2',
      title: 'Family Vacation Deal',
      description: 'Create lasting memories with our exclusive family vacation deal.',
      image: 'https://images.unsplash.com/photo-1505826759037-406b40feb4cd?w=800&h=600&fit=crop',
      discount: '15% OFF',
    },
    {
      id: '3',
      title: 'Business Travel Offer',
      description: 'Get the best rates for your business travel needs.',
      image: 'https://images.unsplash.com/photo-1560264418-c442a494aa3c?w=800&h=600&fit=crop',
      discount: '10% OFF',
    },
  ];

  const items = offers || defaultOffers;

  return (
    <section className="py-12 bg-white md:py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-serif font-bold text-gray-900 md:text-4xl">
            {title}
          </h2>
          <p className="text-gray-600">
            Explore our exclusive offers and save on your next trip
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {items.map((offer) => (
            <div
              key={offer.id}
              className="group relative overflow-hidden rounded-2xl bg-white shadow-soft transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={offer.image}
                  alt={offer.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

                <div className="absolute top-0 right-0 p-4">
                  <div className="flex items-center gap-1 bg-secondary text-white px-3 py-1 rounded-full text-sm font-bold">
                    <Tag className="h-4 w-4" />
                    <span>{offer.discount}</span>
                  </div>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="mb-2 text-2xl font-serif font-bold">{offer.title}</h3>
                  <p className="text-gray-200">{offer.description}</p>
                </div>
              </div>

              <div className="p-4 bg-white">
                <Button
                  variant="primary"
                  size="sm"
                  className="w-full"
                  onClick={() => {
                    // Handle button click
                  }}
                >
                  View Details
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
