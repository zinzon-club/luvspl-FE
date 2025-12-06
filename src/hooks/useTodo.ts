"use client";

import { useEffect, useState } from "react";
import { getTodos, updateTodoStatus } from "@/services/todo";
import { v4 as uuidv4 } from "uuid";
import type { LocalTodo } from "@/types/todo";

export default function useTodos() {
    const [todo, setTodo] = useState<LocalTodo[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchTodos = async () => {
            try {
                const data = await getTodos();

                const items = Array.isArray(data)
                    ? data
                    : data && (data as any).todos
                        ? (data as any).todos
                        : [];

                const normalized = items
                    .map((t: any) => {
                        const rawText = t.todos ?? t.title ?? t.name ?? t;

                        if (typeof rawText !== "string") return null;
                        if (rawText.includes("[object Object]")) return null;

                        return {
                            id: t.id != null ? Number(t.id) : uuidv4(),
                            todos: rawText.trim(),
                            complete: Boolean(t.complete ?? t.done),
                        };
                    })
                    .filter(Boolean) as LocalTodo[];

                setTodo(normalized);
            } catch (err) {
                console.error("Failed to fetch todos", err);
            } finally {
                setLoading(false);
            }
        };

        fetchTodos();
    }, []);

    const toggleTodo = async (id: string | number, current: boolean) => {
        setTodo(prev =>
            prev.map(t => (t.id === id ? { ...t, complete: !current } : t))
        );

        try {
            const userId = typeof window !== "undefined" ? localStorage.getItem("user_id") : null;
            const key = `todos_${userId ?? "anon"}`;
            const cached = localStorage.getItem(key);

            if (cached) {
                const parsed = JSON.parse(cached);
                const idx = parsed.findIndex((t: any) => t.id === id);

                if (idx >= 0) parsed[idx].complete = !current;
                localStorage.setItem(key, JSON.stringify(parsed));
            }
        } catch (err) {
            console.warn("Cache update failed", err);
        }

        if (typeof id === "number") {
            try {
                const updated = await updateTodoStatus(id, !current);
                setTodo(prev =>
                    prev.map(t =>
                        t.id === id
                            ? {
                                ...t,
                                complete: Boolean(updated.complete ?? updated.done ?? !current),
                                todos: updated.todos ?? updated.title ?? updated.name ?? t.todos,
                            }
                            : t
                    )
                );
            } catch (err) {
                console.warn("Server update failed, reverting optimistic change", err);
                setTodo(prev =>
                    prev.map(t => (t.id === id ? { ...t, complete: current } : t))
                );
            }
        }
    };

    return {
        todo,
        loading,
        toggleTodo,
    };
}