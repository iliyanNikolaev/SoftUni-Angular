import { Component } from '@angular/core';
import { Arduino } from './types/Arduino';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'playground';
  arduinos: Arduino[] = [{
    model: 'Uno',
    microcontroller: 'ATmega328P 16 MHz',
    image: 'https://docs.arduino.cc/static/bbceab04f8e0726194ef4dfe2457097f/image.svg'
  },
  {
    model: 'Leonardo',
    microcontroller: 'ATmega32U4 16 MHz',
    image: 'https://docs.arduino.cc/static/4c88ffc380ff7cbc0e7340c00870501f/image.svg'
  },
  {
    model: 'Nano',
    microcontroller: 'ATmega328',
    image: 'https://docs.arduino.cc/static/3f2881bc823724bfa1f0b586a830bde1/image.svg'
  }
  ]

  handleCreate(model: HTMLInputElement, microcontroller: HTMLInputElement, image: HTMLInputElement) {
    if (!model.value || !microcontroller.value || !image.value) {
      throw new Error('all fields are required');
    }
    this.arduinos.push({
      model: model.value,
      microcontroller: microcontroller.value,
      image: image.value
    });
    model.value = '';
    microcontroller.value = '';
    image.value = '';
  }
}
