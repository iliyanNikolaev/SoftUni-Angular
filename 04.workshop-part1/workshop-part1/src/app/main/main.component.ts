import { Component } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  get isLogged(): boolean {
    return this.authService.isLogged;
  }

  constructor(private authService: AuthService) {

  }

}
