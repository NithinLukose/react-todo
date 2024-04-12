import React from "react";
import { Todo } from "../../../types/todo";
import { TodoCardContainer } from "./styles";

interface TodoProps {
  todo: Todo;
}

const TodoCard: React.FC<TodoProps> = ({ todo }) => {
  const { todoTitle, todoDesc, todoDueDate } = todo;
  const handleDragStart = (ev: React.DragEvent<HTMLDivElement>) => {
    ev.dataTransfer.setData("todo", JSON.stringify(todo));
  };
  return (
    <TodoCardContainer
      draggable
      onDragStart={(ev: React.DragEvent<HTMLDivElement>) => handleDragStart(ev)}
    >
      <p>{todoTitle}</p>
      <p className="todo-description">{todoDesc}</p>
      <p>{todoDueDate ? todoDueDate.toLocaleString() : "-"}</p>
    </TodoCardContainer>
  );
};

export default TodoCard;
