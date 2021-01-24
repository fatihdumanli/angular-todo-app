import { TodoCategory } from "./todocategory";

export class Todo {
    id: number = 0;
    title: string = "";
    isCompleted: boolean = false;
    category: TodoCategory = { id: 0, name: "" };
}
