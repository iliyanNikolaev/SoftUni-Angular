import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { UserService } from './user.service';

@NgModule({
  declarations: [
    AppComponent,
    TodoItemComponent,
    TodoListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [ UserService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
