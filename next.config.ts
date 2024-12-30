import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    dynamicIO: true,
  },

  // next imageのhttp設定
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "blogger.googleusercontent.com",
      },
    ],
  },
};

export default nextConfig;
