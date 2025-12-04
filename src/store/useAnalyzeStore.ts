import { create } from "zustand";
import { AnalyzeResultItem } from "@/types/analyze";

interface AnalyzeState {
  file: File | null;
  result: AnalyzeResultItem[] | null;
  setFile: (file: File | null) => void;
  setResult: (data: AnalyzeResultItem[] | null) => void;
  clear: () => void;
}

export const useAnalyzeStore = create<AnalyzeState>((set) => ({
  file: null,
  result: null,
  setFile: (file) => set({ file }),
  setResult: (data) => set({ result: data }),
  clear: () => set({ file: null, result: null }),
}));
