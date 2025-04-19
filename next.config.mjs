/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: process.env.NODE_ENV === 'production' ? '/test_react_next.js_week5' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/test_react_next.js_week5/' : '',
};

export default nextConfig;
