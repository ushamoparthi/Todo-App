/** Actions for todo items */
import { createAction, props } from '@ngrx/store';
import { TodoItem } from '../interfaces/todo-item.model';


export const GetTodoItems = createAction('[Todo Component] GetTodoItems');

export const LoadTodoItemsSuccess = createAction('[Todo API] TodoItems Load Succcess');

export const AddTodoItem = createAction('[Todo Component] AddTodoItem', props<{addOrDeletePayload: TodoItem}>());

export const AddTodoItemSuccess = createAction('[Todo API] TodoItem Added Succcess');

export const DeleteTodoItem = createAction('[Todo Component] DeleteTodoItem', props<{addOrDeletePayload: TodoItem}>());

export const DeleteTodoItemSuccess = createAction('[Todo API] TodoItem Deleted Succcess');