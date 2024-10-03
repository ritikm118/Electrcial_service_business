/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export', // Enables static export
    images: {
      unoptimized: true, // Required since GitHub Pages doesn't support optimized images
    },
    
  };
  
  module.exports = nextConfig;
  