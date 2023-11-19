import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, SimpleChange } from '@angular/core';
import { Todo } from '../type/Todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoListComponent {
  @Input('todos') todos: Todo[] = [];
  
  constructor(private cd: ChangeDetectorRef){
    this.cd.detach();
  }

  ngOnInit(){
    this.cd.detectChanges();
  }

  ngOnChanges(changes: SimpleChange){
    if(this.todos.length > 6){
      this.cd.detectChanges();
    }
  }

  // refresh(){
  //   this.cd.detectChanges();
  // }
}
// class coffeeMachine { }
// class coffeeMachineDelongi extends coffeeMachine { }
// class coffeeMachineLavazza extends coffeeMachine { }

// const machine1 = new CoffeeMachine;
// machine1.makeCoffee()
// const machine2 = new coffeeMachineDelongi;
// machine1.makeCoffee()
// const machine = new coffeeMachineLavazza;
// machine1.makeCoffee()

// type Address = {
//   country: string
//   city: string
// }

// type Wallet = {
//     ballance: number
//     bank: string
// }

// type user = {
//   name: string
//   age: number
//   address: Address,
//   wallet: Wallet
// }

// class Wallet {
//   #balance: number;
//   #bank: string;

//   constructor( balance: number, bank: string ) {
//     this.#balance = balance;
//     this.#bank = bank;
//   }
// }

// class User {
//   wallet: Wallet;
//   name: string;
//   age: number;
//   constructor(name: string, age: number, wallet: Wallet) {
//     this.name = name;
//     this.age = age;
//     this.wallet = wallet
//   }
// }

// const w = new Wallet(13000, 'unicredit');
// const u = new User('ilich', 26, w);
