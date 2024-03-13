import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { ItemComponent } from './item/item.component';
import { SharedModule } from '../shared/shared.module';
import { DetailsComponent } from './details/details.component';
import { RouterModule } from '@angular/router';
import { DetailsGuard } from './details/details.guard';

@NgModule({
  declarations: [
    ListComponent,
    ItemComponent,
    DetailsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      { path: 'users/details/:id', component: DetailsComponent, canActivate: [DetailsGuard] }
    ])
  ],
  exports: [
    ListComponent,
    DetailsComponent
  ],
})
export class UsersModule { }
