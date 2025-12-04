import { useMutation, UseMutationResult, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { Analyze } from "@/services/analyze";
import { useAnalyzeStore } from "@/store/useAnalyzeStore";
import { AnalyzeResultItem } from "@/types/analyze";

interface AnalyzeVariables {
  userId: number;
  username: string;
  file: File;
}

const ratioLabels: Record<string, string> = {
  negative_ratio: "부정적인 표현 비율",
  positive_ratio: "긍정적인 표현 비율",
  aggressive_ratio: "공격적인 표현 비율",
  ignoring_ratio: "무시/감정 무시 비율",
  cold_ratio: "차가운 표현 비율",
  neutral_ratio: "중립적 표현 비율",
};

const toNumber = (value: unknown): number => {
  if (typeof value === "number") return value;
  const parsed = Number(value);
  return Number.isFinite(parsed) ? parsed : 0;
};

const buildResultItems = (data: unknown): AnalyzeResultItem[] => {
  if (Array.isArray(data)) return data;

  if (!data || typeof data !== "object") return [];

  const entries = Object.entries(data).filter(([key]) => key.endsWith("_ratio"));
  const sorted = entries
    .map(([key, value]) => [key, toNumber(value)] as const)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 2);

  const stats = sorted.map(([key, value], idx) => ({
    id: `${key}-${idx}`,
    title: ratioLabels[key] ?? key,
    type: "stat" as const,
    often: `${value}%`,
    min: "0%",
    max: "100%",
  }));

  const feedback =
    (data as { feedback?: unknown }).feedback && Array.isArray((data as { feedback?: unknown }).feedback)
      ? ((data as { feedback?: unknown }).feedback as string[])
      : [];

  const adviceItem: AnalyzeResultItem = {
    id: "advice",
    title: "이렇게 바꾸면 어때요?",
    type: "advice",
    advice: feedback,
  };

  return [...stats, adviceItem];
};

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
      const formatted = buildResultItems(data);
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
