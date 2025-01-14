import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  webpack(config, { dev }) {
    config.devtool = dev ? 'eval-source-map' : 'source-map';
    return config;
  },
  experimental: {
    turbo: {
      // ...
    },
  },
};

export default nextConfig;
