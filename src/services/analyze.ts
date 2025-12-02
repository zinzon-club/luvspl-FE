import customAxios from "@/lib/customAxios";

interface CsvRow {
  Date: string;
  User: number;
  Message: string;
}

export const upsertNickname = async (
  user_id: string,
  csvData: CsvRow[],
  username: string,
) => {
  const response = await customAxios.post(
    `/analyze`,
    {
      file: csvData,
      username,
    },
    {
      params: { user_id },
    },
  );

  return response.data;
};
