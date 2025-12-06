"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useKakaoLogin } from "@/hooks/useAuth";

export default function KakaoCallbackPage() {
    const router = useRouter();
    const mutation = useKakaoLogin();

    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const code = params.get("code");
        const error = params.get("error");

        if (error || !code) {
            router.replace("/main");
            return;
        }

        mutation.mutate(code);
    }, []);

    return <>로그인 처리중...</>;
}
