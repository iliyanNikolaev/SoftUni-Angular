import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginSubmit(form: NgForm) {
    console.log('invalid', form.invalid)
    console.log(form.value);
    form.reset();
  }
}
