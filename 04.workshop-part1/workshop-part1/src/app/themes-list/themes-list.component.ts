import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { ITheme } from '../interfaces/theme';

@Component({
  selector: 'app-themes-list',
  templateUrl: './themes-list.component.html',
  // styleUrls: ['./themes-list.component.css']
})
export class ThemesListComponent {
  themes: ITheme[] = [];
  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService
      .getThemes()
      .subscribe({
        next: (data => {
          this.themes = data;
        }),
        error: (err => alert(err.message))
      });
  }
}
