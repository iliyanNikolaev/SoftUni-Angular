// import { Injectable } from '@angular/core';
import { Todo } from './type/Todo';

// @Injectable({
//   providedIn: 'root'
// })

export class UserService {
  #counter = 5;

  todos: Todo[] = [
    { id: 1, content: 'learn angular' },
    { id: 2, content: 'make a good project' },
    { id: 3, content: 'deploy' },
    { id: 4, content: 'documentation' }
  ];

  constructor() { 
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
