export interface TodoItem {
  id: number;
  todos: string;
  complete: boolean;
}

export type LocalTodo = {
    id: string | number;
    todos: string;
    complete: boolean;
};