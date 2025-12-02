import customAxios from "@/lib/customAxios";

export const AnalyzeHistory = async (user_id: string) => {
  const response = await customAxios.post(`/analyze/history`, {
    params: { user_id },
  });

  return response.data;
};
