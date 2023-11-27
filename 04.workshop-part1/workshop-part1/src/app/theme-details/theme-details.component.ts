import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';
import { ITheme } from '../interfaces/theme';

@Component({
  selector: 'app-theme-details',
  templateUrl: './theme-details.component.html',
  styleUrls: ['./theme-details.component.css']
})
export class ThemeDetailsComponent {
  isError: boolean = false;
  currentTheme: ITheme | null = null;

  constructor(private activatedRoute: ActivatedRoute, private apiService: ApiService) {
    
  }

  ngOnInit() {
    const id = this.activatedRoute.snapshot.params['id'];

    this.apiService.getThemeById(id)
      .subscribe({
        next: (data) => { 
          this.currentTheme = data;
        },
        error: err => {
          this.isError = true;
        }
      })
  }
}
