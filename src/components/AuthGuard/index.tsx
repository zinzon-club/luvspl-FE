"use client";

import { ReactNode, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function AuthGuard({ children }: { children: ReactNode }) {
  const router = useRouter();

  useEffect(() => {
    if (typeof window === "undefined") return;
    const token = localStorage.getItem("token");
    if (!token) router.replace("/login");
  }, [router]);

  return <>{children}</>;
}