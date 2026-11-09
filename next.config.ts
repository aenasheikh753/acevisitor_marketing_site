import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Production is plain static HTML on NameHero; `npm run build` emits out/.
  output: "export",
  // Emits /platform/index.html so Apache can serve every route without rewrites.
  trailingSlash: true,
  images: { unoptimized: true },
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
