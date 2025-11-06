import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '@/styles/globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: 'Houseiana Booking - Your Trusted Travel Partner',
  description: 'Hotels, airport lounges, meet & assist, flights, and visa help — all in one trusted place.',
  keywords: 'hotels, travel, booking, airport lounge, meet and assist, flights, visa assistance, GCC travel',
  authors: [{ name: 'Houseiana Booking' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://houseianabooking.com',
    title: 'Houseiana Booking - Your Trusted Travel Partner',
    description: 'Hotels, airport lounges, meet & assist, flights, and visa help — all in one trusted place.',
    siteName: 'Houseiana Booking',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Houseiana Booking - Your Trusted Travel Partner',
    description: 'Hotels, airport lounges, meet & assist, flights, and visa help — all in one trusted place.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
