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
  output: "standalone",
}

module.exports = nextConfig
