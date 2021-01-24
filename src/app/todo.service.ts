import { Injectable } from '@angular/core';
import { Todo } from './todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  todos: Todo[] = [
    {
      id: 1,
      title: 'Invite Jimmy to the Prague trip',
      isCompleted: false,
      category: 'Travel'
    },
    {
      id: 2,
      title: 'Buy a bread',
      isCompleted: true,
      category: 'Shopping'
    },
    {
      id: 3,
      title: 'Meet Jane to discuss the offer',
      isCompleted: false,
      category: 'Business'
    }
  ];

  constructor() { }

  completeTodo(id: number) {
    this.todos.filter(t => t.id === id)[0].isCompleted = true;
  }

  getAllTodos(): Todo[] {
      return this.todos;
  }

  getTodoCategories(): string[] {
      return [
        "Shopping",
        "Travel",
        "Business",
        "General",
        "Hobbies"
      ];
  }

  addTodo(todo: Todo) {
    this.todos.push(todo);
  }
}
