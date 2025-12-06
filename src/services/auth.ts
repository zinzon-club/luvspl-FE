import axios from "axios";
import customAxios from "@/lib/customAxios";
import { AuthResponse } from "@/types/auth";

async function handleAxiosError(err: unknown): Promise<never> {
  if (axios.isAxiosError(err)) {
    console.error("kakaoLogin error:", err.response?.status, err.response?.data);
    throw new Error(
      err.response?.data?.message ?? JSON.stringify(err.response?.data) ?? err.message
    );
  }
  throw err as Error;
}

export async function kakaoLogin(code: string): Promise<AuthResponse> {
  try {
    const res = await customAxios.get<AuthResponse>("/auth/kakao/callback", {
      params: { code },
    });
    return res.data;
  } catch (e) {
    try {
      const res = await customAxios.post<AuthResponse>("/auth/kakao/callback", { code });
      return res.data;
    } catch (err) {
      return handleAxiosError(err);
    }
  }
}