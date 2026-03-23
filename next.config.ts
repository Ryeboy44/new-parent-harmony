import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.newparentharmony.com",
        pathname: "/files/**",
      },
    ],
  },
};

export default nextConfig;
