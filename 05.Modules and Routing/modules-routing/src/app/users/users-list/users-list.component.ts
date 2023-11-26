import { Component } from '@angular/core';
import { UsersService } from '../users.service';
import { IUser } from 'src/app/interfaces/User';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  // styleUrls: ['./users-list.component.css']
})
export class UsersListComponent {
  isLoading: boolean = true;
  users: IUser[] | null = null;
  constructor(private usersService: UsersService) {}

  ngOnInit() {
    this.usersService
      .getUsers()
      .subscribe({
        next: (data) => { 
          this.users = data
          this.isLoading = false; 
        },
        error: (err) => alert(err.message)
      })
  }
}
