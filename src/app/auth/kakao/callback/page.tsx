"use client";
import { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { useKakaoLogin } from "@/hooks/useAuth"
import Loading from "@/components/Loading";

export default function OAuthCallbackPage() {
    const params = useSearchParams();
    const code = params.get("code") ?? "";
    const { mutate, status, error } = useKakaoLogin();

    useEffect(() => {
        if (!code) return;
        mutate(code);
    }, [code, mutate]);

    if (!code) return <div>인가 코드가 없습니다.</div>;
    if (status === "pending") return <Loading />;
    if (status === "error") return <div>에러: {(error as Error).message}</div>;

    return null;
}