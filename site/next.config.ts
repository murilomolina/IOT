import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'blocks.astratic.com',
      },
      {
        protocol: 'https',
        hostname: `${process.env.BLOB_KEY}.public.blob.vercel-storage.com`,
      },
    ],
  },
};

export default nextConfig;