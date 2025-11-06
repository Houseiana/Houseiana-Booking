'use client';

import { useState, useRef, useEffect } from 'react';
import { Globe } from 'lucide-react';
import { cn } from '@/lib/utils/cn';
import { Locale, localeNames } from '@/lib/i18n/config';

interface LanguageSwitcherProps {
  currentLocale: Locale;
  onLocaleChange?: (locale: Locale) => void;
}

export function LanguageSwitcher({ currentLocale, onLocaleChange }: LanguageSwitcherProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLocaleChange = (locale: Locale) => {
    setIsOpen(false);
    if (onLocaleChange) {
      onLocaleChange(locale);
    } else {
      // Default behavior: navigate to new locale path
      const currentPath = window.location.pathname;
      const newPath = `/${locale}${currentPath.replace(/^\/(en|ar)/, '')}`;
      window.location.href = newPath;
    }
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
        aria-expanded={isOpen}
        aria-haspopup="true"
        aria-label="Change language"
      >
        <Globe className="h-4 w-4" />
        <span>{localeNames[currentLocale]}</span>
      </button>

      {isOpen && (
        <div
          className="absolute right-0 top-full z-50 mt-2 w-40 rounded-lg bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5"
          role="menu"
        >
          {Object.entries(localeNames).map(([locale, name]) => (
            <button
              key={locale}
              onClick={() => handleLocaleChange(locale as Locale)}
              className={cn(
                'block w-full px-4 py-2 text-left text-sm transition-colors hover:bg-gray-100',
                locale === 'ar' ? 'text-black' : 'text-gray-700',
                currentLocale === locale && 'bg-primary-light font-semibold text-primary'
              )}
              role="menuitem"
            >
              {name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
