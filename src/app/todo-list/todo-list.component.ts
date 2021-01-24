import { Component, OnInit } from '@angular/core';
import { Todo } from '../todo';
import { TodoService } from '../todo.service';
import { TodoItemComponent } from '../todo-item/todo-item.component';

@Component({
  selector: 'todo-list',
  template: `
    <h1>Todos</h1>
    <div class="todo-list" *ngFor="let todo of todos">
        <todo-item [id]="todo.id" [category]="todo.category" [isCompleted]="todo.isCompleted">
          {{ todo.title }}
        </todo-item>
    </div>
  `,
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent implements OnInit {
  todos: Todo[] | undefined;

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    this.todos = this.todoService.getAllTodos();
  }
}
