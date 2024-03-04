import { Component, OnInit } from '@angular/core';
import { ArduinoService } from './arduino.service';
import { Comment } from './types/Comment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{ 
  comments: Comment[];
  isLoading = true;
  constructor(public sArduino: ArduinoService) {
    this.comments = this.sArduino.comments;
   }

  ngOnInit(): void {
    this.sArduino.getComments().subscribe(data => {
      this.comments = data;
      this.isLoading = false;
    })
  }
}
