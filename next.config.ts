import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
   qualities: [75, 85]
  }
};

export default nextConfig;
