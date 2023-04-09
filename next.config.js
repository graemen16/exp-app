/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  output:"standalone", // Enable standalone feature to get round a limitation in Azure Static Web Aps of 100MB (see tutorial)
}

module.exports = nextConfig
