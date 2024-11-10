/** @type { import('next').NextConfig } */

const nextConfig = {
  experimental: {
    serverActions: true,
  },
  images: {
    domains: ['aypkfngcyyjuikbsqyyu.supabase.co'],
  }
};

module.exports = nextConfig;
