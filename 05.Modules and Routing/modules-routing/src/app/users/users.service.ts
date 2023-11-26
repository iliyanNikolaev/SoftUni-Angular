import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { IUser } from '../interfaces/User';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class UsersService {

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get<IUser[]>('https://jsonplaceholder.typicode.com/users');
  }

<<<<<<< Updated upstream
  getUserById(id: number) {
=======
<<<<<<< HEAD
  getUserById(id: string) {
=======
  getUserById(id: number) {
>>>>>>> 87bc027067de9a10d3970243817ada7e87c21efb
>>>>>>> Stashed changes
    return this.http.get<IUser>('https://jsonplaceholder.typicode.com/users/'+id);
  }
}
