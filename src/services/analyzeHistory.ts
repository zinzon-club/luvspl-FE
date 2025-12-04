import customAxios from "@/lib/customAxios";
import { AnalyzeHistoryResponse } from "@/types/analyze";

export const AnalyzeHistory = async (user_id: number) => {
  const response = await customAxios.get<AnalyzeHistoryResponse>(
    `/analyze/history`,
    {
      params: { user_id },
      headers: {
        "Content-Type": "multipart/form-data",
      },
    },
  );

  return response.data;
};
