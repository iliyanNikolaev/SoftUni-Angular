import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PostService } from '../post.service';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent {
  message: string = 'Form Not Submited'
  selectedFile: File | null = null;

  constructor(private sPost: PostService) { }

  createPostSubmit(form: NgForm) {

    if (this.selectedFile && !(this.selectedFile.type.startsWith('image'))) {
      form.controls['image'].setErrors({ 'invalidImage': true });
    } else if (this.selectedFile && this.selectedFile.type.startsWith('image')) {
      this.sPost.uploadImage(this.selectedFile).subscribe({
        next: (response) => {
          this.message = 'Form submitted successfully! Check cloudinary storage!';
          console.log({ textContent: form.value['textContent'], image: response });
        },
        error: console.error
      })
    } else if (this.selectedFile == null) {
      this.message = 'Form submitted successfully! Without image!';
      console.log({ textContent: form.value['textContent'] });
    }
  }


  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }
}
