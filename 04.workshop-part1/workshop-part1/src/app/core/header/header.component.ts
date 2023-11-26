import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { IUser } from 'src/app/interfaces/user';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  // styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  get user(): IUser | null {
    return this.authService.user;
  }

  get isLogged(): boolean {
    return this.authService.isLogged;
  }

  constructor(private authService: AuthService, private router: Router) { 
  }
}
