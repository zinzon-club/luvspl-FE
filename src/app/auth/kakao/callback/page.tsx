"use client";

import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { useKakaoLogin } from "@/hooks/useAuth";
import Loading from "@/app/loading";

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
                <Loading />
                인가 코드가 없습니다.
            </div>
        );
    }

    if (status === "error") {
        return (
            <div style={{ textAlign: "center", marginTop: "20vh", color: "red" }}>
                <Loading />
                에러: {localError || (error as Error).message}
            </div>
        );
    }

    if (status === "pending") {
        return (
            <>
                <Loading />
            </>
        );
    }

    return null;
}