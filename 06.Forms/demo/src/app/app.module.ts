import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HighlightDirective } from './highlight.directive';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { CustomRouterLinkDirective } from './custom-router-link.directive';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HighlightDirective,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    CustomRouterLinkDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,//template driven
    ReactiveFormsModule//reactive driven
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
