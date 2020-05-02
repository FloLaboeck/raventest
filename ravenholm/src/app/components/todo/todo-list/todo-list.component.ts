import { Component, OnInit } from '@angular/core';
import { TodoMockServiceService } from 'src/app/services/impl/todo-mock-service.service';
import { Observable } from 'rxjs';
import { Todo } from 'src/app/model/interfaces/todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.sass']
})
export class TodoListComponent implements OnInit {

  todoItems: Observable<Array<Todo>>;

  constructor(private todoMockServiceService: TodoMockServiceService) { }

  ngOnInit(): void {
    this.todoItems = this.todoMockServiceService.getTodos();
  }
}
