"use client";

import { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { useKakaoLogin } from "@/hooks/useAuth";
import { useUserStore } from "@/store/useUserStore";

export default function OAuthCallbackPage() {
    const params = useSearchParams();
    const router = useRouter();
    const code = params.get("code") ?? "";
    const { setUser } = useUserStore();
    const [localError, setLocalError] = useState<string | null>(null);

    const { mutate, status, error } = useKakaoLogin();

    useEffect(() => {
        if (!code) return;

        mutate(code, {
            onSuccess: (res: any) => {
                const { token, user } = res;
                localStorage.setItem("token", token);
                setUser(user);
                router.replace("/main");
            },
            onError: (err: Error) => {
                setLocalError(err.message);
            },
        });
    }, [code, mutate, setUser, router]);

    if (!code) {
        return (
            <div style={{ textAlign: "center", color: "red" }}>
                인가 코드가 없습니다.
            </div>
        );
    }

    if (status === "error") {
        return (
            <div style={{ textAlign: "center", color: "red" }}>
                에러: {localError || (error as Error).message}
            </div>
        );
    }

    if (status === "pending") {
        return (
            <div style={{ textAlign: "center" }}>
                로그인 처리 중…
            </div>
        );
    }

    return null;
}
