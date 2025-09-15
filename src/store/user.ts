import { create } from "zustand";

export type User = {
  img: string;
  name: string;
  mail: string;
};

type UserStore = {
  user: User;
  setUser: (u: User) => void; // 통째로 교체
  patchUser: (u: Partial<User>) => void; // 일부만 업데이트
  reset: () => void; // 초기값으로 리셋
};

const initialUser: User = {
  img: "https://i.pinimg.com/736x/15/b4/f3/15b4f3b63c2e43017a5c2d7d3660292e.jpg",
  name: "개구리중사",
  mail: "gaguri52@kakao.com",
};

export const useUserStore = create<UserStore>()((set) => ({
  user: initialUser,
  setUser: (u) => set({ user: u }),
  patchUser: (u) => set((s) => ({ user: { ...s.user, ...u } })),
  reset: () => set({ user: initialUser }),
}));
