import customAxios from "@/lib/customAxios";
import { AuthResponse } from "@/types/auth";

export async function kakaoLogin(code: string): Promise<AuthResponse> {
  const res = await customAxios.get<AuthResponse>("/auth/kakao/callback", {
    params: { code },
  });
  console.log("kakaoLogin response:", res.data);
  return res.data;
}