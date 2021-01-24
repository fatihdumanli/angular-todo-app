import { Injectable } from '@angular/core';
import { Todo } from './todo';
import { TodoCategory } from './todocategory';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  todos: Todo[] = [
    {
      id: 1,
      title: 'Invite Jimmy to the Prague trip',
      isCompleted: false,
      category: {
        id: 1,
        name: "Travel"
      }
    },
    {
      id: 2,
      title: 'Buy a bread',
      isCompleted: true,
      category: {
        id: 2,
        name: "Shopping"
      }
    },
    {
      id: 3,
      title: 'Meet Jane to discuss the offer',
      isCompleted: false,
      category: {
        id: 3,
        name: "Business"
      }
    }
  ];

  constructor() { }

  completeTodo(id: number) {
    this.todos.filter(t => t.id === id)[0].isCompleted = true;
  }

  getAllTodos(): Todo[] {
      return this.todos;
  }

  getTodoCategories(): TodoCategory[] {
      return [
        {
          id: 2,
          name: "Shopping"
        },
        {
          id: 1,
          name: "Travel"
        },
        {
          id: 3,
          name: "Business"
        },
        {
          id: 4,
          name: "General"
        },
        {

          id: 5,
          name: "Hobbies"
        }
      ];
  }

  addTodo(todo: Todo) {
    console.log(todo);
    let category = this.getTodoCategories().filter(c => c.id.toString() === todo.category.id.toString());
    todo.category.name = category[0].name;
    this.todos.push(todo);
  }
}
