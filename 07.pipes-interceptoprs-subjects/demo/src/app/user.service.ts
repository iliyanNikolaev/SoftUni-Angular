import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './types/schema-types';
import { API_URL } from './constants';

type LoginRes = {
  token: string,
    firstName: string,
    lastName: string,
    profilePic: string,
    _id: string
}

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { 

  }

  getAllUsers(): Observable<User[]>{
    return this.http.get<User[]>(API_URL + '/users');
  }
  login(email: string, password: string): Observable<LoginRes>{
    return this.http.post<LoginRes>(API_URL + '/users/login', { email, password });
  }
}
