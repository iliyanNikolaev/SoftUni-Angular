import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { ItemComponent } from './item/item.component';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    ListComponent,
    ItemComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    SharedModule
  ],
  exports: [
    ListComponent
  ]
})
export class UsersModule { }
