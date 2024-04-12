import React, { useState } from "react";
import { useTodoStore } from "../../../store/todoStore";
import { Todo, TodoState } from "../../../types/todo";
import Modal from "../../molecules/Modal/index";
import CreateTodo from "../../organisms/CreateTodo/index";
import StateColumn from "../../organisms/StateColumn";
import Todos from "../../organisms/Todos/index";
import { MainStatesContainer } from "./styles";

const TodoLanding = () => {
  const [showCreateTodoModal, setShowCreateTodoModal] = useState(false);
  const todoList = useTodoStore((state) => state.todoList);
  const addTodo = useTodoStore((state) => state.addTodo);

  const openCreateModal = () => {
    setShowCreateTodoModal(true);
  };
  const createTodo = (todo: Todo) => {
    addTodo(todo);
    setShowCreateTodoModal(false);
  };
  return (
    <div>
      <button onClick={openCreateModal}>Create</button>
      <MainStatesContainer>
        <StateColumn
          status={TodoState.BACKLOG}
          todos={todoList.filter(
            (todo) => todo.todoState === TodoState.BACKLOG
          )}
        />
        <StateColumn
          status={TodoState.INPROGRESS}
          todos={todoList.filter(
            (todo) => todo.todoState === TodoState.INPROGRESS
          )}
        />
        <StateColumn
          status={TodoState.COMPLETED}
          todos={todoList.filter(
            (todo) => todo.todoState === TodoState.COMPLETED
          )}
        />
      </MainStatesContainer>

      <Modal
        isOpen={showCreateTodoModal}
        onClose={() => setShowCreateTodoModal(false)}
      >
        <CreateTodo
          createTodo={createTodo}
          cancelCreation={() => setShowCreateTodoModal(false)}
        />
      </Modal>
    </div>
  );
};

export default TodoLanding;
