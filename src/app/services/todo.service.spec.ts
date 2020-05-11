import { TestBed } from '@angular/core/testing';

import { TodoService } from './todo.service';
import { HttpClientModule } from '@angular/common/http';
import { TodoItem } from '../interfaces/todo-item.model';
import { observable } from 'rxjs';
describe('TodoService', () => {
  let todoService: TodoService;
  beforeEach(() => {
    TestBed.configureTestingModule({
    imports: [
      HttpClientModule
    ]
  });
  todoService = TestBed.get(TodoService);
});

  it('should be created', () => {
    expect(todoService).toBeTruthy();
  });

  it('should fetch todo items as observable', (done:  DoneFn) => {
    todoService.getTodoItems().subscribe(value => {
     // expect(value).toBe(observable<ArrayLike<TodoItem>>);
      done();
    })
  });
});
