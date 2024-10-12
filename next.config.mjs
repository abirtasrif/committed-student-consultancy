/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.committedltd.com",
      },
    ],
  },
};

export default nextConfig;
