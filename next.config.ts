import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  images: {
    domains: ["YOUR_SUPABASE_DOMAIN.supabase.co", "i.pinimg.com", "img1.kakaocdn.net", "t1.kakaocdn.net"],
  },
};

export default nextConfig;
