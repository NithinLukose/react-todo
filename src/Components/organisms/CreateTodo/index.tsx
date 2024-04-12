import React, { useState } from "react";
import { Todo, TodoState } from "../../../types/todo";
import {
  CreateTodoActionGroup,
  CreateTodoDueDate,
  CreateTodoForm,
} from "./styles";
import { v4 as uuidv4 } from "uuid";

interface Props {
  createTodo: (t: Todo) => void;
  cancelCreation: () => void;
}

const CreateTodo: React.FC<Props> = ({ createTodo, cancelCreation }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");
  const handleTodoCreation = (
    title: string,
    description: string,
    dueDate: string
  ) => {
    const todo = {
      id: uuidv4(),
      todoState: TodoState.BACKLOG,
      todoTitle: title,
      todoDesc: description,
      todoDueDate: new Date(dueDate),
      todoCreateDate: new Date(),
    };
    createTodo(todo);
  };
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleTodoCreation(title, description, dueDate);
      }}
    >
      <CreateTodoForm>
        <label htmlFor="todo-title">Title</label>
        <input
          id="todo-title"
          placeholder="title!!!"
          required
          value={title}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setTitle(e.target.value)
          }
        />

        <label htmlFor="todo-description">Description</label>
        <textarea
          id="todo-description"
          placeholder="description!!!"
          rows={4}
          value={description}
          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
            setDescription(e.target.value)
          }
        />

        <label htmlFor="todo-due-date">Due Date</label>
        <CreateTodoDueDate
          type="date"
          id="todo-due-date"
          className="todo-due-date"
          value={dueDate}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setDueDate(e.target.value)
          }
          required
        />

        <CreateTodoActionGroup>
          <input type="button" value="Cancel" onClick={cancelCreation} />
          <button
          // onClick={(e) => {
          //   e.preventDefault();
          //   handleTodoCreation(title, description, dueDate);
          // }}
          >
            Create
          </button>
        </CreateTodoActionGroup>
      </CreateTodoForm>
    </form>
  );
};

export default CreateTodo;
