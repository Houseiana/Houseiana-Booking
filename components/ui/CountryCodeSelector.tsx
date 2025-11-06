'use client';

import { useState } from 'react';

interface Country {
  name: string;
  dial_code: string;
  code: string;
}

interface CountryCodeSelectorProps {
  countries: Country[];
  selectedCountry: Country;
  onSelectCountry: (country: Country) => void;
}

export function CountryCodeSelector({
  countries,
  selectedCountry,
  onSelectCountry,
}: CountryCodeSelectorProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        type="button"
        className="inline-flex items-center justify-between w-full rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{selectedCountry.dial_code}</span>
        <svg
          className="-mr-1 ml-2 h-5 w-5"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute z-10 mt-2 w-56 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1 h-64 overflow-y-auto">
            {countries.map((country) => (
              <button
                key={country.code}
                type="button"
                className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                onClick={() => {
                  onSelectCountry(country);
                  setIsOpen(false);
                }}
              >
                <span className="mr-2">{country.name}</span>
                <span className="text-gray-500">({country.dial_code})</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
