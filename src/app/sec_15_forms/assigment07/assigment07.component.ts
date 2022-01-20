import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CustomValidatiors} from "./custom-validatiors";

@Component({
  selector: 'app-assigment07',
  templateUrl: './assigment07.component.html',
  styleUrls: ['./assigment07.component.css']
})
export class Assigment07Component implements OnInit {
  projectForm: FormGroup;
  projectStatus = ['Stable', 'Critical', 'Finished'];
  submitted = false;

  constructor() {
  }

  ngOnInit(): void {
    this.projectForm = new FormGroup({
      'projectName': new FormControl(null, [Validators.required, CustomValidatiors.forbiddenProjectNames]),
      'email': new FormControl(null, [Validators.required, Validators.email], CustomValidatiors.forbiddenEmails),
      'projectStatus': new FormControl('Critical',)
    });
  }

  onSubmit() {
    this.submitted = true;
    console.log(this.projectForm.value)
  }
}
