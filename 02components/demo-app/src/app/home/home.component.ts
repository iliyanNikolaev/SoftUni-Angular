import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @Input('testTitle') testTitle: string = '';
  @Input('users') users: {name: string, age: number}[] = [];
  ngOnInit(): void {
    console.log('home component rendered!')
  }
}
