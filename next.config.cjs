/** @type {import('next').NextConfig} */
import path from 'path';

const nextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co/',
        port: '',
        // pathname: '/about',
      },
    ],
  },
};

export default nextConfig;
