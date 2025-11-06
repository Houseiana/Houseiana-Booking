/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'via.placeholder.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
  // Enable SWC minification for faster builds
  swcMinify: true,
  // Compression
  compress: true,
  // Production optimizations
  productionBrowserSourceMaps: false,
  // Enable static optimization where possible
  poweredByHeader: false,
}

module.exports = nextConfig
