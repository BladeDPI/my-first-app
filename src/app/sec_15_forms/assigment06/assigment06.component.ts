import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-assigment06',
  templateUrl: './assigment06.component.html',
  styleUrls: ['./assigment06.component.css']
})
export class Assigment06Component implements OnInit {
  @ViewChild('f') signupForm: NgForm;
  defaultSubscription = 'advanced';

  user = {
    email: '',
    subscription: '',
    password: '',
  }
  submitted = false;

  constructor() {
  }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    console.log(form);
    this.user.email = this.signupForm.value.email;
    this.user.subscription = this.signupForm.value.subscription;
    this.user.password = this.signupForm.value.password;

    this.submitted = true;

    this.signupForm.reset();
  }
}
