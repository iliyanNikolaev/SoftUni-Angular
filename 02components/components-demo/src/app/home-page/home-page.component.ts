import { Component } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {
  toggle = false;
  users = [{ name: 'ilich', age: 26 }, { name: 'sonya', age: 22 }, { name: "megi", age: 23 }];
  onToggle = () => {
    this.toggle = !this.toggle;
  }
}
