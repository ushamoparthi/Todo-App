/** Interface for todo-item */
export interface TodoItem{
    name: string;
    id?: string;
}

/** Interface for actions */
export interface Action{
    type: string;
    payload?: TodoItem[];
    addOrDeletePayload?: TodoItem;
}
