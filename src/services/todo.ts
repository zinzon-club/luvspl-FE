import customAxios from "@/lib/customAxios";

export const fetchTodos = async (user_id: number) => {
  const res = await customAxios.get(`/todo?id=${user_id}`);
  return res.data.data;
};

export const createTodo = async (user_id: number, todos: string, complete: boolean) => {
  const res = await customAxios.post("/todo", { user_id, text: todos, completed: complete });
  return res.data.data;
};