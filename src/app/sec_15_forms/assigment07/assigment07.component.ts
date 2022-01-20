import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Observable} from "rxjs";

@Component({
  selector: 'app-assigment07',
  templateUrl: './assigment07.component.html',
  styleUrls: ['./assigment07.component.css']
})
export class Assigment07Component implements OnInit {
  projectForm: FormGroup;
  projectStatus = ['Stable', 'Critical', 'Finished'];
  submitted = false;
  forbiddenProjectName = ['Test'];

  constructor() {
  }

  ngOnInit(): void {
    this.projectForm = new FormGroup({
      'projectName': new FormControl(null, [Validators.required, this.forbiddenProjectNames.bind(this)]),
      'email': new FormControl(null, [Validators.required, Validators.email], this.forbiddenEmails),
      'projectStatus': new FormControl(null,)
    });
  }

  onSubmit() {
    this.submitted = true;
    console.log(this.projectForm.value)
  }

  forbiddenProjectNames(control: FormControl): { [s: string]: boolean } {
    if (this.forbiddenProjectName.indexOf(control.value) !== -1) {
      return {'projectNameIsForbidden': true};
    }
    return null; //validation is good
  }

  forbiddenEmails(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'test@test.com') {
          resolve({'emailsIsForbidden': true});
        } else {
          resolve(null);
        }
      }, 1500);
    });
    return promise;
  }
}
