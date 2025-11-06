import Image from 'next/image';
import { Star, MapPin } from 'lucide-react';
import { cn } from '@/lib/utils/cn';
import { Button } from './Button';

interface HotelCardProps {
  id: string;
  name: string;
  image: string;
  location: string;
  stars: number;
  price: number;
  currency?: string;
  freeCancel?: boolean;
  rating?: number;
  reviewCount?: number;
  className?: string;
  translations?: {
    from: string;
    perNight: string;
    viewDetails: string;
    freeCancel: string;
  };
}

export function HotelCard({
  id,
  name,
  image,
  location,
  stars,
  price,
  currency = 'QAR',
  freeCancel = false,
  rating,
  reviewCount,
  className,
  translations = {
    from: 'From',
    perNight: 'per night',
    viewDetails: 'View Details',
    freeCancel: 'Free Cancellation',
  },
}: HotelCardProps) {
  return (
    <article
      className={cn(
        'card card-hover overflow-hidden p-0',
        className
      )}
    >
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover transition-transform duration-300 hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {freeCancel && (
          <div className="absolute left-3 top-3 rounded-full bg-green-500 px-3 py-1 text-xs font-medium text-white shadow-md">
            {translations.freeCancel}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Hotel Name */}
        <h3 className="mb-2 text-xl font-semibold text-gray-900 line-clamp-1">
          {name}
        </h3>

        {/* Location */}
        <div className="mb-3 flex items-center gap-1 text-sm text-gray-600">
          <MapPin className="h-4 w-4" />
          <span className="line-clamp-1">{location}</span>
        </div>

        {/* Stars and Rating */}
        <div className="mb-4 flex items-center justify-between">
          <div className="flex items-center gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className={cn(
                  'h-4 w-4',
                  i < stars
                    ? 'fill-gold text-gold'
                    : 'fill-gray-200 text-gray-200'
                )}
              />
            ))}
          </div>
          {rating && (
            <div className="flex items-center gap-1 text-sm">
              <span className="font-semibold text-gray-900">{rating}</span>
              {reviewCount && (
                <span className="text-gray-500">({reviewCount})</span>
              )}
            </div>
          )}
        </div>

        {/* Price and CTA */}
        <div className="flex items-center justify-between border-t border-gray-100 pt-4">
          <div>
            <p className="text-xs text-gray-500">{translations.from}</p>
            <p className="text-2xl font-bold text-primary">
              {price} <span className="text-sm font-medium">{currency}</span>
            </p>
            <p className="text-xs text-gray-500">{translations.perNight}</p>
          </div>
          <Button
            variant="primary"
            size="sm"
            onClick={() => {
              // Handle navigation to hotel details
              window.location.href = `/hotels/${id}`;
            }}
          >
            {translations.viewDetails}
          </Button>
        </div>
      </div>
    </article>
  );
}
