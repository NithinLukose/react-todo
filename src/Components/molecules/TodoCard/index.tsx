import React from "react";
import { Todo } from "../../../types/todo";
import { TodoCardContainer } from "./styles";

interface TodoProps {
  todo: Todo;
}

const TodoCard: React.FC<TodoProps> = ({ todo }) => {
  const { todoTitle, todoState, todoDueDate } = todo;
  return (
    <TodoCardContainer>
      <p>{todoTitle}</p>
      <p>{todoState}</p>
      <p>{todoDueDate.toLocaleString()}</p>
    </TodoCardContainer>
  );
};

export default TodoCard;
