import "./env.mjs"
import withBundleAnalyzer from "@next/bundle-analyzer"

const bundleAnalyzer = withBundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
})
/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  /* config options here */
}

export default bundleAnalyzer(nextConfig)
