import React from "react";
import { useTodoStore } from "../../../store/todoStore";
import { Todo, TodoState } from "../../../types/todo";
import Todos from "../Todos";
import { ColumnContainer, StateContainer } from "./styles";

interface Props {
  status: TodoState;
  todos: Todo[];
}

const getProperty = (status: TodoState) => {
  switch (status) {
    case TodoState.BACKLOG:
      return {
        label: "Backlog",
        backgroundColor: "#cac7c7",
        color: "black",
      };
    case TodoState.COMPLETED:
      return {
        label: "Completed",
        backgroundColor: "#c1efc0",
        color: "#185c08",
      };
    case TodoState.INPROGRESS:
      return {
        label: "In Progress",
        backgroundColor: "#95d6f3",
        color: "#1c1d98",
      };
  }
};

const StateColumn: React.FC<Props> = ({ status, todos }) => {
  const statusProperty = getProperty(status);
  const updateTodoStatus = useTodoStore((state) => state.updateTodoStatus);

  const handleTodoDrop = (ev: React.DragEvent<HTMLDivElement>) => {
    ev.preventDefault();
    const todo = JSON.parse(ev.dataTransfer.getData("todo"));
    if (todo.todoState !== status) {
      updateTodoStatus(todo, status);
    }
  };

  return (
    <ColumnContainer
      onDragOver={(e: React.DragEvent<HTMLDivElement>) => e.preventDefault()}
      onDrop={handleTodoDrop}
    >
      <StateContainer
        color={statusProperty.color}
        backgroundColor={statusProperty.backgroundColor}
      >
        {statusProperty.label}
      </StateContainer>
      <Todos todos={todos} />
    </ColumnContainer>
  );
};

export default StateColumn;
