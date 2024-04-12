import { create } from "zustand";
import { Todo, TodoState } from "../types/todo";
import { immer } from "zustand/middleware/immer";

interface TodoStore {
  todoList: Todo[];
  addTodo: (todo: Todo) => void;
  updateTodoStatus: (todo: Todo, newStatus: TodoState) => void;
}

export const useTodoStore = create<TodoStore>()(
  immer((set) => ({
    todoList: [],
    addTodo: (todo) =>
      set((state) => {
        state.todoList.push(todo);
      }),
    updateTodoStatus: (todo, newStatus) =>
      set((state) => {
        state.todoList = state.todoList.map((item) => {
          if (item.id === todo.id) {
            item.todoState = newStatus;
          }
          return item;
        });
      }),
  }))
);
