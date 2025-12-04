export interface CsvRow {
  Date: string;
  User: number;
  Message: string;
}

export type AnalyzeResultType = "stat" | "advice";

export interface AnalyzeResultItem {
  id?: number | string;
  title: string;
  type: AnalyzeResultType;
  often?: string;
  min?: string | number;
  max?: string | number;
  advice?: string[];
}

export interface AnalyzeHistoryRecord {
  id: number | string;
  date?: string;
  items: AnalyzeResultItem[];
}

export type AnalyzeHistoryResponse =
  | AnalyzeHistoryRecord[]
  | {
      data?: unknown;
      history?: unknown;
      analyses?: unknown;
      user_id?: number;
    };
