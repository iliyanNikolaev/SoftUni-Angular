import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { IPost } from '../interfaces/post';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  // styleUrls: ['./aside.component.css']
})
export class AsideComponent {
  posts: IPost[] = [];
  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService
      .getLatestPosts()
      .subscribe({
        next: (data) => {
          this.posts = data;
        },
        error: (err) => { alert(err.message) }
      })
  }
}
