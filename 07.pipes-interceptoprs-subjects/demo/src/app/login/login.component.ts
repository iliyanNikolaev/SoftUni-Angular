import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  message = 'You are not logged'
  constructor(private sUser: UserService) {}
  ngOnInit(): void {
    const fullName = localStorage.getItem('fullName');
    if(fullName){
      this.message = 'You are logged with, ' + fullName
    }
  }
  loginSubmit(form: NgForm) {
    if(form.invalid){
      return alert('invalid login data!');
    }
    const { email, password } = form.value;
    this.sUser.login(email, password).subscribe({
      next: () => {
        const fullName = localStorage.getItem('fullName');
        this.message = 'You are logged with, ' + fullName;
        form.reset();
      },
      error: console.error
    })
  }
}