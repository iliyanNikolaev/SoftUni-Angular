import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  ngOnInit(){
    console.log('component rendered')  
  }
  ngAfterViewInit(){
    console.log('component after rendering')  
  }
  ngOnDestroy(){
    console.log('component after destroy')  
  }
  handleLogin(username: string, password: string) {
    console.log(username, password);
  }
}
