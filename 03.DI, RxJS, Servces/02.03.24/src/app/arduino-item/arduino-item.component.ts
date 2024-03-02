import { Component, Input } from '@angular/core';
import { Arduino } from '../types/Arduino';

@Component({
  selector: 'app-arduino-item',
  templateUrl: './arduino-item.component.html',
  styleUrls: ['./arduino-item.component.css']
})
export class ArduinoItemComponent {
  @Input ('arduino') arduino: Arduino = {
    model: '',
    microcontroller: '',
    image: ''
  };
}
