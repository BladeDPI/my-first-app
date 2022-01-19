import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-assigment06',
  templateUrl: './assigment06.component.html',
  styleUrls: ['./assigment06.component.css']
})
export class Assigment06Component implements OnInit {
  @ViewChild('signupForm', {static: false}) signupForm: NgForm;
  subscriptions = ['Basic', 'Advanced', 'Pro'];
  defaultSubscription = 'Advanced';

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

  onSubmit() {
    console.log(this.signupForm.value);
    this.user.email = this.signupForm.value.email;
    this.user.subscription = this.signupForm.value.subscription;
    this.user.password = this.signupForm.value.password;

    this.submitted = true;

    this.signupForm.reset();
  }
}
