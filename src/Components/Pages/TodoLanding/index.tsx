import React, { useState } from "react";
import { useTodoStore } from "../../../store/todoStore";
import { Todo } from "../../../types/todo";
import Modal from "../../molecules/Modal/index";
import CreateTodo from "../../organisms/CreateTodo/index";
import Todos from "../../organisms/Todos/index";

const currentDate = new Date();
currentDate.setDate(currentDate.getDate() + 5);

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
      <Todos todos={todoList} />
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
