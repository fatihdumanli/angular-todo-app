import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';
import { FormControl } from '@angular/forms'
import { Todo } from '../todo';
import { TodoCategory } from '../todocategory';

@Component({
  selector: 'create-todo',
  template: `
    <div style="margin-top: 20px;">
      <button class="btn btn-info"
              *ngIf="!isCreating"
              (click)="toggleState()">Add new Todo</button>
    </div>


    <form *ngIf="isCreating" #f="ngForm">
        <div class="form-group">
          <label for="todoTitle">Title</label>
          <input
                id="todoTitle"
                name="todoTitle"
                type="text"
                class="form-control"
                ngModel
                required
                minlength="5"
                #todoTitle="ngModel"
                placeholder="Take Joe from the airport"/>
          <div *ngIf="!todoTitle.valid && todoTitle.touched">
            <div *ngIf="todoTitle.errors?.required" class="form-validation-error">Title is required!</div>
            <div *ngIf="todoTitle.errors?.minlength" class="form-validation-error">Minlength is {{ todoTitle.errors?.minlength.requiredLength }}</div>
          </div>
        </div>

        <div class="form-group">
            <label for="todoCategory">Category</label>
            <select
                  id="todoCategory"
                  name="todoCategory"
                  required
                  ngModel
                  #todoCategory="ngModel"
                  (keyup.enter)="saveTodo(f.value)"
                  class="form-control">
                <option value="-1"></option>
                <option *ngFor="let category of todoCategories; index as i" value="{{category.id}}">{{category.name}}</option>
            </select>

            <div *ngIf="!todoCategory.valid && todoCategory.touched">
              <div class="form-validation-error">Category is required.</div>
            </div>
        </div>

        <button class="btn btn-danger" (click)="toggleState()" style="float: left;">Cancel</button>
        <button class="btn btn-success" (click)="saveTodo(f.value)" [disabled]="!f.valid" style="float: right;">Save</button>
    </form>

  `,
  styleUrls: ['./create-todo.component.css'],
})
export class CreateTodoComponent implements OnInit {

  isCreating: boolean = false;
  todoCategories: TodoCategory[] | undefined;

  constructor(
    private todoService: TodoService
  ) {}

  ngOnInit(): void {
    this.todoCategories = this.todoService.getTodoCategories();
  }

  toggleState() {
      this.isCreating = !this.isCreating;
  }

  saveTodo(todoForm : any) {
      let todoItem = new Todo();
      todoItem.title = todoForm.todoTitle;
      todoItem.category = new TodoCategory();
      todoItem.category.id = todoForm.todoCategory;

      this.todoService.addTodo(todoItem);
      this.toggleState();
  }
}
