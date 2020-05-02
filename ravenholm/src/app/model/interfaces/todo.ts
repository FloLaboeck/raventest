import { TodoState } from '../enums/todo-state.enum';
import { Guid } from 'guid-typescript';

export interface Todo {
  id: Guid;
  description: string;
  state: TodoState;
  dueDate?: Date;
  changedAt?: Date;
}
