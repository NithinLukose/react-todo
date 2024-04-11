import { create } from "zustand";
import { Todo } from "../types/todo";

interface TodoStore {
  todoList: Todo[];
  addTodo: (todo: Todo) => void;
}

export const useTodoStore = create<TodoStore>()((set) => ({
  todoList: [],
  addTodo: (todo) => set((state) => ({ todoList: [...state.todoList, todo] })),
}));
