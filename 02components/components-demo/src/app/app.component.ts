import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // styleUrls: ['./app.component.css']
})
export class AppComponent {
  users = [{ name: 'ilich', age: 26 }, { name: 'sonya', age: 22 }, { name: "megi", age: 23 }];
  titleNav = 'navigation'
  titleHome = 'Home page'
  templateName = 'ilich'
  emitCounter = 1;  

  onReacted(isReact: boolean) {
    this.emitCounter++;
    this.users = [...this.users, { name: `${this.templateName}${this.emitCounter}`, age: this.emitCounter }];
  }
}
