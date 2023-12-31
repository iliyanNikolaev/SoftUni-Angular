import { Injectable } from '@angular/core';
import { IUser } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: IUser | null = null;

  get isLogged() {
    return this.user != null;
  }
  
  constructor() { }

}
