import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from 'src/app/model/interfaces/todo';
import { TodoService } from 'src/app/services/todo-service';
import { TodoMockService } from 'src/app/services/impl/todo-mock-service.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.sass'],
  providers: [
    { provide: TodoService, useClass: TodoMockService}
  ],
})

export class TodoListComponent implements OnInit {

  todoItems: Array<Todo>;

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
    this.todoService.getTodos().subscribe(t => this.todoItems = t);
  }
}
