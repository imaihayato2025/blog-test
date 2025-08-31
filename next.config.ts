/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["images.microcms-assets.io"], // ← これを追加
  },
};

module.exports = nextConfig;
