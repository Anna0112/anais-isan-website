/** @type {import('next').NextConfig} */
const nextConfig = {
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
  poweredByHeader: false,
  compress: true,
  // Видаляємо проблемні налаштування
  experimental: {
    // optimizeCss видаляємо - це експериментальна функція
  }
}

export default nextConfig
