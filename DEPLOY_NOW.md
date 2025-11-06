# Quick Deploy to www.houseianabooking.com

## ✅ Your website is ready to deploy!

The build has been tested and works perfectly. Follow these simple steps to deploy:

## Step 1: Push to GitHub

```bash
# Create a new repository on GitHub:
# Go to https://github.com/new
# Repository name: houseiana-booking
# Click "Create repository"

# Then run these commands:
cd "/Users/goldenloonie/Desktop/Housiana Booking aite/houseiana booking frontend"

git remote add origin https://github.com/YOUR_USERNAME/houseiana-booking.git
git push -u origin main
```

Replace `YOUR_USERNAME` with your GitHub username.

## Step 2: Deploy to Vercel

### Option A: Via Vercel Website (Recommended)

1. Go to https://vercel.com/signup
2. Sign up/Login with GitHub
3. Click **"Add New Project"**
4. **Import** your `houseiana-booking` repository
5. Vercel will auto-detect Next.js settings
6. Click **"Deploy"**

### Option B: Via Vercel CLI

```bash
npm install -g vercel
cd "/Users/goldenloonie/Desktop/Housiana Booking aite/houseiana booking frontend"
vercel --prod
```

## Step 3: Add Custom Domain

1. In Vercel Dashboard, go to your project
2. Click **"Settings"** → **"Domains"**
3. Add domain: `www.houseianabooking.com`
4. Also add: `houseianabooking.com`

Vercel will provide DNS instructions.

## Step 4: Configure DNS

### Option A: Point Nameservers to Vercel (Easiest)

Go to your domain registrar and change nameservers to:
```
ns1.vercel-dns.com
ns2.vercel-dns.com
```

### Option B: Add DNS Records

Add these records at your domain registrar:
```
Type: CNAME
Name: www
Value: cname.vercel-dns.com

Type: A
Name: @
Value: 76.76.21.21
```

## Done! 🎉

- Your site will be live at https://www.houseianabooking.com in 1-2 hours
- SSL certificate will be automatically provisioned
- Every push to `main` branch will auto-deploy

## Build Status

✅ Production build: **SUCCESSFUL**
✅ All pages generated: **20 routes**
✅ TypeScript checks: **PASSED**
✅ ESLint checks: **PASSED**

## What's Included

- ✅ English and Arabic versions (/en, /ar)
- ✅ Hotels search with filters
- ✅ Flights search with multi-city support
- ✅ Meet & Assist booking
- ✅ Visa application form
- ✅ Contact page
- ✅ Responsive design
- ✅ WhatsApp integration
- ✅ SEO optimized
- ✅ Fast performance
- ✅ Security headers

## Need Help?

See the full deployment guide in [DEPLOYMENT.md](./DEPLOYMENT.md)
