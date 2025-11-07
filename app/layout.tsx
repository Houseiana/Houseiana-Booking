import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import '@/styles/globals.css';

// Sans-serif font for body text (clean, modern)
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-geist-sans',
  display: 'swap',
});

// Serif font for headlines (luxury, elegant)
const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  weight: ['400', '600', '700', '900'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Houseiana Booking - Luxury Concierge Travel Services',
  description: 'Your personal concierge for effortless luxury travel. Premium hotels, flights, VIP airport services, and visa assistance across the GCC and beyond.',
  keywords: 'luxury travel concierge, premium hotels, VIP airport services, meet and assist, business class flights, visa assistance, Qatar travel, GCC luxury travel',
  authors: [{ name: 'Houseiana Booking' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://houseianabooking.com',
    title: 'Houseiana Booking - Luxury Concierge Travel Services',
    description: 'Your personal concierge for effortless luxury travel. Premium hotels, flights, VIP airport services, and visa assistance.',
    siteName: 'Houseiana Booking',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Houseiana Booking - Luxury Concierge Travel Services',
    description: 'Your personal concierge for effortless luxury travel. Premium hotels, flights, VIP services, and visa assistance.',
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: '', // Add your Google Search Console verification code
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
