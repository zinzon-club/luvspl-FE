import { create } from "zustand";
import { persist } from 'zustand/middleware';

import { UserState } from '@/types/auth';

export const useUserStore = create<UserState>()(
  persist(
    (set) => ({
      user: null,

      setUser: (user) =>
        set(() => ({
          user,
        })),

      clearUser: () =>
        set(() => ({
          user: null,
        })),
    }),
    { name: 'user-store' }
  )
);