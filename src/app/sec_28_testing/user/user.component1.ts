import {Component, OnInit} from '@angular/core';

import {UserService} from "./user.service";
import {DataService} from "./data.service";

@Component({
  selector: 'app-user1',
  templateUrl: './user.component1.html',
  styleUrls: ['./user.component1.css'],
  providers: [UserService, DataService]
})
export class UserComponent1 implements OnInit {
  user: { name: string };
  isLoggedIn = false;
  data: string;

  constructor(private userService: UserService, private dataService: DataService) {
  }

  ngOnInit() {
    this.user = this.userService.user;
    this.dataService.getDetails().then((data: string) => this.data = data);
  }

  onLogin() {
    this.isLoggedIn = true;
  }
}
