import {FormControl} from "@angular/forms";
import {Observable} from "rxjs";

export class CustomValidatiors {
  static forbiddenProjectName = ['Test'];

  static forbiddenProjectNames(control: FormControl): { [s: string]: boolean } {
    if (CustomValidatiors.forbiddenProjectName.indexOf(control.value) !== -1) {
      return {'projectNameIsForbidden': true};
    }
    return null; //validation is good
  }

  static forbiddenEmails(control: FormControl): Promise<any> | Observable<any> {
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
