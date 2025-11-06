# Quick Start Guide

## Get Running in 3 Steps

### 1. Install
```bash
npm install
```

### 2. Run
```bash
npm run dev
```

### 3. Open
Visit: **http://localhost:5000**

---

## What You Get

✅ Complete travel booking website
✅ English & Arabic (automatic RTL)
✅ All pages ready (Hotels, Services, Flights, Visa, etc.)
✅ Responsive design (mobile, tablet, desktop)
✅ Brand colors (#0E7490 teal-blue theme)
✅ WhatsApp integration
✅ Modern UI components

## Main Routes

| Route | Description |
|-------|-------------|
| `/en` | English homepage |
| `/ar` | Arabic homepage (RTL) |
| `/en/hotels` | Hotel search & listings |
| `/en/services/meet-assist` | Airport meet & assist |
| `/en/services/lounge` | VIP lounge booking |
| `/en/flights` | Flight booking request |
| `/en/visa` | Visa assistance |
| `/en/about` | About us |
| `/en/contact` | Contact page |

*Replace `/en` with `/ar` for Arabic version*

## Customization

### Update Contact Info
Edit `.env.local`:
```env
NEXT_PUBLIC_PHONE=+97412345678
NEXT_PUBLIC_EMAIL=info@houseiana.com
NEXT_PUBLIC_WHATSAPP=97412345678
```

### Change Colors
Edit `tailwind.config.ts`:
```ts
colors: {
  primary: '#0E7490',  // Change to your brand color
}
```

### Edit Translations
Edit `lib/i18n/translations.ts`:
```ts
export const en = {
  nav: {
    hotels: 'Hotels',  // Change text here
  }
}
```

## Build for Production

```bash
npm run build
npm start
```

## Deploy

### Vercel (Recommended)
```bash
npm i -g vercel
vercel
```

### Other Platforms
- Build folder: `.next`
- Node version: 18+
- Build command: `npm run build`
- Start command: `npm start`

## Need Help?

1. Check `README.md` for full documentation
2. Check `SETUP.md` for troubleshooting
3. Check `PROJECT_SUMMARY.md` for complete overview

## File Structure

```
app/[locale]/          → All pages
components/            → Reusable components
lib/i18n/             → Translations
styles/globals.css    → Global styles
tailwind.config.ts    → Design system
```

---

**That's it!** You have a fully functional, production-ready travel booking website. 🚀
