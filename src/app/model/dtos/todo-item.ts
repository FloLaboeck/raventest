import { TodoState } from '../enums/todo-state.enum';
import { Guid } from 'guid-typescript';
import { Todo } from '../interfaces/todo';

export class TodoItem implements Todo {
  constructor(options?: {description: string; state: TodoState}) {
    this.description = options.description;
    this.state = options.state;
    this.createdAt = new Date();
    this.id = Guid.create();
  }
  id: Guid;
  description: string;
  state: TodoState;
  dueDate?: Date;
  createdAt: Date;
  changedAt?: Date;
}
