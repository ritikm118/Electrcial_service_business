/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export', // Enables static export
    images: {
      unoptimized: true, // Required since GitHub Pages doesn't support optimized images
    },
    basePath: '/REPO_NAME', // Add this line, replace REPO_NAME with your repository name
    assetPrefix: '/REPO_NAME/', // Ensures proper path for static assets
  };
  
  module.exports = nextConfig;
  