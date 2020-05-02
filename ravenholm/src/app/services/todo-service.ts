import { Observable } from 'rxjs';
import { Todo } from '../model/interfaces/todo';

export interface TodoService {
  getTodos(): Observable<Array<Todo>>;
  updateTodo(todoItem: Todo): void;
  createTodo(todoItem: Todo): void;
  deleteTodo(todoItem: Todo): void;
}
