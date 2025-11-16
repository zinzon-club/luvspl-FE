import { useEffect, useMemo, useState } from "react";
import { useUserStore } from "@/store/useUserStore";
import { EditField } from "@/types/types";
import { upsertNickname } from "@/services/profile";

export const useChangeUserInfo = () => {
  const user = useUserStore((s) => s.user);
  const setUser = useUserStore((s) => s.setUser);
  const [name, setName] = useState(user?.name || "");

  useEffect(() => {
    if (!user) {
      const savedUser = localStorage.getItem("user");
      if (savedUser) {
        const parsedUser = JSON.parse(savedUser);
        setUser(parsedUser);
        setName(parsedUser.name || "");
      }
    }
  }, [user, setUser]);

  const userInput: EditField[] = useMemo(
    () => [{ name: "이름", value: name, setValue: setName }],
    [name]
  );

  const apply = async () => {
    const userId = user?.id;
    if (!userId) return alert("유저 정보가 없습니다.");

    const res = await upsertNickname(name, userId);

    if (res.success) {
      const updatedUser = { ...user, name };
      setUser(updatedUser);
      localStorage.setItem("user", JSON.stringify(updatedUser));
      alert("닉네임이 수정되었습니다");
    }
  };

  return { user, userInput, apply };
};