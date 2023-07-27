import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  users = [
    {name: 'ilich', age: 25}, 
    {name: 'megi', age: 23},
    {name: 'zlatina', age: 23}
  ]
}
