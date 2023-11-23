import { Component } from '@angular/core';
import { UsersService } from '../users.service';
import { IUser } from 'src/app/interfaces/User';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  // styleUrls: ['./users-list.component.css']
})
export class UsersListComponent {
  users: IUser[] | null = null;
  constructor(private usersService: UsersService) {}

  ngOnInit() {
    this.usersService
      .getUsers()
      .subscribe({
        next: (data) => { this.users = data },
        error: (err) => alert(err.message)
      })
  }
}
