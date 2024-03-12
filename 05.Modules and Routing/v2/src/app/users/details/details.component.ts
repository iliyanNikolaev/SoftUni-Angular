import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { User } from 'src/app/types/User';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  user: User = {} as User;
  private id: string = '';

  constructor(
    private sUsers: UsersService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((v) => this.id = v['id']);
    
    this.sUsers.getUserById(this.id).subscribe((user) => {
      this.user = user;
    });
  }
}
