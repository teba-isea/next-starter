import withBundleAnalyzer from "@next/bundle-analyzer";

await import("./src/env.js");

const bundleAnalyzer = withBundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
});
/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  /* config options here */
};

export default bundleAnalyzer(nextConfig);
