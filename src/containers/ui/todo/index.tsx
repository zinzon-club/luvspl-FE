"use client";

import * as _ from "./style";
import { useState } from "react";
import { useRouter } from "next/navigation";
import IsDone from "@/../public/assets/clover/isDone.svg";
import NotDone from "@/../public/assets/clover/notDone.svg";
import Image from "next/image";

export default function Todo() {
  const router = useRouter();
  const [todo, setTodo] = useState([
    {
      value: "일기 쓰기",
      done: false,
    },
    {
      value: "청소 하기",
      done: false,
    },
    {
      value: "영단어 외우기",
      done: true,
    },
  ]);
  return (
    <_.Container>
      <_.NavSet>
        <_.NavDeco onClick={() => router.push(`/mypage`)}>{"<"}</_.NavDeco>
        <_.TitleSet>
          <_.Title>오늘의 할일</_.Title>
          <_.SubTitle>할 일을 누르면 할 일이 완료됩니다</_.SubTitle>
        </_.TitleSet>
      </_.NavSet>
      <_.ResultSet>
        {todo.map((item, i) => (
          <_.ResultItem key={i}>
            <Image
              src={item.done ? IsDone : NotDone}
              alt={"todo"}
              onClick={() => {
                setTodo((prev) =>
                  prev.map((t, idx) =>
                    idx === i ? { ...t, done: !t.done } : t,
                  ),
                );
              }}
            />
            <div>{item.value}</div>
          </_.ResultItem>
        ))}
      </_.ResultSet>
    </_.Container>
  );
}
