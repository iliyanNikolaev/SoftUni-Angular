import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IUser } from 'src/app/interfaces/User';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  // styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  isLoading: boolean = true;
  currentId: number | null = null;
  currentUser: IUser | null = null;
  constructor(private activatedRoute: ActivatedRoute, private usersService: UsersService) { 
    this.activatedRoute.params.subscribe(params => this.currentId = params['id']);
  }

  ngOnInit() {
    if(this.currentId){
      this.usersService
        .getUserById(this.currentId)
        .subscribe({
          next: data => {
            this.currentUser = data;
            this.isLoading = false;
          },
          error: err => alert(err.message)
        });
    }
  }
}
