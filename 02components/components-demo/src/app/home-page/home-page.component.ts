import { Component, Input, Output, EventEmitter } from '@angular/core';
import { User } from 'src/types/User';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})

export class HomePageComponent {
  @Input('title') title: string = '';
  @Input('users') users: User[] = [];
  @Output() onReacted = new EventEmitter<boolean>();

  toggle = false;
  counter = 1;
  
  onToggle = (event: Event) => {
    this.toggle = !this.toggle;
    this.counter++;
    this.onReacted.emit(true);
  }
}
