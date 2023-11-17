import { Component } from '@angular/core';
import { Todo } from './type/Todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // styleUrls: ['./app.component.css']
})
export class AppComponent {
  #counter = 5;

  todos: Todo[] = [
    { id: 1, content: 'learn angular' },
    { id: 2, content: 'make a good project' },
    { id: 3, content: 'deploy' },
    { id: 4, content: 'documentation' }
  ];

  constructor(){
    setInterval(() => {
      this.todos.push({ id: 1, content: 'auto'});
      console.log('added user')
    }, 7000)
}

  addTodo(todoContentEl: HTMLInputElement) {
    this.#counter++;
    
    if(todoContentEl.value == '') {
      return alert('please add content')
    } 
    const todo = {
      id: this.#counter,
      content: todoContentEl.value
    };
    this.todos = [...this.todos, todo];
    todoContentEl.value = '';
  }
}
