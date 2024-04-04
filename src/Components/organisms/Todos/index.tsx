import React from "react";
import { Todo } from "../../../types/todo";
import TodoCard from "../../molecules/TodoCard/index";
import { TodoListContainer } from "./styles";

interface TodosProps {
  todos: Todo[];
}
const Todos: React.FC<TodosProps> = ({ todos }) => {
  return (
    <TodoListContainer>
      {todos.map((todo) => (
        <TodoCard todo={todo} key={todo.id} />
      ))}
    </TodoListContainer>
  );
};

export default Todos;
