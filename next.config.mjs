import { fileURLToPath } from "node:url";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",

  turbopack: {
    root: fileURLToPath(new URL(".", import.meta.url)),
  },

  experimental: {
    cpus: 2,
    workerThreads: false,
  },

  trailingSlash: true,

  images: {
    unoptimized: true,
  },

};

export default nextConfig;
