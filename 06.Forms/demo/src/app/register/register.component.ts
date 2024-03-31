import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registerForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.minLength(6)]],
    repeat: [''],
    firstName: [''],
    lastName: [''],
  });

  constructor(private fb: FormBuilder) { }

  registerSubmit() {
    console.log(this.registerForm.value);
  }
}
