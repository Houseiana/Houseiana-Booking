'use client';

import { airports, getRegions, formatAirport } from '@/lib/data/airports';

interface AirportSelectorProps {
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  className?: string;
  required?: boolean;
  name?: string;
}

export function AirportSelector({
  value,
  onChange,
  placeholder = 'Select Airport',
  className = '',
  required = false,
  name = 'airport',
}: AirportSelectorProps) {
  const regions = getRegions();

  return (
    <select
      name={name}
      value={value}
      onChange={(e) => onChange?.(e.target.value)}
      className={`input ${className}`}
      required={required}
    >
      <option value="">{placeholder}</option>
      {regions.map((region) => {
        const regionAirports = airports.filter((a) => a.region === region);
        return (
          <optgroup key={region} label={region}>
            {regionAirports.map((airport) => (
              <option key={airport.code} value={airport.code}>
                {formatAirport(airport)}
              </option>
            ))}
          </optgroup>
        );
      })}
    </select>
  );
}
