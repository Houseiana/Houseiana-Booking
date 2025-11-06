'use client';

import Link from 'next/link';
import { Facebook, Twitter, Instagram, Linkedin, Mail } from 'lucide-react';
import { Locale } from '@/lib/i18n/config';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';

interface FooterProps {
  locale: Locale;
  translations: {
    footer: {
      tagline: string;
      newsletter: string;
      emailPlaceholder: string;
      subscribe: string;
      quickLinks: string;
      services: string;
      support: string;
      legal: string;
      terms: string;
      privacy: string;
      refund: string;
      followUs: string;
      copyright: string;
    };
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

export function Footer({ locale, translations }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const serviceLinks = [
    { href: `/${locale}/hotels`, label: translations.nav.hotels },
    { href: `/${locale}/services/meet-assist`, label: translations.nav.meetAssist },
    { href: `/${locale}/services/lounge`, label: translations.nav.lounges },
    { href: `/${locale}/flights`, label: translations.nav.flights },
    { href: `/${locale}/visa`, label: translations.nav.visa },
  ];

  const supportLinks = [
    { href: `/${locale}/about`, label: translations.nav.about },
    { href: `/${locale}/contact`, label: translations.nav.contact },
    { href: `/${locale}/faq`, label: 'FAQ' },
    { href: `/${locale}/help`, label: 'Help Center' },
  ];

  const legalLinks = [
    { href: `/${locale}/terms`, label: translations.footer.terms },
    { href: `/${locale}/privacy`, label: translations.footer.privacy },
    { href: `/${locale}/refund-policy`, label: translations.footer.refund },
  ];

  const socialLinks = [
    { href: 'https://facebook.com', icon: Facebook, label: 'Facebook' },
    { href: 'https://twitter.com', icon: Twitter, label: 'Twitter' },
    { href: 'https://instagram.com', icon: Instagram, label: 'Instagram' },
    { href: 'https://linkedin.com', icon: Linkedin, label: 'LinkedIn' },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto py-12 px-4 lg:py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <div className="mb-4 flex items-center gap-2 text-2xl font-bold">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-primary text-white font-serif">
                H
              </div>
              <span className="font-serif">Houseiana Booking</span>
            </div>
            <p className="mb-6 text-gray-400">
              {translations.footer.tagline}
            </p>

            <div>
              <h3 className="mb-3 font-semibold">{translations.footer.newsletter}</h3>
              <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
                <Input
                  type="email"
                  placeholder={translations.footer.emailPlaceholder}
                  className="flex-1 bg-gray-800 border-gray-700 text-white placeholder:text-gray-500"
                  aria-label={translations.footer.emailPlaceholder}
                />
                <Button type="submit" variant="primary" size="md">
                  <Mail className="h-4 w-4" />
                </Button>
              </form>
            </div>
          </div>

          <div>
            <h3 className="mb-4 font-semibold text-lg">{translations.footer.services}</h3>
            <ul className="space-y-2">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 transition-colors hover:text-secondary-light hover:underline"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-semibold text-lg">{translations.footer.support}</h3>
            <ul className="space-y-2">
              {supportLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 transition-colors hover:text-secondary-light hover:underline"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-semibold text-lg">{translations.footer.legal}</h3>
            <ul className="space-y-2">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 transition-colors hover:text-secondary-light hover:underline"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-800 pt-8">
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <div className="h-8 w-12 rounded bg-gray-800 flex items-center justify-center text-xs">VISA</div>
              <div className="h-8 w-12 rounded bg-gray-800 flex items-center justify-center text-xs">MC</div>
              <div className="h-8 w-12 rounded bg-gray-800 flex items-center justify-center text-xs">AMEX</div>
            </div>
            <span>•</span>
            <span>Secure payments • 3D Secure • Data encrypted</span>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800 bg-gray-900/50">
        <div className="container mx-auto py-6 px-4">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-sm text-gray-500">
              © {currentYear} Houseiana. {translations.footer.copyright.split('©')[1]?.split('.')[1] || 'All rights reserved.'}
            </p>

            <div className="flex items-center gap-1">
              <span className="mr-2 text-sm text-gray-500">{translations.footer.followUs}:</span>
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg p-2 text-gray-500 transition-colors hover:bg-gray-800 hover:text-secondary-light"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}