import { TestBed } from '@angular/core/testing';

import { TodoMockServiceService } from './todo-mock-service.service';

describe('TodoMockServiceService', () => {
  let service: TodoMockServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TodoMockServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
