import { Component } from '@angular/core';
import { Todo } from 'src/types/Todo';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // styleUrls: ['./app.component.css']
})
export class AppComponent {
  todos: Todo[]
  constructor(){
    this.todos = [{ id: 1, content: 'Learn Angular' }, { id: 2, content: 'Create a good project' }, { id: 3, content: 'Write documentation and deploy'} ];
  }

  createTodo(content: string) {
    const todo = {
      id: Number(Math.random().toString().slice(-3)),
      content
    }
    
    this.todos = [...this.todos, todo];
  }
}
