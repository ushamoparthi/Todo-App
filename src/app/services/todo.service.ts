/** Service for adding/editing/deleting todo items */

import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TodoItem } from '../interfaces/todo-item.model';



@Injectable({
    providedIn: 'root'
})
export class TodoService {

    constructor(private httpClient: HttpClient){
        
    }

    /** To fetch list of todo item  */
    getTodoItems(): Observable<TodoItem[]>{
        return this.httpClient.get<TodoItem[]>('https://5eb4c5962b81f700163087f8.mockapi.io/api/v1/todoItems');
    }

    /** To add todo item */
    addTodoItem(todoItem: TodoItem){
        return this.httpClient.post('https://5eb4c5962b81f700163087f8.mockapi.io/api/v1/todoItems', todoItem);
    }

     /** To delete todo item */
     deleteTodoItem(todoItem: TodoItem){
        return this.httpClient.delete('https://5eb4c5962b81f700163087f8.mockapi.io/api/v1/todoItems/'+ todoItem.id);
    }
}