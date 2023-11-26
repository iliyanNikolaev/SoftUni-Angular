import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private router: Router, private authService: AuthService) {

  }

  login(): void {
    this.authService.user = {
      created_at: 'today',
      email: 'ilich@abv.bg',
      password: '122313213',
      posts: [],
      tel: '08865e23',
      themes: [],
      updatedAt: 'today',
      username: 'ilich',
      __v: 123,
      _id: 'id123'
    }

    this.router.navigate(['/']);
  }
}
