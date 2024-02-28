import { Component } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {
  todos: string[] = [
    'todo1',
    'todo2',
    'todo3',
    'todo4',
    'todo5',
  ];
}
