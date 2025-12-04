import customAxios from "@/lib/customAxios";
import { AnalyzeResultItem } from "@/types/analyze";

export const Analyze = async (
  user_id: number,
  csvFile: File,
  username: string,
) => {
  const formData = new FormData();
  formData.append("file", csvFile);
  formData.append("username", username);

  const response = await customAxios.post<AnalyzeResultItem[]>(
    `/analyze`,
    formData,
    {
      params: { user_id },
      headers: {
        "Content-Type": "multipart/form-data",
      },
    },
  );

  return response.data;
};
