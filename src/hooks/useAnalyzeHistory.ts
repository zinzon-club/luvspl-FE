import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { AnalyzeHistory } from "@/services/analyzeHistory";
import { formatAnalyzeHistory } from "@/lib/formatAnalyzeResult";
import { AnalyzeHistoryRecord } from "@/types/analyze";

export const useAnalyzeHistory = (
  userId?: number | null,
): UseQueryResult<AnalyzeHistoryRecord[], Error> => {
  return useQuery({
    queryKey: ["analyzeHistory", userId],
    queryFn: () => {
      if (!userId) throw new Error("로그인 정보가 없습니다.");
      return AnalyzeHistory(userId);
    },
    select: formatAnalyzeHistory,
    enabled: !!userId,
    staleTime: 1000 * 60,
  });
};
