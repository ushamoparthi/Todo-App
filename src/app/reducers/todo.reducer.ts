import { TodoItem, Action } from '../interfaces/todo-item.model';

export function todoReducer(todoItems: TodoItem[] = [], action: Action){
    switch(action.type){
        case '[Todo API] TodoItems Load Succcess':
            return action.payload
    }
}