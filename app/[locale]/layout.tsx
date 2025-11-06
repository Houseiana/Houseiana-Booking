import { notFound } from 'next/navigation';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { WhatsAppButton } from '@/components/ui/WhatsAppButton';
import { locales, isRTL, type Locale } from '@/lib/i18n/config';
import { getTranslations } from '@/lib/i18n/translations';

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const locale = params.locale as Locale;

  if (!locales.includes(locale)) {
    notFound();
  }

  const translations = getTranslations(locale);
  const rtl = isRTL(locale);

  return (
    <html lang={locale} dir={rtl ? 'rtl' : 'ltr'}>
      <body>
        <Header locale={locale} translations={translations} />
        <main className="min-h-screen">{children}</main>
        <Footer locale={locale} translations={translations} />
        <WhatsAppButton
          phoneNumber="+97412345678"
          message={`Hello, I need assistance with my booking. (Language: ${locale})`}
          floating
        />
      </body>
    </html>
  );
}
