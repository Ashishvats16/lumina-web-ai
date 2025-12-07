/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: 'export',
   webpack: (config) => {
    config.cache = false;
    return config;
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
   };

module.exports = nextConfig;
