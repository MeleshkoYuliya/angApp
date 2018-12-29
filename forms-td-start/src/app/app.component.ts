import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  @ViewChild('f') singupForm: NgForm;
  defaultQuestion = 'pet';
  answer = '';
  genders = ['male', 'female'];
  user = {
    username: '',
    email: '',
    secretQuestion: '',
    answer: '',
    gender: '',
  };

  submited = false;
  suggestUserName() {
    const suggestedName = 'Superuser';
    //set whole form
    // this.singupForm.setValue({
    //   userData: {
    //     username: suggestedName,
    //     email: '',
    //   },
    //   secret: 'teacher',
    //   questionAnswer: '',
    //   gender: 'male',
    // });

    //set not whole form
    this.singupForm.form.patchValue({
      userData: {
        username: suggestedName,
      },
    });
  }

  // onSubmit(form: NgForm) {
  //   console.log(form);
  // }
  onSubmit() {
    this.submited = true;
    this.user.username = this.singupForm.value.userData.username;
    this.user.email = this.singupForm.value.userData.email;
    this.user.secretQuestion = this.singupForm.value.secret;
    this.user.answer = this.singupForm.value.questionAnswer;
    this.user.gender = this.singupForm.value.gender;
    this.singupForm.reset();
  }
}
