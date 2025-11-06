# Deployment Guide for Houseiana Booking

This guide will walk you through deploying the Houseiana Booking website to **www.houseianabooking.com** using Vercel.

## Prerequisites

Before deploying, ensure you have:
- A Vercel account (sign up at [vercel.com](https://vercel.com))
- Access to your domain registrar to configure DNS settings
- Git repository initialized (already done ✓)

## Deployment Steps

### 1. Install Vercel CLI (Optional but Recommended)

```bash
npm install -g vercel
```

### 2. Deploy via Vercel CLI

From your project directory, run:

```bash
cd "/Users/goldenloonie/Desktop/Housiana Booking aite/houseiana booking frontend"
vercel
```

Follow the prompts:
- Set up and deploy? **Y**
- Which scope? Select your account
- Link to existing project? **N**
- What's your project's name? `houseiana-booking`
- In which directory is your code located? `./`
- Want to override the settings? **N**

The CLI will deploy your site and provide a preview URL.

### 3. Deploy via GitHub (Recommended for Production)

#### a. Create a GitHub Repository

1. Go to [github.com](https://github.com) and create a new repository
2. Name it: `houseiana-booking`
3. Keep it private or public (your choice)
4. Do NOT initialize with README (we already have code)

#### b. Push Your Code to GitHub

```bash
cd "/Users/goldenloonie/Desktop/Housiana Booking aite/houseiana booking frontend"

# Add GitHub repository as remote
git remote add origin https://github.com/YOUR_USERNAME/houseiana-booking.git

# Push code
git branch -M main
git push -u origin main
```

Replace `YOUR_USERNAME` with your actual GitHub username.

#### c. Connect Vercel to GitHub

1. Go to [vercel.com/dashboard](https://vercel.com/dashboard)
2. Click **"Add New..."** → **"Project"**
3. Import your GitHub repository `houseiana-booking`
4. Configure project:
   - **Framework Preset**: Next.js (auto-detected)
   - **Root Directory**: `./`
   - **Build Command**: `npm run build`
   - **Output Directory**: `.next` (auto-detected)
   - **Install Command**: `npm install`
5. Click **"Deploy"**

### 4. Configure Custom Domain

Once your site is deployed:

1. Go to your project in Vercel Dashboard
2. Navigate to **Settings** → **Domains**
3. Add your domain: `www.houseianabooking.com`
4. Also add: `houseianabooking.com` (will redirect to www)

Vercel will provide DNS configuration instructions.

### 5. Update DNS Settings

Go to your domain registrar (where you purchased houseianabooking.com):

#### Option A: Using Vercel Nameservers (Recommended)

Point your domain's nameservers to Vercel:
```
ns1.vercel-dns.com
ns2.vercel-dns.com
```

#### Option B: Using CNAME Records

Add these DNS records:
```
Type: CNAME
Name: www
Value: cname.vercel-dns.com
TTL: 3600

Type: A
Name: @
Value: 76.76.21.21
TTL: 3600
```

**Note**: DNS propagation can take 24-48 hours, but usually completes within 1-2 hours.

### 6. Configure SSL Certificate

Vercel automatically provisions SSL certificates for custom domains. Once DNS is configured:
1. Wait for DNS propagation
2. Vercel will automatically issue an SSL certificate
3. Your site will be accessible via HTTPS

### 7. Environment Variables (If Needed)

If you have any environment variables:

1. Go to **Settings** → **Environment Variables**
2. Add variables for:
   - `NEXT_PUBLIC_API_URL` (if you have an API)
   - Any other configuration variables
3. Redeploy after adding variables

## Build Verification

Before deploying, verify the build works locally:

```bash
cd "/Users/goldenloonie/Desktop/Housiana Booking aite/houseiana booking frontend"

# Clean previous builds
rm -rf .next

# Build the project
npm run build

# Test production build locally
npm run start
```

Visit `http://localhost:5000` to test the production build.

## Post-Deployment Checklist

After deployment, verify:

- [ ] Website loads at `https://www.houseianabooking.com`
- [ ] Both English and Arabic versions work (`/en` and `/ar`)
- [ ] All mega menus function correctly
  - [ ] Hotels search
  - [ ] Flights search
  - [ ] Meet & Assist booking
  - [ ] Visa application
- [ ] WhatsApp button links to `+974 30424433`
- [ ] Contact form works
- [ ] All pages are accessible
- [ ] Mobile responsiveness works
- [ ] Images load correctly
- [ ] SSL certificate is active (padlock icon in browser)

## Automatic Deployments

With the GitHub integration:
- **Production**: Every push to `main` branch auto-deploys to production
- **Preview**: Every pull request gets a preview deployment
- **Rollback**: Easy one-click rollback in Vercel dashboard

## Monitoring and Analytics

### Enable Vercel Analytics

1. Go to your project dashboard
2. Navigate to **Analytics** tab
3. Enable **Web Analytics** (free)

### Monitor Performance

- **Build Logs**: Check deployment logs in Vercel dashboard
- **Error Tracking**: View runtime errors in the Functions tab
- **Speed Insights**: Monitor Core Web Vitals

## Troubleshooting

### Build Fails

If the build fails:
1. Check build logs in Vercel dashboard
2. Verify the build works locally: `npm run build`
3. Ensure all dependencies are in `package.json`

### Domain Not Working

If your domain doesn't resolve:
1. Verify DNS records are correct
2. Wait for DNS propagation (up to 48 hours)
3. Use [whatsmydns.net](https://whatsmydns.net) to check propagation
4. Clear browser cache

### SSL Certificate Issues

If SSL doesn't work:
1. Wait 24 hours for certificate provisioning
2. Verify DNS records are correct
3. Check Vercel dashboard for certificate status

## Updating the Website

To update your website:

```bash
# Make your changes
git add .
git commit -m "Description of changes"
git push origin main
```

Vercel will automatically build and deploy your changes.

## Support

- **Vercel Documentation**: [vercel.com/docs](https://vercel.com/docs)
- **Next.js Documentation**: [nextjs.org/docs](https://nextjs.org/docs)
- **Vercel Support**: [vercel.com/support](https://vercel.com/support)

## Production URLs

- **Primary**: https://www.houseianabooking.com
- **Alternate**: https://houseianabooking.com (redirects to www)
- **English**: https://www.houseianabooking.com/en
- **Arabic**: https://www.houseianabooking.com/ar

---

**Note**: This deployment uses Vercel's free tier which includes:
- Automatic SSL
- Global CDN
- Unlimited bandwidth
- 100 GB-Hours of serverless function execution
- Web Analytics

For higher traffic or additional features, consider upgrading to Pro tier.
