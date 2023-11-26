import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { IUser } from 'src/app/interfaces/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

  get user(): IUser | null {
    return this.authService.user;    
  }

  constructor(private authService: AuthService) {
  
  }
}
