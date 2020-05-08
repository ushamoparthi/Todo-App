import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TodoItem } from '../interfaces/todo-item.model';
import { Store } from '@ngrx/store';
import { GetTodoItems, AddTodoItem, DeleteTodoItem } from '../actions/todo.action';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  /** List of todo items */
  public todoList$: Observable<TodoItem[]>;

  /** To capture the to do item entered */
  public todoItem: string;

  constructor(private store: Store<{ todoItems: TodoItem[] }>) {
    this.todoList$ = this.store.select('todoItems');
  }

  ngOnInit() {
    this.store.dispatch(GetTodoItems());
  }

  /** Method to add todo item @public addTodoItem */
  public addTodoItem(): void {
    if (this.todoItem) {
      this.store.dispatch(AddTodoItem({ addOrDeletePayload: { name: this.todoItem } }))
    }
  }

  /** Method to delete todo item @public deleteTodoItem */
  public deleteTodoItem(todoItem: TodoItem): void {
    this.store.dispatch(DeleteTodoItem({ addOrDeletePayload: todoItem }))
  }

}
