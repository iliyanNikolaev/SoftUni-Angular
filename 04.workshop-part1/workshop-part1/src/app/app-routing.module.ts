import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { ThemesPageComponent } from './themes-page/themes-page.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { CreateThemeComponent } from './create-theme/create-theme.component';
import { ThemeDetailsComponent } from './theme-details/theme-details.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: MainComponent
  },
  {
    path: 'themes',
    component: ThemesPageComponent
  },
  {
    path: 'create-theme',
    component: CreateThemeComponent
  },
  {
    path: 'details/:id',
    component: ThemeDetailsComponent
  },
  {
    path: 'not-found',
    component: NotFoundComponent
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
