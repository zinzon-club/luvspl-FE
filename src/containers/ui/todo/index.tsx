"use client";

import * as _ from "./style";
import { useState } from "react";
import { useRouter } from "next/navigation";
import IsDone from "@/../public/assets/clover/isDone.svg";
import NotDone from "@/../public/assets/clover/notDone.svg";
import data from "./data";
import Image from "next/image";

export default function Todo() {
  const router = useRouter();
  const [todo, setTodo] = useState(data);
  return (
    <_.Container>
      <_.NavSet>
        <_.NavDeco onClick={() => router.push(`/home`)}>
          <Image
            src="assets/arrow.svg"
            alt="arrow"
            width={24}
            height={24}
            style={{ cursor: "pointer" }}
          />
        </_.NavDeco>
        <_.TitleSet>
          <_.Title>오늘의 할일</_.Title>
          <_.SubTitle>할 일을 누르면 할 일이 완료됩니다</_.SubTitle>
        </_.TitleSet>
      </_.NavSet>
      <_.ResultSet>
        {todo
          .slice()
          .sort((a, b) => Number(a.done) - Number(b.done))
          .map((item) => (
            <_.ResultItem key={item.id}>
              <Image
                src={item.done ? IsDone : NotDone}
                alt="todo"
                onClick={() =>
                  setTodo((prev) =>
                    prev.map((t) =>
                      t.id === item.id ? { ...t, done: !t.done } : t,
                    ),
                  )
                }
              />
              <div>{item.value}</div>
            </_.ResultItem>
          ))}
      </_.ResultSet>
    </_.Container>
  );
}
