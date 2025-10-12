/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
images: {
    domains: ["res.cloudinary.com"],
  },

    typescript: {
    ignoreBuildErrors: true, 
  },
     eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;

