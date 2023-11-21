import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CoreModule } from './core/core.module';
import { AppComponent } from './app.component';
import { ThemesListComponent } from './themes-list/themes-list.component';
import { HttpClientModule } from '@angular/common/http';
import { MainComponent } from './main/main.component';
import { AsideComponent } from './aside/aside.component';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    ThemesListComponent,
    MainComponent,
    AsideComponent,
  ],
  imports: [
    BrowserModule,
    CoreModule,
    HttpClientModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
