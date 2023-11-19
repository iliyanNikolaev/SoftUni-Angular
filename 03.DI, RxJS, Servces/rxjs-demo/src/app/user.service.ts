import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable()

export class UserService {

  constructor( private http: HttpClient ) {

  }

  getTodos() {
    // return fetch('http://localhost:3030/data/todos')
    //   .then(res => res.json())
    return this.http.get<any>('http://localhost:3030/data/todos')
  }

  addTodo(todoContentEl: HTMLInputElement) {

  }
}
