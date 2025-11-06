'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, MessageCircle } from 'lucide-react';
import { LanguageSwitcher } from '@/components/ui/LanguageSwitcher';
import { Locale } from '@/lib/i18n/config';
import { HouseianaLogo } from '@/components/ui/HouseianaLogo';

interface HeaderProps {
  locale: Locale;
  translations: {
    nav: {
      hotels: string;
      meetAssist: string;
      lounges: string;
      flights: string;
      visa: string;
      about: string;
      contact: string;
    };
  };
}

export function Header({ locale, translations }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToHeroSection = (serviceId: string) => {
    // Close mobile menu if open
    setIsMobileMenuOpen(false);

    // Scroll to hero section and trigger service selection
    const heroSection = document.getElementById('hero-section');
    if (heroSection) {
      heroSection.scrollIntoView({ behavior: 'smooth', block: 'start' });

      // Wait for scroll to complete, then trigger service selection
      setTimeout(() => {
        const event = new CustomEvent('selectService', { detail: { serviceId } });
        window.dispatchEvent(event);
      }, 500);
    }
  };

  const megaMenuItems = [
    { id: 'hotels', label: translations.nav.hotels },
    { id: 'flights', label: translations.nav.flights },
    { id: 'meetAssist', label: translations.nav.meetAssist },
    { id: 'visa', label: translations.nav.visa },
  ];

  const secondaryNav = [
    { href: `/${locale}/about`, label: translations.nav.about },
    { href: `/${locale}/contact`, label: translations.nav.contact },
  ];

  return (
    <header className="sticky top-0 z-40 w-full bg-white shadow-md">
      {/* Top Bar */}
      <div className="bg-primary-dark text-white">
        <div className="container mx-auto flex h-10 items-center justify-between px-4 text-sm">
          <div className="flex items-center gap-4">
            <a
              href="https://wa.me/97430424433"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 transition-colors hover:text-secondary-light"
            >
              <MessageCircle className="h-3.5 w-3.5" />
              <span className="hidden sm:inline">+974 30424433</span>
            </a>
          </div>
          <div className="flex items-center gap-3">
            <LanguageSwitcher currentLocale={locale} />
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="border-b border-gray-200">
        <div className="container mx-auto flex h-20 items-center justify-between px-4">
          {/* Logo */}
          <Link
            href={`/${locale}`}
            className="focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
          >
            <HouseianaLogo variant="full" showTagline />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
            {megaMenuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToHeroSection(item.id)}
                className="rounded-lg px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-primary-light hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Desktop Secondary Nav */}
          <div className="hidden lg:flex items-center gap-3">
            {secondaryNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-gray-600 transition-colors hover:text-primary"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden rounded-lg p-2 text-gray-700 hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            aria-expanded={isMobileMenuOpen}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden border-t border-gray-200 bg-white">
          <nav className="container mx-auto py-4 px-4" aria-label="Mobile navigation">
            <div className="flex flex-col gap-1">
              {megaMenuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToHeroSection(item.id)}
                  className="rounded-lg px-4 py-3 text-base font-medium text-gray-700 transition-colors hover:bg-primary-light hover:text-white text-left"
                >
                  {item.label}
                </button>
              ))}
              {secondaryNav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-lg px-4 py-3 text-base font-medium text-gray-700 transition-colors hover:bg-primary-light hover:text-white"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}