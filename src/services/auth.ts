import customAxois from '@/lib/customAxios';
import { AuthResponse } from '@/types/auth';

export async function kakaoLogin(code: string): Promise<AuthResponse> {
  const res = await customAxois.get<AuthResponse>("/auth/kakao/callback", {
    params: { code },
  });
  return res.data;
}