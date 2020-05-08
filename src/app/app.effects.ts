import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { TodoService } from './services/todo.service';
import { mergeMap, catchError, map } from 'rxjs/operators';
import { EMPTY, Observable } from 'rxjs';
import { Action } from './interfaces/todo-item.model';

@Injectable()
export class AppEffects {
  constructor(private actions$: Actions, private todoService: TodoService) { }
  @Effect()
  loadTodoEffect$: Observable<Action> = this.actions$.pipe(
    ofType('[Todo Component] GetTodoItems'),
    mergeMap(() => this.todoService.getTodoItems().pipe(
      map(todoItems => ({ type: '[Todo API] TodoItems Load Succcess', payload: todoItems }))
    )),
    catchError(() => EMPTY)
  );

  @Effect()
  addTodoEffect$: Observable<Action> = this.actions$.pipe(
    ofType('[Todo Component] AddTodoItem'),
    mergeMap((action: Action) => {
      return this.todoService.addTodoItem(action.addOrDeletePayload).pipe(
        map(todoItems => ({ type: '[Todo Component] GetTodoItems' }))
      )
    }),
    catchError(() => EMPTY)
  );

  @Effect()
  deleteTodoEffect$: Observable<Action> = this.actions$.pipe(
    ofType('[Todo Component] DeleteTodoItem'),
    mergeMap((action: Action) => {
      return this.todoService.deleteTodoItem(action.addOrDeletePayload).pipe(
        map(todoItems => ({ type: '[Todo Component] GetTodoItems' }))
      )
    }),
    catchError(() => EMPTY)
  );
}
