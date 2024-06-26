import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TimeAgoPipe } from './time-ago.pipe';
import { HttpClientModule } from '@angular/common/http';
import { authInterceptorProvider } from './auth.interceptor';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { CreatePostComponent } from './create-post/create-post.component';

@NgModule({
  declarations: [
    AppComponent,
    TimeAgoPipe,
    LoginComponent,
    CreatePostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    authInterceptorProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
