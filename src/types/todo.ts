export enum TodoState {
  BACKLOG,
  INPROGRESS,
  COMPLETED,
}
export interface Todo {
  id: number;
  todoState: TodoState;
  todoTitle: string;
  todoDesc: string;
  todoDueDate: Date;
  todoCreateDate: Date;
}
