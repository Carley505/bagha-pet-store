import type { NextConfig } from "next";

// Only use a subpath if explicitly building for GitHub Pages repository subfolder
const isGithubPages = process.env.GITHUB_PAGES === 'true';
const basePath = isGithubPages ? '/bagha-pet-store' : '';

const nextConfig: NextConfig = {
  basePath: basePath,
  assetPrefix: basePath ? `${basePath}/` : undefined,
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;
