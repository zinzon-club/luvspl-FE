"use client";

import { ReactNode, useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function AuthGuard({ children }: { children: ReactNode }) {
  const router = useRouter();
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    const token = typeof window !== "undefined" ? localStorage.getItem("token") : null;

    if (!token) {
      router.replace("/home");
    } else {
      setChecked(true);
    }
  }, [router]);

  if (!checked) {
    return <div>확인 중...</div>;
  }

  return <>{children}</>;
}