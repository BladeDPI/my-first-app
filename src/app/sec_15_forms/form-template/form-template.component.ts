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

  constructor() {
  }

  ngOnInit(): void {
  }

  suggestUserName() {
    const suggestedName = 'Superuser';
  }

  onSubmit(form: NgForm){
    console.log(form);
  }

  onSubmit1(){
    console.log(this.signupForm);
  }
}
