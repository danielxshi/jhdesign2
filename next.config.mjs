// next.config.mjs
import { withPayload } from '@payloadcms/next/withPayload'

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone', // ✅ Vercel requires this for Payload
  webpack: (webpackConfig) => {
    webpackConfig.resolve.extensionAlias = {
      '.cjs': ['.cts', '.cjs'],
      '.js': ['.ts', '.tsx', '.js', '.jsx'],
      '.mjs': ['.mts', '.mjs'],
    }

    return webpackConfig
  },
}

export default withPayload(nextConfig, {
  devBundleServerPackages: false, // ✅ Required for Vercel compatibility
})
