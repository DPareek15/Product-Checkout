import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
};

module.exports = {
  images: {
    remotePatterns: [
      new URL('https://images.unsplash.com/**'),
      new URL('https://m.media-amazon.com/**'),
      new URL('https://topperskit.com/**'),
    ],
  },
};

export default nextConfig;
