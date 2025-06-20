/** @type {import('next').NextConfig} */
const nextConfig = {
  // Для Hostinger не потрібен output: 'export'
  trailingSlash: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // Налаштування для продакшену
  poweredByHeader: false,
  compress: true,
  // Оптимізація
  swcMinify: true,
  experimental: {
    optimizeCss: true
  }
}

export default nextConfig
