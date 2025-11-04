import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "wqlrzexdxqwlxkmtjfjj.supabase.co",
      "i.pinimg.com",
      "img1.kakaocdn.net",
      "t1.kakaocdn.net",
    ],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;