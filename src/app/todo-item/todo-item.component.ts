import { TodoService } from './../todo.service';
import { Component, Input, OnInit } from '@angular/core';
import { TodoCategory } from '../todocategory';

@Component({
  selector: 'todo-item',
  template: `
    <div class="todo-container"
         [class.completed]="isCompleted">

      <div class="todo-heading" [ngStyle]="{
        'text-decoration': isCompleted ? 'line-through' : 'none'
        }">
        <ng-content>
        </ng-content>

        <div class="todo-tools" *ngIf="!isCompleted">
            <button class="btn btn-success" (click)="completeTodo()">Complete</button>
        </div>
      </div>

      <div class="todo-category">
        {{ category }}
      </div>


    </div>
  `,
  styleUrls: ['./todo-item.component.css'],
})
export class TodoItemComponent implements OnInit {
  @Input('id')
  id: number = 0;
  title: string = "";
  @Input('category')
  category: TodoCategory | undefined;
  @Input('isCompleted')
  isCompleted: boolean = false;

  constructor(
    private todoService: TodoService
  ) {}

  ngOnInit(): void {}

  completeTodo() {
    this.todoService.completeTodo(this.id);
  }
}
