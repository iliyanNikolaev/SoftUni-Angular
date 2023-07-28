import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  // template: '<h1>Test template</h1>',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
  
export class AppComponent {
  title = 'title from app component';
  testTitle = 'test title'
  users = [
    {name: 'ilich', age: 25}, 
    {name: 'megi', age: 24},
    {name: 'zlatina', age: 23},
    {name: 'sonya', age: 22},
  ]
  onEventClick = () => {
    console.log('event emiter');
  }
}
