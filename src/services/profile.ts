import customAxios from "@/lib/customAxios";

export const upsertNickname = async (nickname: string, id: number) => {
  const response = await customAxios.post("/profile/nickname", { nickname, id });
  return response.data;
};