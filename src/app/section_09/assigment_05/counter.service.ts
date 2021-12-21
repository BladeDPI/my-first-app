import {Injectable} from "@angular/core";

@Injectable({providedIn: 'root'})
export class CounterService {
  activeCount: number = 0;
  inActiveCount: number = 0;

  userActivated() {
    this.activeCount++;
    console.log("activeCount: " + this.activeCount);
  }

  userInactivated() {
    this.inActiveCount++;
    console.log("inActiveCount: " + this.inActiveCount);
  }
}
