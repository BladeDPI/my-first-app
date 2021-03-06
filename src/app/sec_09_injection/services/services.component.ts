import {Component, OnInit} from '@angular/core';
import {AccountService} from "../account.service";

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {
  accounts: { name: string, status: string }[] = [];

  constructor(private accountService: AccountService) {
  }

  ngOnInit(): void {
    this.accounts = this.accountService.accounts;
  }
}
