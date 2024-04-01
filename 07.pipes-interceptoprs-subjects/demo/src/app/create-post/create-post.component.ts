import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent {
  message: string = 'Form Not Submited'
  selectedFile: File | null = null;
  createPostSubmit(form: NgForm) { 
    if (!this.selectedFile?.type.startsWith('image')) {
      form.controls['image'].setErrors({ 'invalidImage': true });
    } else {
      // Можете да продължите със своята логика за вход тук
      console.log(this.selectedFile?.type.startsWith('image'));
      this.message = 'Form submitted successfully!';
    }
  }
  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }
}
