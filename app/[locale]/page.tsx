'use client';

import { Locale } from '@/lib/i18n/config';
import { getTranslations } from '@/lib/i18n/translations';
import { HeroSection } from '@/components/sections/HeroSection';
import { FeaturedDestinations } from '@/components/sections/FeaturedDestinations';
import { WhyUsSection } from '@/components/sections/WhyUsSection';
import { SpecialOffers } from '@/components/sections/SpecialOffers';
import { Button } from '@/components/ui/Button';

export default function HomePage({ params }: { params: { locale: Locale } }) {
  const translations = getTranslations(params.locale);

  return (
    <>
      <HeroSection translations={translations} locale={params.locale} />
      <FeaturedDestinations
        title={params.locale === 'ar' ? 'الوجهات الشهيرة' : 'Popular Destinations'}
        locale={params.locale}
      />
      <SpecialOffers
        title={params.locale === 'ar' ? 'عروض خاصة' : 'Special Offers'}
        locale={params.locale}
      />
      <WhyUsSection translations={translations} />

      {/* How It Works Section */}
      <section className="py-12 bg-white md:py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-serif font-bold text-gray-900 md:text-4xl">
              {params.locale === 'ar' ? 'كيف نعمل' : 'How It Works'}
            </h2>
            <p className="text-gray-600">
              {params.locale === 'ar'
                ? 'احجز رحلتك في ثلاث خطوات بسيطة'
                : 'Book your travel in three simple steps'}
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                step: '1',
                title: params.locale === 'ar' ? 'ابحث' : 'Search',
                description:
                  params.locale === 'ar'
                    ? 'تصفح الفنادق والخدمات وابحث عن ما يناسب احتياجاتك'
                    : 'Browse hotels, services, and find what fits your needs',
              },
              {
                step: '2',
                title: params.locale === 'ar' ? 'احجز' : 'Book',
                description:
                  params.locale === 'ar'
                    ? 'اختر خيارك وقم بالدفع الآمن'
                    : 'Select your choice and make a secure payment',
              },
              {
                step: '3',
                title: params.locale === 'ar' ? 'استمتع' : 'Enjoy',
                description:
                  params.locale === 'ar'
                    ? 'استمتع برحلتك مع دعمنا على مدار الساعة طوال أيام الأسبوع'
                    : 'Enjoy your trip with our 24/7 support',
              },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary text-2xl font-bold text-white">
                  {item.step}
                </div>
                <h3 className="mb-2 text-xl font-semibold text-gray-900">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-primary-dark text-white md:py-16 lg:py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4 text-3xl font-serif font-bold md:text-4xl">
            {params.locale === 'ar' ? 'هل أنت مستعد للبدء؟' : 'Ready to Get Started?'}
          </h2>
          <p className="mb-8 text-lg opacity-90">
            {params.locale === 'ar'
              ? 'انضم إلى آلاف المسافرين السعداء واحجز رحلتك القادمة معنا'
              : 'Join thousands of happy travelers and book your next trip with us'}
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              as="a"
              href={`/${params.locale}/hotels`}
              variant="secondary"
              size="lg"
            >
              {params.locale === 'ar' ? 'تصفح الفنادق' : 'Browse Hotels'}
            </Button>
            <Button
              as="a"
              href={`/${params.locale}/contact`}
              variant="ghost"
              size="lg"
              className="text-white hover:bg-white/10"
            >
              {params.locale === 'ar' ? 'اتصل بنا' : 'Contact Us'}
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}