import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-themes-list',
  templateUrl: './themes-list.component.html',
  styleUrls: ['./themes-list.component.css']
})
export class ThemesListComponent {
  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService
      .getThemes()
      .subscribe({
        next: (data => console.log(data)),
        error: (err => alert(err.message))
      });
  }
}
