import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    viewTransition: true,
  },
  compiler: {
    removeConsole: true,
  },
};

export default nextConfig;
