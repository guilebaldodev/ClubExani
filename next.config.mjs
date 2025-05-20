/** @type {import('next').NextConfig} */
const nextConfig = {

    typescript: {
    ignoreBuildErrors: true, // ❗️ Ignora errores TS al compilar
  },
     eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;

