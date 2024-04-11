export enum TodoState {
  BACKLOG,
  INPROGRESS,
  COMPLETED,
}
export interface Todo {
  id: string;
  todoState: TodoState;
  todoTitle: string;
  todoDesc: string;
  todoDueDate: Date;
  todoCreateDate: Date;
}
