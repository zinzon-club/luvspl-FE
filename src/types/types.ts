export interface BtnProps {
  children: React.ReactNode;
  onClick?: () => void;
}

export interface AnalyzingResultprops {
  type: "stat" | "advice";
  often?: string;
  min?: number;
  max?: number;
  advice?: string[];
}

export interface User {
  id?: number;
  name: string;
  img?: string;
}

export interface UserStore {
  user: User | null;
  setUser: (user: User) => void;
  clearUser: () => void;
}

export type EditField = {
  name: string;
  value: string;
  setValue: (v: string) => void;
};
