import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent {

  @Input('model') modelVal: string = '';
  @Output() onModelOutput = new EventEmitter<string>();

  sendDataToParent() {
    this.onModelOutput.emit(this.modelVal);
  }

  imgUrl = '/assets/arduino.png';
  imgClass = 'arduinoImg'
}
