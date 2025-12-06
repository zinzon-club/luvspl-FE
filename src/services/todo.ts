import customAxios from "@/lib/customAxios";

export interface TodoItem {
  id: number;
  title: string;
  description: string;
  done: boolean;
}

export const getTodos = async () => {
  const user_id = localStorage.getItem("user_id");
  const response = await customAxios.get("/generate", {
    params: { user_id }
  });

  return response.data;
};

export const updateTodoStatus = async (id: number, complete: boolean) => {
  const res = await customAxios.patch(`/todo`, { complete });
  return res.data;
};
