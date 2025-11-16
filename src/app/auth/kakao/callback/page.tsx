"use client";

import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { useKakaoLogin } from "@/hooks/useAuth";
import Loading from "@/components/Loading";

export default function OAuthCallbackPage() {
    const params = useSearchParams();
    const code = params.get("code") ?? "";
    const { mutate, status, error } = useKakaoLogin();

    const [localError, setLocalError] = useState<string | null>(null);

    useEffect(() => {
        if (!code) return;
        mutate(code, {
            onError(err: Error) {
                setLocalError(err.message);
            },
        });
    }, [code, mutate]);

    if (!code) {
        return (
            <div style={{ textAlign: "center", marginTop: "20vh", color: "red" }}>
                인가 코드가 없습니다.
            </div>
        );
    }

    if (status === "pending") {
        return <Loading />;
    }

    if (status === "error") {
        return (
            <div style={{ textAlign: "center", marginTop: "20vh", color: "red" }}>
                에러: {localError || (error as Error).message}
            </div>
        );
    }

    return <Loading />;
}