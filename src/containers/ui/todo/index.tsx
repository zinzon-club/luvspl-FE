"use client";

import * as _ from "./style";
import Image from "next/image";
import { useRouter } from "next/navigation";
import IsDone from "@/../public/assets/clover/isDone.svg";
import NotDone from "@/../public/assets/clover/notDone.svg";
import Loading from "@/components/Loading";
import useTodos from "@/hooks/useTodo";

export default function Todo() {
  const router = useRouter();
  const { todo, loading, toggleTodo } = useTodos();

  if (loading)
    return (
      <div>
        <Loading />
      </div>
    );

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
          <_.SubTitle>할 일을 누르면 완료됩니다</_.SubTitle>
        </_.TitleSet>
      </_.NavSet>

      <_.ResultSet>
        {todo
          .slice()
          .sort((a, b) => Number(a.complete) - Number(b.complete))
          .map(item => (
            <_.ResultItem key={item.id}>
              <_.Clover
                src={item.complete ? IsDone : NotDone}
                alt="todo"
                onClick={() => toggleTodo(item.id, item.complete)}
                done={item.complete}
              />
              <div>
                <_.Title>{item.todos}</_.Title>
              </div>
            </_.ResultItem>
          ))}
      </_.ResultSet>
    </_.Container>
  );
}