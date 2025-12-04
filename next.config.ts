import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    reactStrictMode: true,
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "wqlrzexdxqwlxkmtjfjj.supabase.co",
            },
            {
                protocol: "https",
                hostname: "i.pinimg.com",
            },
            {
                protocol: "https",
                hostname: "img1.kakaocdn.net",
            },
            {
                protocol: "http",
                hostname: "img1.kakaocdn.net",
            },
            {
                protocol: "https",
                hostname: "t1.kakaocdn.net",
            },
            {
                protocol: "http",
                hostname: "t1.kakaocdn.net",
            },
            {
                protocol: "https",
                hostname: "k.kakaocdn.net",
            },
            {
                protocol: "http",
                hostname: "k.kakaocdn.net",
            },
        ],
    },
    eslint: {
        ignoreDuringBuilds: true,
    },
};

export default nextConfig;