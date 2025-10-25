import { create } from "zustand";
import { persist } from "zustand/middleware";
import { UserStore } from "@/types/types";

export const useUserStore = create<UserStore>()(
  persist(
    (set) => ({
      user: null,
      setUser: (user) => set({ user }),
      clearUser: () => set({ user: null }),
    }),
    { name: "user-store" }
  )
);