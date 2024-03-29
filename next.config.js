/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: '*'
      }
    ],
  },
  reactStrictMode: false,
}

module.exports = nextConfig
