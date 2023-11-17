import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input } from '@angular/core';
import { Todo } from '../type/Todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoListComponent {
  @Input('todos') todos: Todo[] = [];
  constructor(private cd: ChangeDetectorRef){}

  ngOnChanges(){
    console.log('change')
  }

  refresh(){
    this.cd.detectChanges();
  }
}
