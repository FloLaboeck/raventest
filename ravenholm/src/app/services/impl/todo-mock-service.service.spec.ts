import { TestBed } from '@angular/core/testing';

import { TodoMockService } from './todo-mock-service.service';

describe('TodoMockServiceService', () => {
  let service: TodoMockService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TodoMockService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
