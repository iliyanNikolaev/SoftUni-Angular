import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../types/User';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private URL = 'https://jsonplaceholder.typicode.com/users';

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get<User[]>(this.URL);
  }
}