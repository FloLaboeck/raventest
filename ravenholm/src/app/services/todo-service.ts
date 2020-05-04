import { Observable } from 'rxjs';
import { Todo } from '../model/interfaces/todo';
import { Injectable } from '@angular/core';

@Injectable()
export abstract class TodoService {
  abstract getTodos(): Observable<Array<Todo>>;
  abstract updateTodo(todoItem: Todo): void;
  abstract createTodo(todoItem: Todo): void;
  abstract deleteTodo(todoItem: Todo): void;
}
