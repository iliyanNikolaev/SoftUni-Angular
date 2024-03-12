import { Component } from '@angular/core';
import { UsersService } from '../users.service';
import { User } from 'src/app/types/User';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  public users: User[] = [];
  isLoading = false;
  constructor(private sUsers: UsersService, private router: Router) { }

  fetchUsers() {
    this.isLoading = true;

    this.sUsers.getUsers().subscribe((users) => {
      this.users = users;
      this.isLoading = false;
    })
  }

  navTo() {
    this.router.navigate(['login'])
  }
}
