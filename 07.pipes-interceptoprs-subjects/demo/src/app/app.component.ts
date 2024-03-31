import { Component } from '@angular/core';
import { interval, map } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  data = { message: "hello" }
  mockPromise = new Promise((res) => {
    setTimeout(() => {
      res({data: 'this is the data from mocked promise!'});
    }, 3000);
  });

  clock$ = interval(1000).pipe(map((x) => new Date()));
}
