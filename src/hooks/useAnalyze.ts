import { useMutation, UseMutationResult, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { Analyze } from "@/services/analyze";
import { useAnalyzeStore } from "@/store/useAnalyzeStore";
import { AnalyzeResultItem } from "@/types/analyze";
import { formatAnalyzeResult } from "@/lib/formatAnalyzeResult";

interface AnalyzeVariables {
  userId: number;
  username: string;
  file: File;
}

export const useAnalyze = (): UseMutationResult<
  AnalyzeResultItem[],
  Error,
  AnalyzeVariables
> => {
  const router = useRouter();
  const queryClient = useQueryClient();
  const setResult = useAnalyzeStore((s) => s.setResult);

  return useMutation({
    mutationKey: ["analyze"],
    mutationFn: ({ userId, username, file }) => Analyze(userId, file, username),
    onSuccess: (data) => {
      const formatted = formatAnalyzeResult(data);
      if (!formatted.length) {
        alert("분석 결과가 비어있어요. 다시 시도해주세요.");
        router.push("/main");
        return;
      }
      setResult(formatted);
      queryClient.setQueryData(["analyzeResult"], formatted);
      router.push("/result");
    },
    onError: (err) => {
      console.error("Analyze request failed", err);
      alert("분석 중 오류가 발생했어요. 다시 시도해주세요.");
      router.push("/main");
    },
  });
};
