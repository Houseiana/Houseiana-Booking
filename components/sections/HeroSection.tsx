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
      component: HotelMegaMenu,
      gradient: 'from-primary to-secondary',
    },
    {
      id: 'flights',
      title: locale === 'ar' ? 'الرحلات' : 'Flights',
      icon: Plane,
      component: FlightMegaMenu,
      gradient: 'from-secondary to-cyan-500',
    },
    {
      id: 'meetAssist',
      title: locale === 'ar' ? 'خدمات الاستقبال' : 'Meet & Assist',
      icon: Users,
      component: MeetAssistMegaMenu,
      gradient: 'from-primary-dark to-primary',
    },
    {
      id: 'visa',
      title: locale === 'ar' ? 'التأشيرات' : 'Visas',
      icon: FileText,
      component: VisaMegaMenu,
      gradient: 'from-teal-600 to-emerald-500',
    },
  ];

  return (
    <section id="hero-section" className="relative min-h-[90vh] overflow-hidden">
      {/* Animated Background with Images */}
      <div className="absolute inset-0 z-0">
        {heroImages.map((image, index) => (
          <div
            key={image}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <Image
              src={image}
              alt="Hero background"
              fill
              className="object-cover"
              priority={index === 0}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/90 via-primary/85 to-secondary/90" />
          </div>
        ))}
      </div>

      {/* Animated Floating Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-float-delayed" />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-primary-light/10 rounded-full blur-3xl animate-pulse" />
      </div>

      <div className="container mx-auto px-4 relative z-10 py-16 md:py-24">
        <div className="mx-auto max-w-7xl">
          {/* Hero Content */}
          <div className="text-center mb-12 md:mb-16">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 mb-6 animate-fade-in">
              <Sparkles className="h-4 w-4 text-yellow-300" />
              <span className="text-sm font-medium text-white">
                {locale === 'ar' ? '✨ رقم 1 في خدمات السفر الفاخرة' : '✨ #1 Luxury Travel Service'}
              </span>
              <TrendingUp className="h-4 w-4 text-green-300" />
            </div>

            {/* Main Title with Gradient */}
            <h1 className="mb-6 text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-slide-up">
              <span className="bg-gradient-to-r from-white via-cyan-100 to-teal-100 bg-clip-text text-transparent drop-shadow-2xl">
                {translations.hero.title}
              </span>
            </h1>

            {/* Subtitle */}
            <p className="mb-8 text-xl md:text-2xl text-cyan-50 max-w-3xl mx-auto font-light leading-relaxed animate-slide-up-delayed">
              {translations.hero.subtitle}
            </p>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center justify-center gap-8 mb-12 animate-fade-in-delayed">
              <div className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-green-400" />
                <span className="text-sm font-semibold text-white">
                  {locale === 'ar' ? 'حجز آمن 100%' : '100% Secure'}
                </span>
              </div>
            </div>
          </div>

          {/* Search Card with Glassmorphism */}
          <div className="max-w-5xl mx-auto">
            <div className="bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl p-6 md:p-8 border border-white/20 animate-scale-in">
              {/* Service Tabs */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
                {cards.map((card) => (
                  <button
                    key={card.id}
                    onClick={() => setSelectedCard(card.id)}
                    className={`group relative rounded-2xl transition-all duration-300 transform hover:scale-105 ${
                      selectedCard === card.id
                        ? 'shadow-2xl ring-4 ring-primary scale-105'
                        : 'hover:shadow-xl ring-2 ring-transparent'
                    }`}
                    style={{ overflow: 'hidden' }}
                  >
                    <div
                      className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${card.gradient} transition-all duration-300 ${
                        selectedCard === card.id ? 'opacity-100' : 'opacity-70 group-hover:opacity-90'
                      }`}
                    />
                    <div className="relative p-4 md:p-5 flex flex-col items-center justify-center gap-3">
                      <div className={`p-3 rounded-xl bg-white/30 backdrop-blur-sm transition-all duration-300 ${
                        selectedCard === card.id ? 'scale-110 shadow-lg' : 'group-hover:scale-105'
                      }`}>
                        <card.icon className="h-6 w-6 md:h-7 md:w-7 text-white drop-shadow-lg" />
                      </div>
                      <h3 className={`text-sm md:text-base font-bold text-white text-center transition-all duration-300 ${
                        selectedCard === card.id ? 'drop-shadow-xl scale-105' : 'drop-shadow-md'
                      }`}>
                        {card.title}
                      </h3>
                    </div>
                    {selectedCard === card.id && (
                      <>
                        <div className="absolute inset-0 ring-2 ring-white/60 animate-ping rounded-2xl pointer-events-none" />
                        <div className="absolute -top-1 -right-1 h-6 w-6 bg-green-400 rounded-full border-2 border-white shadow-lg flex items-center justify-center">
                          <svg className="h-3 w-3 text-white" fill="currentColor" viewBox="0 0 20 20">
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

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-delayed">
              <WhatsAppButton
                phoneNumber="+97430424433"
                message={locale === 'ar' ? 'مرحباً، أحتاج إلى مساعدة في حجز السفر.' : 'Hello, I need assistance with my travel booking.'}
              />
              <button className="group px-8 py-4 bg-white/10 backdrop-blur-md hover:bg-white/20 text-white rounded-xl font-semibold transition-all duration-300 border border-white/20 hover:border-white/40 flex items-center gap-2">
                <span>{locale === 'ar' ? 'اكتشف العروض الخاصة' : 'Explore Special Offers'}</span>
                <Sparkles className="h-5 w-5 group-hover:rotate-12 transition-transform" />
              </button>
            </div>
          </div>

          {/* Trust Badges */}
          <div className="mt-16 flex flex-wrap items-center justify-center gap-8 text-white/80 animate-fade-in-delayed">
            <div className="flex flex-col items-center gap-2 p-4 rounded-xl bg-white/5 backdrop-blur-sm">
              <div className="flex items-center gap-2">
                <svg className="h-6 w-6 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="font-semibold text-white">{locale === 'ar' ? 'دفع آمن' : 'Secure Payments'}</span>
              </div>
              <span className="text-xs text-center">{locale === 'ar' ? 'حماية كاملة للبيانات' : 'Full Data Protection'}</span>
            </div>

            <div className="flex flex-col items-center gap-2 p-4 rounded-xl bg-white/5 backdrop-blur-sm">
              <div className="flex items-center gap-2">
                <svg className="h-6 w-6 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="font-semibold text-white">{locale === 'ar' ? 'أفضل الأسعار' : 'Best Price Guarantee'}</span>
              </div>
              <span className="text-xs text-center">{locale === 'ar' ? 'أو نعيد الفرق' : 'Or We Refund the Difference'}</span>
            </div>

            <div className="flex flex-col items-center gap-2 p-4 rounded-xl bg-white/5 backdrop-blur-sm">
              <div className="flex items-center gap-2">
                <svg className="h-6 w-6 text-purple-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="font-semibold text-white">{locale === 'ar' ? 'دعم 24/7' : '24/7 Support'}</span>
              </div>
              <span className="text-xs text-center">{locale === 'ar' ? 'فريق متاح دائماً' : 'Always Available Team'}</span>
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