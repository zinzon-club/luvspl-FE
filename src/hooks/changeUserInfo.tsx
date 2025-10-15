"use client";

import { useMemo, useState } from "react";
import { useUserStore } from "@/store/user";
import { EditField } from "@/types/types";

export const useChangeUserInfo = () => {
  const user = useUserStore((s) => s.user);
  const setUser = useUserStore((s) => s.setUser);

  const [name, setName] = useState(user.name);
  const [mail, setMail] = useState(user.mail);

  const userInput: EditField[] = useMemo(
    () => [
      { name: "이름", value: name, setValue: setName },
    ],
    [name, mail],
  );

  const apply = () => {
    setUser({
      img: user.img,
      name,
      mail,
    });
  };

  return {
    user,
    setUser,
    name,
    setName,
    mail,
    setMail,
    userInput,
    apply,
  };
};
