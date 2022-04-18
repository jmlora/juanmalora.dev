const bundleAnalyzer = require('@next/bundle-analyzer')
const withBundleAnalyzer = bundleAnalyzer({ enabled: process.env.ANALYZE === 'true' })

const nextConfig = {
  target: 'experimental-serverless-trace' // Not required for Vercel, but used by GitHub Actions
}

module.exports = withBundleAnalyzer(nextConfig)
