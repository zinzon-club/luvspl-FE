"use client";

import { useMemo, useState } from "react";
import { useUserStore } from "@/store/useUserStore";
import { EditField } from "@/types/types";
import { upsertNickname } from "@/services/profile";

export const useChangeUserInfo = () => {
  const user = useUserStore((s) => s.user);
  const setUser = useUserStore((s) => s.setUser);

  const [name, setName] = useState(user?.name || "");

  const userInput: EditField[] = useMemo(
    () => [{ name: "이름", value: name, setValue: setName }],
    [name]
  );

  const apply = async () => {
    const userId = user?.id;
    if (userId == null) return alert("유저 정보가 없습니다.");

    const res = await upsertNickname(name, userId);

    if (res.success) {
      setUser({ ...user, name });
      alert("닉네임이 수정되었습니다");
    }
  };

  return { user, userInput, apply };
};