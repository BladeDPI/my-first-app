import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-form-template',
  templateUrl: './form-template.component.html',
  styleUrls: ['./form-template.component.css']
})
export class FormTemplateComponent implements OnInit {
  @ViewChild('f') signupForm: NgForm;
  defaultQuestion = 'pet';
  answer = "";
  genders = ['male', 'female'];
  user = {
    username: '',
    email: '',
    secretQuestion:'',
    anwer:'',
    gender:''
  }
  submitted = false;

  constructor() {
  }

  ngOnInit(): void {
  }

  suggestUserName() {
    const suggestedName = 'Superuser';
    // this.signupForm.setValue({
    //   userData: {
    //     username: suggestedName,
    //     email: ''
    //   },
    //   secrete: 'pet',
    //   questionAnswer: '',
    //   gender: 'male'
    // });
    this.signupForm.form.patchValue({
      userData: {
        username: suggestedName
      },
      secrete: 'pet'
    });
  }

  onSubmit(form: NgForm) {
    console.log(form);
    this.user.username = this.signupForm.value.userData.username;
    this.user.email = this.signupForm.value.userData.email;
    this.user.secretQuestion = this.signupForm.value.secrete;
    this.user.anwer = this.signupForm.value.questionAnswer;
    this.user.gender = this.signupForm.value.gender;
    this.submitted = true;

    this.signupForm.reset();
  }

  onSubmit1() {
    console.log(this.signupForm);
  }
}
