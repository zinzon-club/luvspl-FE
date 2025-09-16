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

export type User = {
  img: string;
  name: string;
  mail: string;
};

export type UserStore = {
  user: User;
  setUser: (u: User) => void; // 통째로 교체
  patchUser: (u: Partial<User>) => void; // 일부만 업데이트
  reset: () => void; // 초기값으로 리셋
};
