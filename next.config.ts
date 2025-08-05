import type { NextConfig } from "next";

const nextConfig: NextConfig = {
   images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'fsc-projects-static.s3.us-east-1.amazonaws.com',
        port: '',
        pathname: '/BEWEAR/**', // You can make this more or less specific
      },
    ],
  },
};

export default nextConfig;
