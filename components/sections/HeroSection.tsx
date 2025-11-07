'use client';

import { Hotel, Plane, Users, FileText, Sparkles, TrendingUp, Shield } from 'lucide-react';
import { WhatsAppButton } from '@/components/ui/WhatsAppButton';
import { useState, useEffect } from 'react';
import { HotelMegaMenu } from '@/components/ui/HotelMegaMenu';
import { FlightMegaMenu } from '@/components/ui/FlightMegaMenu';
import { MeetAssistMegaMenu } from '@/components/ui/MeetAssistMegaMenu';
import { VisaMegaMenu } from '@/components/ui/VisaMegaMenu';
import Image from 'next/image';

interface HeroSectionProps {
  translations: {
    hero: {
      title: string;
      subtitle: string;
      searchButton: string;
      whatsappButton: string;
      reviewCount: string;
    };
    search: {
      tabs: {
        hotels: string;
        meetAssist: string;
        lounges: string;
      };
      destination: string;
      checkIn: string;
      checkOut: string;
      guests: string;
      search: string;
    };
  };
  locale?: string;
}

export function HeroSection({ translations, locale = 'en' }: HeroSectionProps) {
  const [selectedCard, setSelectedCard] = useState<string | null>('hotels');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const heroImages = [
    'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1920&h=1080&fit=crop&q=80', // Luxury hotel
    'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1920&h=1080&fit=crop&q=80', // Airplane
    'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=1920&h=1080&fit=crop&q=80', // Travel destination
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [heroImages.length]);

  // Listen for service selection events from navbar
  useEffect(() => {
    const handleServiceSelection = (event: CustomEvent) => {
      const { serviceId } = event.detail;
      setSelectedCard(serviceId);
    };

    window.addEventListener('selectService', handleServiceSelection as EventListener);
    return () => window.removeEventListener('selectService', handleServiceSelection as EventListener);
  }, []);

  const cards = [
    {
      id: 'hotels',
      title: locale === 'ar' ? 'الفنادق' : 'Hotels',
      icon: Hotel,
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&h=300&fit=crop&q=80', // Luxury hotel lobby
      component: HotelMegaMenu,
      gradient: 'from-primary to-secondary',
    },
    {
      id: 'flights',
      title: locale === 'ar' ? 'الرحلات' : 'Flights',
      icon: Plane,
      image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=400&h=300&fit=crop&q=80', // Airplane wing in flight
      component: FlightMegaMenu,
      gradient: 'from-secondary to-cyan-500',
    },
    {
      id: 'meetAssist',
      title: locale === 'ar' ? 'خدمات الاستقبال' : 'Meet & Assist',
      icon: Users,
      image: 'https://images.unsplash.com/photo-1556388158-158ea5ccacbd?w=400&h=300&fit=crop&q=80', // VIP airport lounge
      component: MeetAssistMegaMenu,
      gradient: 'from-primary-dark to-primary',
    },
    {
      id: 'visa',
      title: locale === 'ar' ? 'التأشيرات' : 'Visas',
      icon: FileText,
      image: 'https://images.unsplash.com/photo-1521791055366-0d553872125f?w=400&h=300&fit=crop&q=80', // Passport and visa stamps
      component: VisaMegaMenu,
      gradient: 'from-teal-600 to-emerald-500',
    },
  ];

  return (
    <section id="hero-section" className="relative min-h-[95vh] overflow-hidden bg-midnight">
      {/* Animated Background with Images */}
      <div className="absolute inset-0 z-0">
        {heroImages.map((image, index) => (
          <div
            key={image}
            className={`absolute inset-0 transition-opacity duration-2000 ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <Image
              src={image}
              alt="Luxury travel destination"
              fill
              className="object-cover"
              priority={index === 0}
              quality={90}
            />
            {/* Luxury dark overlay with subtle gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-midnight/95 via-midnight/90 to-midnight-700/85" />
            {/* Gold accent overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-midnight via-transparent to-transparent opacity-80" />
          </div>
        ))}
      </div>

      {/* Subtle Floating Elements - Luxury aesthetic */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-gold/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-[30rem] h-[30rem] bg-gold/8 rounded-full blur-3xl animate-float-delayed" />
      </div>

      <div className="container mx-auto px-4 relative z-10 py-16 md:py-24">
        <div className="mx-auto max-w-7xl">
          {/* Hero Content */}
          <div className="text-center mb-12 md:mb-16">
            {/* Luxury Badge with Gold Accent */}
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-gold/20 to-gold/10 backdrop-blur-sm rounded-full border border-gold/30 mb-8 animate-fade-in shadow-gold">
              <Sparkles className="h-5 w-5 text-gold-300 animate-pulse" />
              <span className="text-sm font-semibold text-pearl tracking-wide uppercase">
                {locale === 'ar' ? 'خدمة سفر حصرية' : 'Exclusive Travel Concierge'}
              </span>
            </div>

            {/* Main Title with Elegant Serif Font */}
            <h1 className="mb-8 text-5xl md:text-6xl lg:text-display-lg font-display font-bold leading-tight animate-slide-up text-white">
              <span className="block mb-2">
                {locale === 'ar' ? 'مرشدك الشخصي' : 'Your Personal Concierge'}
              </span>
              <span className="block bg-gradient-to-r from-gold-200 via-gold to-gold-400 bg-clip-text text-transparent">
                {locale === 'ar' ? 'للسفر الفاخر بلا جهد' : 'for Effortless Luxury Travel'}
              </span>
            </h1>

            {/* Subtitle with Refined Typography */}
            <p className="mb-10 text-lg md:text-xl text-pearl-200/90 max-w-2xl mx-auto font-light leading-relaxed animate-slide-up-delayed">
              {locale === 'ar'
                ? 'خدمات سفر راقية مصممة خصيصاً لك - من الفنادق الفاخرة إلى خدمات المطار VIP'
                : 'Bespoke travel services tailored to your needs — from luxury hotels to VIP airport experiences'}
            </p>

            {/* Elegant Trust Indicator */}
            <div className="flex flex-wrap items-center justify-center gap-6 mb-12 animate-fade-in-delayed">
              <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10">
                <Shield className="h-5 w-5 text-gold-400" />
                <span className="text-sm font-medium text-white/90">
                  {locale === 'ar' ? 'حجز آمن 100%' : 'Secure & Trusted'}
                </span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10">
                <TrendingUp className="h-5 w-5 text-gold-400" />
                <span className="text-sm font-medium text-white/90">
                  {locale === 'ar' ? 'أفضل الأسعار' : 'Best Rates Guaranteed'}
                </span>
              </div>
            </div>
          </div>

          {/* Luxury Booking Card */}
          <div className="max-w-5xl mx-auto">
            <div className="bg-white/98 backdrop-blur-xl rounded-3xl shadow-luxury p-6 md:p-10 border border-gold/20 animate-scale-in">
              {/* Service Tabs - Luxury Design */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
                {cards.map((card) => (
                  <button
                    key={card.id}
                    onClick={() => setSelectedCard(card.id)}
                    className={`group relative rounded-2xl transition-all duration-500 transform ${
                      selectedCard === card.id
                        ? 'shadow-gold ring-2 ring-gold scale-105'
                        : 'hover:shadow-lg ring-1 ring-gray-200 hover:ring-gold/50'
                    }`}
                    style={{ overflow: 'hidden' }}
                  >
                    {/* Background Image with Overlay */}
                    <div className="absolute inset-0 rounded-2xl overflow-hidden">
                      <Image
                        src={card.image}
                        alt={card.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                        sizes="(max-width: 768px) 50vw, 25vw"
                      />
                      {/* Dark overlay for text contrast */}
                      <div className={`absolute inset-0 transition-all duration-500 ${
                        selectedCard === card.id
                          ? 'bg-gradient-to-t from-midnight via-midnight/80 to-midnight/60'
                          : 'bg-gradient-to-t from-midnight/90 via-midnight/60 to-midnight/40 group-hover:from-midnight/95 group-hover:via-midnight/70'
                      }`} />
                    </div>

                    {/* Content */}
                    <div className="relative p-5 md:p-6 flex flex-col items-center justify-center gap-3 min-h-[120px]">
                      <h3 className={`text-sm md:text-base font-semibold text-center transition-all duration-500 ${
                        selectedCard === card.id ? 'text-white' : 'text-white group-hover:text-gold-200'
                      }`}>
                        {card.title}
                      </h3>
                    </div>

                    {/* Selected Indicator - Gold Accent */}
                    {selectedCard === card.id && (
                      <>
                        <div className="absolute inset-0 ring-1 ring-gold/30 rounded-2xl pointer-events-none" />
                        <div className="absolute -top-2 -right-2 h-7 w-7 bg-gradient-to-br from-gold-400 to-gold-600 rounded-full border-2 border-white shadow-lg flex items-center justify-center">
                          <svg className="h-4 w-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                      </>
                    )}
                  </button>
                ))}
              </div>

              {/* Dynamic Form Content */}
              {selectedCard && (
                <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                  {cards.find((c) => c.id === selectedCard)?.component && (
                    <div className="w-full">
                      {(() => {
                        const SelectedComponent = cards.find((c) => c.id === selectedCard)!.component;
                        return <SelectedComponent locale={locale as 'en' | 'ar'} onClose={() => setSelectedCard(null)} />;
                      })()}
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Luxury CTA Buttons */}
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-5 animate-fade-in-delayed">
              <WhatsAppButton
                phoneNumber="+97430424433"
                message={locale === 'ar' ? 'مرحباً، أحتاج إلى مساعدة في حجز السفر الفاخر.' : 'Hello, I need assistance with my luxury travel booking.'}
              />
              <button className="group px-8 py-4 bg-gradient-to-r from-gold/10 to-gold/20 backdrop-blur-md hover:from-gold/20 hover:to-gold/30 text-white rounded-xl font-medium transition-all duration-500 border border-gold/30 hover:border-gold/50 flex items-center gap-3 shadow-gold hover:shadow-glow">
                <span>{locale === 'ar' ? 'استكشف العروض الحصرية' : 'View Exclusive Offers'}</span>
                <Sparkles className="h-5 w-5 text-gold-300 group-hover:rotate-12 transition-transform duration-500" />
              </button>
            </div>
          </div>

          {/* Elegant Trust Badges */}
          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto animate-fade-in-delayed">
            <div className="flex flex-col items-center gap-3 p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-gold/30 transition-all duration-500 hover:shadow-gold">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gold/20">
                <Shield className="h-6 w-6 text-gold-300" />
              </div>
              <span className="font-semibold text-white text-center">{locale === 'ar' ? 'حماية كاملة' : 'Fully Protected'}</span>
              <span className="text-sm text-pearl-200/70 text-center leading-relaxed">
                {locale === 'ar' ? 'معاملات آمنة ومشفرة' : 'Secure & encrypted transactions'}
              </span>
            </div>

            <div className="flex flex-col items-center gap-3 p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-gold/30 transition-all duration-500 hover:shadow-gold">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gold/20">
                <TrendingUp className="h-6 w-6 text-gold-300" />
              </div>
              <span className="font-semibold text-white text-center">{locale === 'ar' ? 'أفضل الأسعار' : 'Best Value'}</span>
              <span className="text-sm text-pearl-200/70 text-center leading-relaxed">
                {locale === 'ar' ? 'ضمان أفضل الأسعار' : 'Price match guarantee'}
              </span>
            </div>

            <div className="flex flex-col items-center gap-3 p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-gold/30 transition-all duration-500 hover:shadow-gold">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gold/20">
                <svg className="h-6 w-6 text-gold-300" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="font-semibold text-white text-center">{locale === 'ar' ? 'دعم متواصل' : '24/7 Concierge'}</span>
              <span className="text-sm text-pearl-200/70 text-center leading-relaxed">
                {locale === 'ar' ? 'فريق خبراء متاح دائماً' : 'Expert team always available'}
              </span>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-30px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float-delayed 8s ease-in-out infinite;
        }
        .animate-fade-in {
          animation: fadeIn 1s ease-out;
        }
        .animate-fade-in-delayed {
          animation: fadeIn 1s ease-out 0.3s both;
        }
        .animate-slide-up {
          animation: slideUp 0.8s ease-out;
        }
        .animate-slide-up-delayed {
          animation: slideUp 0.8s ease-out 0.2s both;
        }
        .animate-scale-in {
          animation: scaleIn 0.6s ease-out 0.4s both;
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.9); }
          to { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </section>
  );
}