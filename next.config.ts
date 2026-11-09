import type { NextConfig } from "next";

// Allows images uploaded through the admin panel, e.g. MEDIA_HOST=media.example.com
const mediaHost = process.env.MEDIA_HOST;

const nextConfig: NextConfig = {
  images: {
    remotePatterns: mediaHost ? [{ protocol: "https", hostname: mediaHost }] : [],
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
