import { Component, Input } from '@angular/core';
import { Todo } from '../type/Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent {
  @Input('todo') todo: Todo = {
    id: 0,
    content: ''
  };
}
