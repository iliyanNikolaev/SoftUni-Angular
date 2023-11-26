import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UsersListComponent } from './users/users-list/users-list.component';
import { AboutComponent } from './about/about.component';
import { DetailsComponent } from './users/details/details.component';
<<<<<<< Updated upstream
import { AuthGuard } from './users/user-details.guard';
=======
<<<<<<< HEAD
=======
import { AuthGuard } from './users/user-details.guard';
>>>>>>> 87bc027067de9a10d3970243817ada7e87c21efb
>>>>>>> Stashed changes

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/home'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'users-list',
    component: UsersListComponent
  },
  {
    path: 'user-details/:id',
    component: DetailsComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'users-list/details/:id',
    // canActivate: [AuthGuard],
    component: DetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
