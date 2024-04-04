import React from "react";
import { Todo, TodoState } from "../../../types/todo";
import Todos from "../../organisms/Todos/index";

const currentDate = new Date();
currentDate.setDate(currentDate.getDate() + 5);
const todoList: Todo[] = [
  {
    id: 1,
    todoState: TodoState.BACKLOG,
    todoTitle: "Title 1",
    todoDesc: "Title 1 desc",
    todoDueDate: currentDate,
    todoCreateDate: currentDate,
  },
  {
    id: 2,
    todoState: TodoState.BACKLOG,
    todoTitle: "Title 2",
    todoDesc: "Title 2 desc",
    todoDueDate: currentDate,
    todoCreateDate: currentDate,
  },
  {
    id: 3,
    todoState: TodoState.BACKLOG,
    todoTitle: "Title 3",
    todoDesc: "Title 3 desc",
    todoDueDate: currentDate,
    todoCreateDate: currentDate,
  },
];

const TodoLanding = () => {
  return (
    <div>
      <Todos todos={todoList} />
    </div>
  );
};

export default TodoLanding;
