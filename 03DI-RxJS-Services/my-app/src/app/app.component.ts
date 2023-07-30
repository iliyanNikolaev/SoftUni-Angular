import { ChangeDetectionStrategy, Component } from '@angular/core';
import { User } from './types/User';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  title = '02lection';

  users: User[] = [
    {name: 'ilich', age: 26},
    {name: 'megi', age: 23},
    {name: 'sonya', age: 22},
    {name: 'boyana', age: 21}
  ]

  constructor() {
    setInterval(()=> {
      this.users.push({
        name: 'dummy name',
        age: 25
      })

      console.log('User has been added!!');
    }, 5000)    
  }

  addUser(inputName: HTMLInputElement, inputAge: HTMLInputElement){
    const user = {
      name: inputName.value,
      age: Number(inputAge.value)
    };

    this.users = [...this.users, user];

    inputName.value = '';
    inputAge.value = '';
  }
}
