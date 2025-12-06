"use client";

import * as _ from "./style";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import IsDone from "@/../public/assets/clover/isDone.svg";
import NotDone from "@/../public/assets/clover/notDone.svg";
import Image from "next/image";
import { getTodos, updateTodoStatus } from "@/services/todo";
import { TodoItem } from "@/types/todo";
import Loading from "@/components/Loading";

export default function Todo() {
  const router = useRouter();
  const [todo, setTodo] = useState<TodoItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const data = await getTodos();

        if (!Array.isArray(data.todos)) {
          console.error("Todo data is not an array", data.todos);
          return;
        }

        setTodo(
          data.todos.map((t: any) => ({
            id: t.id,
            todos: t.todos,
            complete: t.complete,
          }))
        );
      } catch (err) {
        console.error("Failed to fetch todos", err);
      } finally {
        setLoading(false);
      }
    };
    fetchTodos();
  }, []);

  const handleToggle = async (itemId: number, currentStatus: boolean) => {
    try {
      await updateTodoStatus(itemId, !currentStatus);
      setTodo((prev) =>
        prev.map((t) =>
          t.id === itemId ? { ...t, complete: !currentStatus } : t
        )
      );
    } catch (err) {
      console.error("Failed to update todo status", err);
    }
  };

  if (loading) return <div><Loading /></div>;

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
          .map((item) => (
            <_.ResultItem key={item.id}>
              <_.Clover
                src={item.complete ? IsDone : NotDone}
                alt="todo"
                onClick={() => handleToggle(item.id, item.complete)}
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