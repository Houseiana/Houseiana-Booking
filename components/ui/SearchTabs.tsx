'use client';

import { useState } from 'react';
import { cn } from '@/lib/utils/cn';
import { Input } from './Input';
import { Button } from './Button';
import { Calendar, Users, MapPin } from 'lucide-react';

type TabType = 'hotels' | 'meetAssist' | 'lounges';

interface SearchTabsProps {
  translations: {
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
  locale?: string;
}

export function SearchTabs({ translations, locale = 'en' }: SearchTabsProps) {
  const [activeTab, setActiveTab] = useState<TabType>('hotels');

  const tabs: { id: TabType; label: string }[] = [
    { id: 'hotels', label: translations.tabs.hotels },
    { id: 'meetAssist', label: translations.tabs.meetAssist },
    { id: 'lounges', label: translations.tabs.lounges },
  ];

  return (
    <div className="w-full rounded-2xl bg-white p-6 shadow-lg">
      <div className="flex flex-wrap gap-2 border-b border-gray-200 pb-4">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={cn(
              'rounded-full px-6 py-2 text-sm font-medium transition-all duration-200',
              'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary',
              activeTab === tab.id
                ? 'bg-primary text-white shadow-md'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            )}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="mt-6">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <div className="relative">
            <MapPin className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
            <Input
              placeholder={translations.destination}
              className="pl-10"
            />
          </div>

          {activeTab === 'hotels' && (
            <>
              <div className="relative">
                <Calendar className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                <Input
                  type="date"
                  placeholder={translations.checkIn}
                  className="pl-10"
                />
              </div>

              <div className="relative">
                <Calendar className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                <Input
                  type="date"
                  placeholder={translations.checkOut}
                  className="pl-10"
                />
              </div>

              <div className="relative">
                <Users className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                <Input
                  type="number"
                  placeholder={translations.guests}
                  min="1"
                  defaultValue="2"
                  className="pl-10"
                />
              </div>
            </>
          )}

          {activeTab !== 'hotels' && (
            <>
              <div className="relative">
                <Calendar className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                <Input
                  type="date"
                  placeholder="Date"
                  className="pl-10"
                />
              </div>

              <div className="relative">
                <Users className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                <Input
                  type="number"
                  placeholder="Travelers"
                  min="1"
                  defaultValue="1"
                  className="pl-10"
                />
              </div>
            </>
          )}
        </div>

        <div className="mt-6">
          <Button variant="primary" size="lg" className="w-full md:w-auto">
            {translations.search}
          </Button>
        </div>
      </div>
    </div>
  );
}