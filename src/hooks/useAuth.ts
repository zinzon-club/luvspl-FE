import { useMutation, UseMutationResult } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { kakaoLogin } from "@/services/auth";
import { AuthResponse } from "@/types/auth";
import { useUserStore } from "@/store/useUserStore";

export function useKakaoLogin(): UseMutationResult<AuthResponse, Error, string> {
  const router = useRouter();
  const setUser = useUserStore((s) => s.setUser);

  return useMutation<AuthResponse, Error, string>({
    mutationFn: (code: string) => kakaoLogin(code),
    onSuccess: (data) => {
      setUser(data.user);
      localStorage.setItem("token", data.access_token);
      localStorage.setItem("user", JSON.stringify(data.user));

      router.push("/main");
    },
    onError(err: Error) {
      alert("로그인에 실패했습니다. 다시 시도해주세요.");
      router.push("/");
    },
  });
}