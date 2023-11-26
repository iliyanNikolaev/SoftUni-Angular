import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
<<<<<<< Updated upstream
import { IUser } from 'src/app/interfaces/User';
import { UsersService } from '../users.service';
=======
<<<<<<< HEAD
=======
import { IUser } from 'src/app/interfaces/User';
import { UsersService } from '../users.service';
>>>>>>> 87bc027067de9a10d3970243817ada7e87c21efb
>>>>>>> Stashed changes

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  // styleUrls: ['./details.component.css']
})
export class DetailsComponent {
<<<<<<< Updated upstream
=======
<<<<<<< HEAD
  constructor(private activatedRoute: ActivatedRoute) { 
    console.log(this.activatedRoute.snapshot.params['id']) 
  }


=======
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
=======
>>>>>>> 87bc027067de9a10d3970243817ada7e87c21efb
>>>>>>> Stashed changes
}
