import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CoreModule } from './core/core.module';
import { AppComponent } from './app.component';
import { ThemesListComponent } from './themes-list/themes-list.component';
import { HttpClientModule } from '@angular/common/http';
import { MainComponent } from './main/main.component';
import { AsideComponent } from './aside/aside.component';
import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { AuthModule } from './auth/auth.module';
import { ThemesPageComponent } from './themes-page/themes-page.component';

@NgModule({
  declarations: [
    AppComponent,
    ThemesListComponent,
    MainComponent,
    AsideComponent,
    ThemesPageComponent,
  ],
  imports: [
    BrowserModule,
    CoreModule,
    HttpClientModule,
    SharedModule,
    AppRoutingModule,
    AuthModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [
    AppRoutingModule
  ]
})
export class AppModule { }
