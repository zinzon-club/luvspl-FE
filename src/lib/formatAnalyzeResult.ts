import { AnalyzeHistoryRecord, AnalyzeResultItem } from "@/types/analyze";

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

const formatPercent = (value: number) =>
  Number.isFinite(value) ? `${value}%` : "0%";

export const formatAnalyzeResult = (data: unknown): AnalyzeResultItem[] => {
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
    often: formatPercent(value),
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

const formatDateLabel = (value: unknown): string => {
  if (!value) return "알 수 없는 날짜";
  const date = typeof value === "number" ? new Date(value) : new Date(String(value));
  if (Number.isNaN(date.getTime())) return "알 수 없는 날짜";

  return date.toLocaleDateString("ko-KR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

export const formatAnalyzeHistory = (data: unknown): AnalyzeHistoryRecord[] => {
  let list: unknown[] = [];

  if (Array.isArray(data)) list = data;
  else if (data && typeof data === "object") {
    if (Array.isArray((data as { analyses?: unknown }).analyses)) {
      list = (data as { analyses: unknown[] }).analyses;
    } else if (Array.isArray((data as { history?: unknown }).history)) {
      list = (data as { history: unknown[] }).history;
    } else if (Array.isArray((data as { data?: unknown }).data)) {
      list = (data as { data: unknown[] }).data;
    }
  }

  return list
    .map((item, idx) => {
      const record = (item && typeof item === "object" ? item : {}) as Record<string, unknown>;
      const resultItems = formatAnalyzeResult(item);
      if (!resultItems.length) return null;

      const dateValue =
        record.date ??
        record.created_at ??
        record.createdAt ??
        record.timestamp ??
        record.created_at_ts;

      return {
        id: record.id ?? record.record_id ?? idx,
        date: formatDateLabel(dateValue),
        items: resultItems,
      } as AnalyzeHistoryRecord;
    })
    .filter(Boolean) as AnalyzeHistoryRecord[];
};
