/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [390, 640, 828, 1080, 1200],
    imageSizes: [16, 32, 64, 128, 256],
    minimumCacheTTL: 31536000, // 1 ano
  },
}

export default nextConfig
