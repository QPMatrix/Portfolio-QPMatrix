/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    domains: ["bwcbpofuqlgtbniegmlt.supabase.co", "qpmatrix.vercel.app"],
  },
};

export default nextConfig;
