import { Component } from '@angular/core';
import { User } from 'src/types/User';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})

export class HomePageComponent {
  users: User[]
  toggle = false;
  counter = 1;

  constructor(){
    this.users = [{ name: 'ilich', age: 26 }, { name: 'sonya', age: 22 }, { name: "megi", age: 23 }];
  }
  onToggle = (event: Event) => {
    this.toggle = !this.toggle;
    this.counter++;
  }
}
