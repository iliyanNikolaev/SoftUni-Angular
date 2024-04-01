import { Component, OnInit } from '@angular/core';
import { interval, map } from 'rxjs';
import { User } from './types/schema-types';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  data = { message: "hello" }
  clock$ = interval(1000).pipe(map((x) => new Date()));
  users: User[] = [];
  constructor(private sUser: UserService) { }
  ngOnInit(): void {
    this.sUser.getAllUsers().subscribe({
      next: console.log,
      error: console.error
    });
  }
}
