import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ArduinoListComponent } from './arduino-list/arduino-list.component';
import { ArduinoItemComponent } from './arduino-item/arduino-item.component';

@NgModule({
  declarations: [
    AppComponent,
    ArduinoListComponent,
    ArduinoItemComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
