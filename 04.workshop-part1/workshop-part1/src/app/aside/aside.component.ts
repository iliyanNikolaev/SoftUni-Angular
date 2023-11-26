import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { IPost } from '../interfaces/post';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  // styleUrls: ['./aside.component.css']
})
export class AsideComponent {
  isError: boolean = false;
  posts: IPost[] | null = null;
  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService
      .getLatestPosts()
      .subscribe({
        next: data => this.posts = data,
        error: err => this.isError = true
      })
  }
}
