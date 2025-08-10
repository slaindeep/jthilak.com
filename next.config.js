/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactStrictMode: true,
  poweredByHeader: false,
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  }
};

module.exports = nextConfig;
