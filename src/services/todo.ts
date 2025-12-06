import customAxios from "@/lib/customAxios";

export interface TodoItem {
  id: number;
  title?: string;
  todos?: string;
  name?: string;
  description?: string;
  done?: boolean;
  complete?: boolean;
  [key: string]: any;
}

const DAY_MS = 24 * 60 * 60 * 1000;

function getCacheKeys(userId: string | null) {
  const uid = userId ?? "anon";
  return {
    cacheKey: `todos_${uid}`,
    cacheAtKey: `todos_generated_at_${uid}`,
  };
}

export const getTodos = async () => {
  const isClient = typeof window !== "undefined";
  const user_id = isClient ? localStorage.getItem("user_id") : null;
  const { cacheKey, cacheAtKey } = getCacheKeys(user_id);

  if (isClient) {
    const cached = localStorage.getItem(cacheKey);
    const cachedAt = localStorage.getItem(cacheAtKey);
    if (cached && cachedAt) {
      const age = Date.now() - Number(cachedAt);
      if (age < DAY_MS) {
        try {
          return JSON.parse(cached) as TodoItem[];
        } catch (e) {
        }
      }
    }
  }

  const response = await customAxios.get("/generate", {
    params: { user_id },
  });

  const todos: TodoItem[] = response.data;

  if (isClient) {
    try {
      localStorage.setItem(cacheKey, JSON.stringify(todos));
      localStorage.setItem(cacheAtKey, String(Date.now()));
    } catch (e) {
      console.warn("Failed to write todos cache", e);
    }
  }

  return todos;
};

export const updateTodoStatus = async (id: number, complete: boolean) => {
  const isClient = typeof window !== "undefined";
  const user_id = isClient ? localStorage.getItem("user_id") : null;
  const { cacheKey } = getCacheKeys(user_id);

  const res = await customAxios.patch(`/todos/${id}`, { complete });

  const updatedTodo: TodoItem = res.data;

  if (isClient) {
    try {
      const cached = localStorage.getItem(cacheKey);
      if (cached) {
        const todos: TodoItem[] = JSON.parse(cached);
        const idx = todos.findIndex((t) => t.id === updatedTodo.id);
        if (idx >= 0) {
          todos[idx] = updatedTodo;
        } else {
          todos.push(updatedTodo);
        }
        localStorage.setItem(cacheKey, JSON.stringify(todos));
      }
    } catch (e) {
    }
  }

  return updatedTodo;
};