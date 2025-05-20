import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'blocks.astratic.com', // apenas para a imagem de exemplo
        // hostname: 'asdasdasdada.public.blob.vercel-storage.com',
      },
    ],
  },
};

export default nextConfig;
