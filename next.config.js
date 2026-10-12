/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: process.env.GITHUB_PAGES ? '/KUNAL-BHAIYA-' : '',
  distDir: process.env.GITHUB_PAGES ? '.next-gh-pages' : '.next',
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'img.youtube.com',
      },
      {
        protocol: 'https',
        hostname: 'i.ytimg.com',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'assets.mixkit.co',
      }
    ],
  },
  reactStrictMode: true,
};

module.exports = nextConfig;
