import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  webpack(config, { dev }) {
    config.devtool = dev ? 'eval-source-map' : 'source-map';
    return config;
  },
};

export default nextConfig;
