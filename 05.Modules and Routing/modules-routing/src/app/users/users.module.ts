import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersListComponent } from './users-list/users-list.component';
import { DetailsComponent } from './details/details.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [UsersListComponent, DetailsComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    UsersListComponent
  ]
})
export class UsersModule { }
