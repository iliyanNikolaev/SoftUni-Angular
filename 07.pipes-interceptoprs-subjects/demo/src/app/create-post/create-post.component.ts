import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PostService } from '../post.service';
type UserAuth = {
  fullName: string | null,
  profilePic: string | null,
  _id: string | null
}
@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent {
  selectedFile: File | null = null;
  auth: UserAuth | null = null;
  constructor(private sPost: PostService) { }
  ngOnInit(){
    const fullName = localStorage.getItem('fullName');
    if(fullName){
      this.auth = {
        fullName: localStorage.getItem('fullName'),
        profilePic: localStorage.getItem('profilePic'),
        _id: localStorage.getItem('_id')
      }
    }
  }
  createPostSubmit(form: NgForm) {

    if (this.selectedFile && !(this.selectedFile.type.startsWith('image'))) {
      form.controls['image'].setErrors({ 'invalidImage': true });
    } else if (this.selectedFile && this.selectedFile.type.startsWith('image')) {
      this.sPost.uploadImage(this.selectedFile).subscribe({
        next: (response) => {
          console.log({ textContent: form.value['textContent'], image: response });

        },
        error: console.error
      })
    } else if (this.selectedFile == null) {
      console.log({ textContent: form.value['textContent'] });
    }
  }


  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }
}
