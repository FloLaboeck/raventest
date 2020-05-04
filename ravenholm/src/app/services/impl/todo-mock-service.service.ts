import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { TodoItem } from '../../model/dtos/todo-item';
import { TodoState } from '../../model/enums/todo-state.enum';
import { Todo } from '../../model/interfaces/todo';
import { TodoService } from '../todo-service';

@Injectable({
  providedIn: 'root'
})
export class TodoMockService implements TodoService {

  constructor() { }

  private todoItems: Array<Todo> = [
    new TodoItem({
      description: 'Erstes Todo',
      state: TodoState.Open
    }),
    new TodoItem({
      description: 'Zweites Todo',
      state: TodoState.Open
    }),
    new TodoItem({
      description: 'Drittes Todo',
      state: TodoState.Open
    })
  ];

  public getTodos(): Observable<Array<Todo>> {
    return of(this.todoItems);
  }

  public updateTodo(todoItem: Todo): void {
    const filteredTodos = this.todoItems.filter(t => t.id !== todoItem.id);
    filteredTodos.push(todoItem);
    this.todoItems = filteredTodos;
  }

  public createTodo(todoItem: Todo): void {
    this.todoItems.push(todoItem);
  }

  public deleteTodo(todoItem: Todo): void {
    this.todoItems = this.todoItems.filter(t => t.id !== todoItem.id);
  }
}
