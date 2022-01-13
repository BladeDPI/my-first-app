import {Component, OnDestroy, OnInit} from '@angular/core';
import {UserService} from "../user.service";
import {Subscription} from "rxjs";


@Component({
  selector: 'app-sec13',
  templateUrl: './sec13.component.html',
  styleUrls: ['./sec13.component.css']
})
export class Sec13Component implements OnInit, OnDestroy {
  userActivated = false;
  private activatedSub: Subscription;

  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
    this.activatedSub = this.userService.activatedEmitter.subscribe(didActivated => {
      this.userActivated = didActivated;
    });
  }

  ngOnDestroy(): void {
    this.activatedSub.unsubscribe();
  }

}
