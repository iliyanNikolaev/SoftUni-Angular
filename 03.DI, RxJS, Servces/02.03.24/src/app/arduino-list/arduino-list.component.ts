import { Component, Input } from '@angular/core';
import { Arduino } from '../types/Arduino';

@Component({
  selector: 'app-arduino-list',
  templateUrl: './arduino-list.component.html',
  styleUrls: ['./arduino-list.component.css']
})
export class ArduinoListComponent {
  @Input ('arduinos') arduinos: Arduino[] = [];
}
