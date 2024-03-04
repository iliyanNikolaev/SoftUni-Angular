import { Component } from '@angular/core';
import { Arduino } from './types/Arduino';
import { ArduinoService } from './arduino.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent { 
  constructor(public sArduino: ArduinoService) { }
}
