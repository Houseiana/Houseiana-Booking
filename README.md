# Houseiana Booking - Official Website

A modern, fully-responsive travel booking platform built with Next.js 14, TypeScript, and Tailwind CSS. Features bilingual support (EN/AR) with RTL layout, accessible design, and premium UI components.

## Features

- **Multi-language Support**: English and Arabic with automatic RTL layout switching
- **Modern Stack**: Next.js 14 App Router, TypeScript, Tailwind CSS
- **Responsive Design**: Mobile-first approach with support for all screen sizes
- **Accessibility**: WCAG AA compliant with keyboard navigation and screen reader support
- **Premium UI**: Custom components following design system with Houseiana brand colors
- **SEO Optimized**: Metadata, structured data, and semantic HTML

## Pages

- **Home** (`/`) - Hero section, search, featured destinations, services overview
- **Hotels** (`/hotels`) - Hotel listings with search and filters
- **Meet & Assist** (`/services/meet-assist`) - Airport assistance services
- **VIP Lounges** (`/services/lounge`) - Airport lounge booking
- **Flights** (`/flights`) - Assisted flight booking request form
- **Visa Assistance** (`/visa`) - Visa application support
- **About** (`/about`) - Company information and values
- **Contact** (`/contact`) - Contact information and inquiry form

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Fonts**: Inter (body), Source Sans 3 (headings), Cairo/Tajawal (Arabic)

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:5000](http://localhost:5000) in your browser

The application will automatically redirect to `/en` (English) by default.

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Project Structure

```
├── app/
│   ├── [locale]/          # Localized routes (en, ar)
│   │   ├── page.tsx       # Homepage
│   │   ├── hotels/        # Hotels pages
│   │   ├── services/      # Service pages (meet-assist, lounge)
│   │   ├── flights/       # Flights page
│   │   ├── visa/          # Visa page
│   │   ├── about/         # About page
│   │   ├── contact/       # Contact page
│   │   └── layout.tsx     # Locale-specific layout
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Root redirect
├── components/
│   ├── ui/                # Reusable UI components
│   │   ├── Button.tsx
│   │   ├── Input.tsx
│   │   ├── SearchTabs.tsx
│   │   ├── HotelCard.tsx
│   │   ├── WhatsAppButton.tsx
│   │   ├── LanguageSwitcher.tsx
│   │   └── PolicyBadge.tsx
│   ├── layout/            # Layout components
│   │   ├── Header.tsx
│   │   └── Footer.tsx
│   └── sections/          # Homepage sections
│       ├── HeroSection.tsx
│       ├── FeaturedDestinations.tsx
│       └── WhyUsSection.tsx
├── lib/
│   ├── i18n/              # Internationalization
│   │   ├── config.ts      # Locale configuration
│   │   └── translations.ts # Translation strings
│   └── utils/
│       └── cn.ts          # Utility functions
├── styles/
│   └── globals.css        # Global styles and Tailwind
├── public/                # Static assets
└── tailwind.config.ts     # Tailwind configuration
```

## Brand Colors

- **Primary Teal-Blue**: `#0E7490`
- **Dark Navy**: `#0B2537`
- **Sky**: `#E8F5F8`
- **Sand**: `#F6F2EA`
- **Accent Gold**: `#C9A227`
- **Neutral Grays**: `#111827` to `#F3F4F6`

## Internationalization

The site supports English (EN) and Arabic (AR) with automatic RTL layout switching.

- Default locale: `en`
- Available locales: `['en', 'ar']`
- RTL support: Automatic for Arabic
- Translations: Centralized in `lib/i18n/translations.ts`

### Adding New Translations

Edit `lib/i18n/translations.ts` and add new keys to both `en` and `ar` objects.

## Customization

### Tailwind Configuration

Brand colors and design tokens are defined in `tailwind.config.ts`. Modify to match your brand.

### Components

All components are in `components/` directory. They use the `cn()` utility for className merging and support all standard props.

### Styling

Global styles are in `styles/globals.css` with custom CSS variables and utility classes.

## Accessibility

- WCAG AA color contrast ratios
- Keyboard navigation support
- ARIA labels and semantic HTML
- Focus visible states
- Screen reader friendly
- Minimum tap target size: 48px

## SEO

- Meta tags and Open Graph
- Structured data (JSON-LD)
- Semantic HTML5
- Image alt texts
- Proper heading hierarchy

## Performance

- Optimized images with Next.js Image
- Lazy loading
- Code splitting
- Font optimization
- Minimal JavaScript bundle

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Contact

For support or inquiries:
- Phone: +974 1234 5678
- Email: info@houseiana.com
- WhatsApp: +974 1234 5678

## License

© 2025 Houseiana Booking. All rights reserved.
