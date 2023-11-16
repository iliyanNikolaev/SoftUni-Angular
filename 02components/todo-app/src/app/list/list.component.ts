import { Component, Input } from '@angular/core';
import { Todo } from 'src/types/Todo';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  @Input('todos') todos: Todo[] = [];
  @Input('createTodo')
  createTodo!: (content: string) => void;  
}
