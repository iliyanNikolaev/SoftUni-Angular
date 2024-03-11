import { Component } from '@angular/core';
import { UsersService } from '../users.service';
import { User } from 'src/app/types/User';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  public users: User[] = [];
  isLoading = false;
  constructor(private sUsers: UsersService) { }

  fetchUsers() {
    // this.sUsers.getUsers()
    this.isLoading = true;

    setTimeout(() => {
      this.isLoading = false;
    }, 3000);
  }
}
